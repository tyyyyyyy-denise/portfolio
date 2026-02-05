export interface ProjectMedia {
  label: string;
  colSpan: number;
  rowSpan: number;
  bgColor: string;
  light?: boolean;
  src?: string;
}

export interface Project {
  name: string;
  description: string;
  href: string;
  mediaItems: ProjectMedia[];
}

export const projects: Project[] = [
  {
    name: "Placeholder Project 1",
    description: "Placeholder project description",
    href: "/projects/placeholder-1",
    mediaItems: [
      { label: "Media 1", colSpan: 6, rowSpan: 2, bgColor: "bg-[#4a6fa5]" },
      { label: "Hero", colSpan: 6, rowSpan: 3, bgColor: "bg-[#d4e5f7]", src: "/projects/placeholder-1/hero-animation.gif" },
      { label: "Media 3", colSpan: 4, rowSpan: 2, bgColor: "bg-[#2d3748]", light: true },
      { label: "Media 4", colSpan: 4, rowSpan: 2, bgColor: "bg-[#c9c5ba]" },
    ],
  },
  {
    name: "Placeholder Project 2",
    description: "Placeholder project description",
    href: "/projects/placeholder-2",
    mediaItems: [
      { label: "Media 1", colSpan: 6, rowSpan: 2, bgColor: "bg-[#6366f1]" },
      { label: "Media 2", colSpan: 6, rowSpan: 2, bgColor: "bg-[#e0e7ff]" },
      { label: "Media 3", colSpan: 4, rowSpan: 2, bgColor: "bg-[#4338ca]", light: true },
      { label: "Media 4", colSpan: 4, rowSpan: 2, bgColor: "bg-[#ddd6fe]" },
    ],
  },
  {
    name: "Placeholder Project 3",
    description: "Placeholder project description",
    href: "/projects/placeholder-3",
    mediaItems: [
      { label: "Media 1", colSpan: 6, rowSpan: 2, bgColor: "bg-[#059669]" },
      { label: "Media 2", colSpan: 6, rowSpan: 2, bgColor: "bg-[#d1fae5]" },
      { label: "Media 3", colSpan: 4, rowSpan: 2, bgColor: "bg-[#065f46]", light: true },
      { label: "Media 4", colSpan: 4, rowSpan: 2, bgColor: "bg-[#a7f3d0]" },
    ],
  },
  {
    name: "Placeholder Project 4",
    description: "Placeholder project description",
    href: "/projects/placeholder-4",
    mediaItems: [
      { label: "Media 1", colSpan: 6, rowSpan: 2, bgColor: "bg-[#ec4899]" },
      { label: "Media 2", colSpan: 6, rowSpan: 2, bgColor: "bg-[#fce7f3]" },
      { label: "Media 3", colSpan: 4, rowSpan: 2, bgColor: "bg-[#be185d]", light: true },
      { label: "Media 4", colSpan: 4, rowSpan: 2, bgColor: "bg-[#fbcfe8]" },
    ],
  },
  {
    name: "Placeholder Project 5",
    description: "Placeholder project description",
    href: "/projects/placeholder-5",
    mediaItems: [
      { label: "Media 1", colSpan: 6, rowSpan: 2, bgColor: "bg-[#f59e0b]" },
      { label: "Media 2", colSpan: 6, rowSpan: 2, bgColor: "bg-[#fef3c7]" },
      { label: "Media 3", colSpan: 4, rowSpan: 2, bgColor: "bg-[#b45309]", light: true },
      { label: "Media 4", colSpan: 4, rowSpan: 2, bgColor: "bg-[#fde68a]" },
    ],
  },
  {
    name: "Placeholder Project 6",
    description: "Placeholder project description",
    href: "/projects/placeholder-6",
    mediaItems: [
      { label: "Media 1", colSpan: 6, rowSpan: 2, bgColor: "bg-[#3b82f6]" },
      { label: "Media 2", colSpan: 6, rowSpan: 2, bgColor: "bg-[#dbeafe]" },
      { label: "Media 3", colSpan: 4, rowSpan: 2, bgColor: "bg-[#2563eb]", light: true },
      { label: "Media 4", colSpan: 4, rowSpan: 2, bgColor: "bg-[#bfdbfe]" },
    ],
  },
];
