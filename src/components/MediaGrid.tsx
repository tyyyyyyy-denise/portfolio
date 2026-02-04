"use client";

import Link from "next/link";
import { projects, Project } from "@/data/projects";
import { useEffect, useState, useRef, useCallback } from "react";

// Responsive column span classes mapping
// Mobile: small items = half width (col-span-6), large items = full width (col-span-12)
// Tablet (sm): medium items = half width, large = full
// Desktop (md+): use original spans
const responsiveColSpanClasses: Record<number, string> = {
  2: "col-span-6 sm:col-span-4 md:col-span-2",
  3: "col-span-6 sm:col-span-6 md:col-span-3",
  4: "col-span-12 sm:col-span-6 md:col-span-4",
  5: "col-span-12 sm:col-span-12 md:col-span-5",
  6: "col-span-12 sm:col-span-12 md:col-span-6",
};

const rowSpanClasses: Record<number, string> = {
  2: "md:row-span-2",
  3: "md:row-span-3",
  4: "md:row-span-4",
};

// Animated media item component with fade & rise effect
function AnimatedMediaItem({ 
  href, 
  colSpan, 
  rowSpan, 
  bgColor, 
  label, 
  light,
  index 
}: { 
  href: string;
  colSpan: number;
  rowSpan?: number;
  bgColor: string;
  label: string;
  light?: boolean;
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Staggered delay based on index
          setTimeout(() => {
            setIsVisible(true);
          }, index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <Link
      ref={itemRef}
      href={href}
      className={`
        ${responsiveColSpanClasses[colSpan]} 
        ${rowSpanClasses[rowSpan as number] || ''} 
        ${bgColor} 
        overflow-hidden flex items-center justify-center min-h-[100px] sm:min-h-[120px]
        transition-all duration-500 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <MediaPlaceholder label={label} light={light} />
    </Link>
  );
}

// Scale + slide title component
function ScaleSlideTitle({ project }: { project: Project }) {
  const [displayedProject, setDisplayedProject] = useState(project);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (project.href !== displayedProject.href) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      setIsAnimating(true);
      timeoutRef.current = setTimeout(() => {
        setDisplayedProject(project);
        setIsAnimating(false);
      }, 120);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [project, displayedProject.href]);

  return (
    <div 
      className="transition-all duration-200 ease-out origin-left"
      style={{ 
        transform: isAnimating ? 'scale(0.96) translateY(4px)' : 'scale(1) translateY(0)',
        opacity: isAnimating ? 0.7 : 1
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-sm font-medium text-foreground">{displayedProject.name}</h2>
        <span className="text-muted">→</span>
      </div>
      <p className="text-xs text-muted mt-1 leading-relaxed">{displayedProject.description}</p>
    </div>
  );
}

export default function MediaGrid() {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = sectionRefs.current.findIndex(
          (ref) => ref === entry.target
        );
        if (index !== -1) {
          setCurrentProject(projects[index]);
        }
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.3 });

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <>
      {/* Project Title in Sidebar - hidden on mobile */}
      <div className="hidden md:block fixed left-6 lg:left-8 top-20 w-[calc(20vw-3rem)] lg:w-[calc(20vw-4rem)] min-w-[140px] lg:min-w-[176px] max-w-[220px] lg:max-w-[256px] z-10">
        <ScaleSlideTitle project={currentProject} />
      </div>

      {/* Media Grid */}
      <div className="min-h-screen">
        {projects.map((project, index) => (
          <section
            key={project.href}
            ref={(el) => { sectionRefs.current[index] = el; }}
          >
            {/* Mobile Project Title - inline header for each section */}
            <div className="md:hidden sticky top-14 z-20 bg-background/95 backdrop-blur-sm px-4 py-3 border-b border-border/30">
              <div className="flex items-start gap-4">
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm font-medium text-foreground leading-tight">{project.name}</h2>
                  <p className="text-xs text-muted mt-1 leading-relaxed line-clamp-1">{project.description}</p>
                </div>
                <span className="text-muted text-sm flex-shrink-0">→</span>
              </div>
            </div>

            <div className="grid grid-cols-12 auto-rows-[minmax(120px,auto)] sm:auto-rows-[minmax(140px,auto)] md:auto-rows-[minmax(150px,auto)] gap-0">
              {project.mediaItems.map((item, itemIndex) => (
                <AnimatedMediaItem
                  key={`${project.href}-${itemIndex}`}
                  href={project.href}
                  colSpan={item.colSpan}
                  rowSpan={item.rowSpan}
                  bgColor={item.bgColor}
                  label={item.label}
                  light={item.light}
                  index={itemIndex}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

function MediaPlaceholder({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div className={`text-center p-4 ${light ? 'text-white/40' : 'text-black/20'}`}>
      <div className="w-12 h-12 mx-auto mb-3 rounded-lg border-2 border-dashed border-current flex items-center justify-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      </div>
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}
