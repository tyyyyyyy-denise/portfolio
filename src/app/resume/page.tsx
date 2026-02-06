import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Yun (Denise) Tang",
  description: "Product Designer who codes. Building AI-native products, complex enterprise tools, and design systems. CMU & UCSD.",
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
              YUN
              <br />
              TANG
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              Product Designer who codes. I design and build AI-native products, complex enterprise tools, and scalable design systems. I thrive in collaborative environments where design, engineering, and product work closely together.
            </p>
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mt-4">
              Currently at{" "}
              <Link href="https://medidata.com" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:no-underline">
                Medidata
              </Link>
              {" "}designing clinical research tools. Also building an AI nutrition app on the side.
            </p>
          </header>

          {/* What I Bring Section - optimized for small/mid companies */}
          <section className="mb-16">
            <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-6">
              What I Bring
            </h2>
            <ul className="space-y-3">
              <li className="text-lg">
                <span className="text-foreground font-medium">Design + Code</span>
                <span className="text-muted"> — I ship. React, Next.js, Tailwind. I can prototype in code, pair with engineers, and bridge design-dev handoff gaps.</span>
              </li>
              <li className="text-lg">
                <span className="text-foreground font-medium">AI Product Design</span>
                <span className="text-muted"> — Experience translating abstract AI capabilities into meaningful user experiences. Led 0-1 AI tool design at Medidata.</span>
              </li>
              <li className="text-lg">
                <span className="text-foreground font-medium">Systems Thinking</span>
                <span className="text-muted"> — Built UX patterns that scaled across 3 teams. Contributed to and drove adoption of design systems.</span>
              </li>
              <li className="text-lg">
                <span className="text-foreground font-medium">Research-Driven</span>
                <span className="text-muted"> — Ran usability tests, surveys, and 30+ expert interviews. Published researcher.</span>
              </li>
              <li className="text-lg">
                <span className="text-foreground font-medium">Collaborative Leadership</span>
                <span className="text-muted"> — Led cross-functional discovery with 5 teams. Onboarded 3 designers. Run workshops and rituals.</span>
              </li>
            </ul>
          </section>

          {/* Experience Section */}
          <section className="mb-16">
            <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-6">
              Experience
            </h2>
            <ul className="space-y-6">
              <li>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <span className="text-lg font-medium">AI Nutrition App</span>
                    <span className="text-muted"> — Designer & Developer</span>
                  </div>
                  <span className="text-sm text-muted">2025 - Present</span>
                </div>
                <p className="text-muted mt-1">Designed and built an AI-native mobile app with generative UI for personalized nutrition tracking.</p>
              </li>
              <li>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <Link href="https://medidata.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline underline-offset-4">
                      Medidata
                    </Link>
                    <span className="text-muted"> — Senior Product Designer</span>
                  </div>
                  <span className="text-sm text-muted">Feb 2022 - Present</span>
                </div>
                <p className="text-muted mt-1">Shipped 10+ features that reduced task time by 50% and acquired 6 strategic partners. Led 0-1 AI product design. Owned design systems adoption across B2B and B2C products.</p>
              </li>
              <li>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <Link href="https://designlab.ucsd.edu" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline underline-offset-4">
                      UCSD Design Lab
                    </Link>
                    <span className="text-muted"> — Research Fellow</span>
                  </div>
                  <span className="text-sm text-muted">2021</span>
                </div>
                <p className="text-muted mt-1">Published research on designing for people aging with type 1 diabetes.</p>
              </li>
            </ul>
          </section>

          {/* Education Section */}
          <section className="mb-16">
            <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-6">
              Education
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="https://cmu.edu" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline underline-offset-4">
                  Carnegie Mellon University
                </Link>
                <span className="text-muted"> — M.S. Innovation for Products & Services</span>
              </li>
              <li>
                <Link href="https://ucsd.edu" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline underline-offset-4">
                  UC San Diego
                </Link>
                <span className="text-muted"> — B.S. Human-Computer Interaction, Minor in Design</span>
              </li>
            </ul>
          </section>

          {/* Tools Section */}
          <section className="mb-16">
            <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-6">
              Tools & Tech
            </h2>
            <div className="space-y-4">
              <div>
                <span className="text-muted text-sm">Design</span>
                <p className="text-lg">Figma, Sketch, Adobe Creative Suite, Prototyping</p>
              </div>
              <div>
                <span className="text-muted text-sm">Code</span>
                <p className="text-lg">JavaScript, React, Next.js, Tailwind CSS, HTML/CSS</p>
              </div>
              <div>
                <span className="text-muted text-sm">Methods</span>
                <p className="text-lg">User Research, Usability Testing, Design Systems, Accessibility</p>
              </div>
            </div>
          </section>

          {/* Writing & Community Section */}
          <section className="mb-16">
            <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-6">
              Writing & Community
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="https://denisetangblog.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline underline-offset-4">
                  Design Blog & Podcast
                </Link>
                <span className="text-muted"> — 10k+ reads, 600+ community members</span>
              </li>
              <li>
                <Link href="#" className="text-lg hover:underline underline-offset-4">
                  Journal of Diabetes & Metabolic Disorders
                </Link>
                <span className="text-muted"> — Published Research</span>
              </li>
            </ul>
          </section>

          {/* Personal Section */}
          <section className="mb-16">
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              I&apos;m looking for a team where designers and engineers collaborate closely, where craft matters, and where I can contribute to products that make a real difference. I value thoughtful work environments with talented, kind people.
            </p>
          </section>

          {/* Footer */}
          <footer className="pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link
                href="http://ytang.work/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="https://linkedin.com/in/yuntang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="mailto:yunt@alumni.cmu.edu"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Email
              </Link>
            </div>
            <p className="text-sm text-muted">© {new Date().getFullYear()} Yun Tang</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
