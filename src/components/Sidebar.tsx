import Link from "next/link";

const navLinks = [
  { name: "Resume", href: "/resume" },
  { name: "Blog", href: "#" },
];

export default function Sidebar() {
  return (
    <>
      {/* Mobile Header - visible on small screens */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40 px-4 py-3 flex items-center justify-between md:hidden">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-base font-medium tracking-tight text-foreground">
            Denise Tang
          </h1>
          <span className="text-sm text-muted">UX</span>
        </Link>
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </header>

      {/* Desktop Sidebar - hidden on mobile, visible on md+ */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[20vw] min-w-[200px] max-w-[280px] lg:min-w-[240px] lg:max-w-[320px] bg-background flex-col justify-between p-6 lg:p-8">
        {/* Header */}
        <header>
          <Link href="/" className="flex items-center justify-between">
            <h1 className="text-base font-medium tracking-tight text-foreground">
              Denise Tang
            </h1>
            <span className="text-sm text-muted">UX</span>
          </Link>
        </header>

        {/* Navigation Links */}
        <footer className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </footer>
      </aside>
    </>
  );
}

