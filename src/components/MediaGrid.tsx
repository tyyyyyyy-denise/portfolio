"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { useEffect, useState, useRef } from "react";

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

export default function MediaGrid() {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Project Title in Sidebar - hidden on mobile */}
      <div className="hidden md:block fixed left-6 lg:left-8 top-20 w-[calc(20vw-3rem)] lg:w-[calc(20vw-4rem)] min-w-[140px] lg:min-w-[176px] max-w-[220px] lg:max-w-[256px] z-10">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-foreground">{currentProject.name}</h2>
          <span className="text-muted">→</span>
        </div>
        <p className="text-xs text-muted mt-1 leading-relaxed">{currentProject.description}</p>
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
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-foreground">{project.name}</h2>
                <span className="text-muted text-sm">→</span>
              </div>
              <p className="text-xs text-muted mt-0.5 leading-relaxed line-clamp-2">{project.description}</p>
            </div>

            <div className="grid grid-cols-12 auto-rows-[minmax(120px,auto)] sm:auto-rows-[minmax(140px,auto)] md:auto-rows-[minmax(150px,auto)] gap-0">
              {project.mediaItems.map((item, itemIndex) => (
                <Link
                  key={`${project.href}-${itemIndex}`}
                  href={project.href}
                  className={`${responsiveColSpanClasses[item.colSpan]} ${rowSpanClasses[item.rowSpan] || ''} ${item.bgColor} overflow-hidden flex items-center justify-center min-h-[100px] sm:min-h-[120px]`}
                >
                  <MediaPlaceholder label={item.label} light={item.light} />
                </Link>
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
