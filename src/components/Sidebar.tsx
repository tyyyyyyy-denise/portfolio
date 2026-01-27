import Link from "next/link";

const projects = [
  {
    name: "Google Pixel",
    description: "Product design for audio, haptic & hardware interaction",
    href: "/projects/google-pixel",
  },
];

const socialLinks = [
  { name: "Read.cv", href: "#", icon: "readcv" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "Instagram", href: "#", icon: "instagram" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[20vw] min-w-[240px] max-w-[320px] bg-background border-r border-border/40 flex flex-col justify-between p-8">
      {/* Header */}
      <div className="space-y-12">
        {/* Name & Title */}
        <header className="space-y-1">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-medium tracking-tight text-foreground">
              Nicolas Pellegrino
            </h1>
            <span className="text-sm text-muted">UX</span>
          </div>
        </header>

        {/* Projects */}
        <nav className="space-y-6">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              className="group block space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground group-hover:text-muted transition-colors">
                  {project.name}
                </span>
                <span className="text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed max-w-[200px]">
                {project.description}
              </p>
            </Link>
          ))}
        </nav>
      </div>

      {/* Social Links */}
      <footer className="flex items-center gap-3">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted hover:text-foreground hover:border-foreground/30 transition-all"
            aria-label={link.name}
          >
            <SocialIcon name={link.icon} />
          </Link>
        ))}
      </footer>
    </aside>
  );
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "readcv":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          <path d="M8 7h6" />
          <path d="M8 11h8" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    default:
      return null;
  }
}
