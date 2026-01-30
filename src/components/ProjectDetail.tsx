interface ProjectMedia {
  label: string;
  colSpan: number;
  rowSpan: number;
  bgColor: string;
  light?: boolean;
}

interface ProjectDetailProps {
  title: string;
  description: string;
  mediaItems: ProjectMedia[];
}

// Responsive column span classes mapping
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

export default function ProjectDetail({ title, description, mediaItems }: ProjectDetailProps) {
  return (
    <div className="min-h-screen p-4 sm:p-6">
      {/* Project Header */}
      <div className="mb-6 sm:mb-8 md:ml-[20vw]">
        <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-2">{title}</h1>
        <p className="text-muted max-w-2xl text-sm sm:text-base">{description}</p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 auto-rows-[minmax(100px,auto)] sm:auto-rows-[minmax(120px,auto)] md:grid-rows-6 gap-0 md:h-[calc(100vh-200px)]">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`${responsiveColSpanClasses[item.colSpan]} ${rowSpanClasses[item.rowSpan] || ''} ${item.bgColor} overflow-hidden flex items-center justify-center shadow-sm min-h-[80px] sm:min-h-[100px]`}
          >
            <MediaPlaceholder label={item.label} light={item.light} />
          </div>
        ))}
      </div>
    </div>
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
