import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Denise Tang",
  description: "UX designer specializing in audio, haptic, and hardware interactions. Experience at Sonos, Google, and IDEO.",
};

export default function Resume() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40 px-6 py-4 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Work
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-6 md:px-12 lg:px-20 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Name Header */}
          <header className="mb-16 md:mb-24">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-8">
              DENISE
              <br />
              TANG
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              I&apos;m a UX designer specializing in audio, haptic, and hardware interactions with a passion for creating intuitive experiences that bridge the digital and physical worlds.
            </p>
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mt-4">
              Currently designing at{" "}
              <Link href="#" className="text-foreground underline underline-offset-4 hover:no-underline">
                Company Name
              </Link>
              . Previously at Sonos, Google, and IDEO.
            </p>
          </header>

          {/* Experience Section */}
          <section className="mb-16">
            <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-6">
              Experience
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-lg hover:underline underline-offset-4">
                  Company Name
                </Link>
                <span className="text-muted"> — Senior UX Designer</span>
              </li>
              <li>
                <Link href="https://sonos.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline underline-offset-4">
                  Sonos
                </Link>
                <span className="text-muted"> — Product Designer</span>
              </li>
              <li>
                <Link href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline underline-offset-4">
                  Google
                </Link>
                <span className="text-muted"> — UX Designer, Hardware</span>
              </li>
              <li>
                <Link href="https://ideo.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline underline-offset-4">
                  IDEO
                </Link>
                <span className="text-muted"> — Interaction Designer</span>
              </li>
              <li>
                <Link href="#" className="text-lg hover:underline underline-offset-4">
                  Frog Design
                </Link>
                <span className="text-muted"> — Design Intern</span>
              </li>
            </ul>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-6">
              Expertise
            </h2>
            <ul className="space-y-2">
              <li className="text-lg">Audio & Voice Interface Design</li>
              <li className="text-lg">Haptic Feedback Systems</li>
              <li className="text-lg">Hardware UX & Industrial Design Collaboration</li>
              <li className="text-lg">Prototyping & User Research</li>
              <li className="text-lg">Design Systems</li>
              <li className="text-lg">Cross-functional Leadership</li>
            </ul>
          </section>

          {/* Education Section */}
          <section className="mb-16">
            <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-6">
              Education
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="https://risd.edu" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline underline-offset-4">
                  Rhode Island School of Design
                </Link>
                <span className="text-muted"> — MFA Industrial Design</span>
              </li>
              <li>
                <Link href="#" className="text-lg hover:underline underline-offset-4">
                  UC Berkeley
                </Link>
                <span className="text-muted"> — BA Cognitive Science</span>
              </li>
            </ul>
          </section>

          {/* Speaking & Writing Section */}
          <section className="mb-16">
            <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-6">
              Speaking & Writing
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-lg hover:underline underline-offset-4">
                  Config 2024
                </Link>
                <span className="text-muted"> — Designing for the Senses</span>
              </li>
              <li>
                <Link href="#" className="text-lg hover:underline underline-offset-4">
                  SXSW 2023
                </Link>
                <span className="text-muted"> — The Future of Haptic UX</span>
              </li>
              <li>
                <Link href="#" className="text-lg hover:underline underline-offset-4">
                  UX Collective
                </Link>
                <span className="text-muted"> — Contributing Writer</span>
              </li>
            </ul>
          </section>

          {/* Personal Section */}
          <section className="mb-16">
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              When I&apos;m not designing, you&apos;ll find me experimenting with modular synthesizers, hiking the Bay Area trails, or hunting for the perfect pour-over coffee. I believe the best designs come from curiosity about how people interact with the world around them.
            </p>
          </section>

          {/* Footer */}
          <footer className="pt-8 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Twitter
              </Link>
              <Link
                href="mailto:hello@denisetang.com"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Email
              </Link>
            </div>
            <p className="text-sm text-muted">© {new Date().getFullYear()} Denise Tang</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
