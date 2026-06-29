import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
const rajPhoto = { url: "/raj.jpg" };
const resumePdf = { url: "/RajBhardwaj-Resume.pdf" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raj Bhardwaj — AI Technical Research Engineer" },
      {
        name: "description",
        content:
          "Raj Bhardwaj — Technical Research Engineer (AI) at Keywords Studios. LLM training data, evaluation, and RAG systems shipped at production scale.",
      },
      { property: "og:title", content: "Raj Bhardwaj — AI Technical Research Engineer" },
      {
        property: "og:description",
        content:
          "Technical Research Engineer (AI) at Keywords Studios. LLM training data, evaluation, and RAG systems shipped at production scale.",
      },
      { property: "og:image", content: rajPhoto.url },
      { name: "twitter:image", content: rajPhoto.url },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#work", label: "AI Products" },
  { href: "#vibe", label: "Built with AI" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
];

const STATS = [
  { value: "1+", label: "Yrs in AI" },
  { value: "10K+", label: "Prompts" },
  { value: "98%", label: "Data Accuracy" },
];

const ABOUT_META = [
  { label: "Role", value: "Technical Research Engineer — AI" },
  { label: "Company", value: "Keywords Studios · Gurugram" },
  { label: "Education", value: "B.Tech CSE · GNIT (2024, CGPA 8.2)" },
  { label: "Recognition", value: "Promoted · Nov 2025" },
  { label: "Location", value: "New Delhi, India" },
  { label: "Email", value: "rajbhartendu7@gmail.com", href: "mailto:rajbhartendu7@gmail.com" },
  { label: "Phone", value: "+91 90138 60038", href: "tel:+919013860038" },
  { label: "LinkedIn", value: "linkedin.com/in/raj-bhardwaj-08b485200", href: "https://www.linkedin.com/in/raj-bhardwaj-08b485200/" },
  { label: "GitHub", value: "github.com/RajBhardwaj29", href: "https://github.com/RajBhardwaj29" },
];

const AI_PRODUCTS = [
  {
    tag: "LLM Training Data · Prompt Engineering",
    title: "LLM Training Data Pipeline",
    body:
      "Product-managed a 10-member AI data operations squad to ship 10,000+ structured prompt variations powering downstream LLM training. Defined the prompt taxonomy, acceptance criteria, and review loops that lifted training velocity by 56% and improved core output accuracy.",
    chips: ["10K+ prompts", "56% faster training", "10-member squad", "Prompt taxonomy"],
  },
  {
    tag: "Data Quality · QA Protocols",
    title: "Dataset QA & Audit Framework",
    body:
      "Established rigorous QA protocols and recurring data audit cycles across the AI data pipeline. Reduced dataset error rates by 40% and locked in 98% data accuracy as the baseline for downstream model validation.",
    chips: ["40% fewer errors", "98% accuracy", "Audit cycles", "Validation playbooks"],
  },
  {
    tag: "Structured Outputs · JSON · LLM Eval",
    title: "Structured JSON Validation Framework",
    body:
      "Designed the validation framework for structured JSON training datasets — covering schema contracts, edge-case handling, and automated checks. Accelerated downstream model deployment cycles and unblocked complex LLM features.",
    chips: ["JSON schema", "LLM output validation", "Edge-case coverage", "Deployment unblockers"],
  },
  {
    tag: "Error Analysis · Model Reliability",
    title: "Error-Pattern Analysis at Scale",
    body:
      "Analyzed and curated a dataset of 3,000+ samples, performing systematic error-pattern analysis and structured feedback loops with research and QA. Improved model output reliability by 20–25% over the cycle.",
    chips: ["3K+ samples", "20–25% reliability lift", "Cross-functional feedback", "Pattern analysis"],
  },
];

const VIBE_TOOLS = [
  {
    tag: "Live · No-Code Automation · Make.com",
    title: "Automated Lead Qualification & Proposal Generation",
    subtitle: "Intelligent Lead Filtering & Auto-Response System",
    body:
      "Built an end-to-end automation that captures leads from Tally forms, syncs to Airtable, filters by budget ($10K+), and sends personalized emails with Calendly links — all without human intervention. Cut manual sales overhead by up to 90% and shrank response time from hours to minutes.",
    chips: ["Make.com", "Airtable", "Tally", "Gmail automation"],
    cta: "View on GitHub",
    href: "https://github.com/RajBhardwaj29/Automated-Lead-Generation",
  },
  {
    tag: "Live · SQL · Tableau",
    title: "Customer Satisfaction Dashboard",
    subtitle: "Product Health & Funnel Analytics",
    body:
      "An end-to-end dashboard tracking NPS, funnel conversion, and product health metrics. Surfaced a 15% drop-off in the onboarding funnel and translated it into 3 UI/UX recommendations adopted by the design team to lift activation.",
    chips: ["SQL", "Tableau", "NPS", "Funnel analysis"],
    cta: "View on GitHub",
    href: "https://github.com/RajBhardwaj29",
  },
  {
    tag: "Live · Power BI",
    title: "Coffee Shop Sales Dashboard",
    subtitle: "Revenue & Purchase Pattern Analytics",
    body:
      "Power BI dashboard analyzing sales, average bill value, product performance, and customer purchase patterns. Data cleaning lifted visualization accuracy by 10% and uncovered patterns tied to a 15% revenue increase over a quarter.",
    chips: ["Power BI", "Data cleaning", "Sales analysis", "AOV"],
    cta: "View on GitHub",
    href: "https://github.com/RajBhardwaj29",
  },
];

const CASE_STUDIES = [
  {
    tag: "Consumer App · Health & Discovery",
    title: "Contextual Nutrition Awareness in an Ordering Flow",
    summary:
      "Designing contextual nutritional awareness into an ordering flow — for users who currently break out of the app to check calories.",
    sections: [
      {
        h: "Problem",
        p: "The app optimises for price, ratings, and speed. A growing segment wants healthier choices but has no in-app support — forcing them to use external tools, breaking the ordering flow and causing decision fatigue.",
      },
      {
        h: "Target user",
        p: "Urban, repeat users. Moderately health-conscious — not strict dieters. Motivated by awareness, not rigid tracking. Everyday decision-makers, not extremists.",
      },
      {
        h: "Solution",
        list: [
          "Calorie range and nutrient tags at menu-item level",
          "Optional daily intake target (user-set, never mandatory)",
          "Soft nudges during cart review — informational, not blocking",
          "Health-focused sorting as an opt-in filter",
        ],
      },
      {
        h: "Hypothesised impact",
        list: [
          "Higher exploration time and engagement from health-aware users",
          "Increased decision confidence, reduced cognitive load",
          "Potential AOV uplift via premium healthier options",
          "Gradual healthier choice adoption without friction",
        ],
      },
    ],
  },
];

function Index() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <About />
      <AIProducts />
      <BuiltWithAI />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="font-display text-xl font-black tracking-tight">
          Raj<span className="text-accent-indigo">.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Diagonal split background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-muted"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32 lg:py-40">
        <div className="flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-accent-indigo">
            <span className="h-px w-8 bg-accent-indigo" />
            AI Technical Research Engineer · New Delhi, India
          </div>
          <h1 className="font-display text-7xl font-black leading-[0.95] tracking-tight md:text-8xl lg:text-9xl">
            Raj Bhardwaj
            <span className="ml-2 inline-block h-4 w-6 translate-y-[-0.6em] bg-accent-indigo md:h-6 md:w-10" />
          </h1>
          <p className="mt-6 max-w-md text-xl font-semibold text-foreground md:text-2xl">
            Building AI products that deliver real value
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            A practitioner's portfolio — documenting what I've shipped at Keywords Studios, how I think about
            LLM data quality, and the tools I've built independently along the way.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent-indigo px-6 text-sm font-semibold text-white shadow-lg shadow-accent-indigo/30 transition-all hover:translate-y-[-1px] hover:shadow-xl hover:shadow-accent-indigo/40"
            >
              Explore my work
            </a>
            <a
              href={resumePdf.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-8">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-accent-indigo/20 blur-xl" />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-[3px] border-accent-indigo bg-muted">
              <img
                src={rajPhoto.url}
                alt="Raj Bhardwaj"
                className="h-full w-full object-cover"
                style={{ objectPosition: "50% 30%" }}
              />
            </div>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-900">
            <span>★</span> Promoted · Technical Research Engineer, AI · Nov 2025
          </div>
          <div className="grid w-full max-w-md grid-cols-3 gap-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-background px-4 py-5 text-center shadow-sm"
              >
                <div className="font-display text-3xl font-black text-accent-indigo">{s.value}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-accent-indigo">
      <span className="h-px w-8 bg-accent-indigo" />
      {children}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Background</SectionLabel>
        <h2 className="font-display text-5xl font-black tracking-tight md:text-6xl">About me</h2>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a Technical Research Engineer — AI at Keywords Studios in Gurugram, focused on the data and
              evaluation layer that makes large language models actually usable in production. I joined as a
              Research Engineer in April 2025 and was promoted into my current role in November 2025.
            </p>
            <p>
              Day to day, I product-manage a 10-member AI data operations squad — shipping structured prompt
              variations, defining QA protocols, designing JSON validation frameworks, and running error-pattern
              analysis that improves model reliability. I work at the intersection of research, QA, and product,
              translating ambiguous LLM behaviour into concrete acceptance criteria.
            </p>
            <p>
              Before Keywords Studios I was a Digital Product Consultant intern at Founders Office, where I ran
              100+ market and product research assessments and built feasibility models for early-stage digital
              products. I'm a B.Tech CSE graduate from GNIT (2024).
            </p>
          </div>

          <dl className="space-y-1 rounded-2xl border border-border bg-muted/40 p-6">
            {ABOUT_META.map((m) => (
              <div
                key={m.label}
                className="flex flex-col gap-1 border-b border-border/60 py-3 last:border-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{m.label}</dt>
                <dd className="text-sm font-medium text-foreground sm:text-right">
                  {m.href ? (
                    <a href={m.href} className="text-accent-indigo hover:underline">
                      {m.value}
                    </a>
                  ) : (
                    m.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function AIProducts() {
  return (
    <section id="work" className="scroll-mt-16 border-t border-border bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Production · Keywords Studios</SectionLabel>
        <h2 className="font-display text-5xl font-black tracking-tight md:text-6xl">AI systems I've shipped</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {AI_PRODUCTS.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-border bg-background p-7 transition-all hover:border-accent-indigo/50 hover:shadow-xl hover:shadow-accent-indigo/5"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-indigo">{p.tag}</div>
              <h3 className="mt-3 font-display text-2xl font-black tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border bg-muted/60 px-3 py-1 text-[11px] font-medium text-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuiltWithAI() {
  return (
    <section id="vibe" className="scroll-mt-16 border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Independent Projects · Analytics & BI</SectionLabel>
        <h2 className="font-display text-5xl font-black tracking-tight md:text-6xl">Tools I built independently</h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Dashboards and analytical tools I built end-to-end — from data cleaning to insight to recommendation.
          Each one connects raw data to a concrete product or business decision.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {VIBE_TOOLS.map((t) => (
            <article
              key={t.title}
              className="flex flex-col rounded-2xl border border-border bg-background p-7 transition-all hover:border-accent-indigo/50 hover:shadow-xl hover:shadow-accent-indigo/5"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-indigo">{t.tag}</div>
              <h3 className="mt-3 font-display text-2xl font-black tracking-tight">{t.title}</h3>
              <div className="mt-1 text-sm font-semibold text-muted-foreground">{t.subtitle}</div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {t.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border bg-muted/60 px-3 py-1 text-[11px] font-medium text-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <a
                href={t.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-indigo hover:underline"
              >
                {t.cta} <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="case-studies" className="scroll-mt-16 border-t border-border bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Product Thinking</SectionLabel>
        <h2 className="font-display text-5xl font-black tracking-tight md:text-6xl">Case studies</h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Exploratory product exercises — how I'd frame a problem, who I'd build for, and what I'd ship first.
        </p>

        <div className="mt-12 space-y-4">
          {CASE_STUDIES.map((c, i) => {
            const isOpen = open === i;
            return (
              <article key={c.title} className="overflow-hidden rounded-2xl border border-border bg-background">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 p-7 text-left"
                >
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-indigo">
                      {c.tag}
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-black tracking-tight">{c.title}</h3>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
                  </div>
                  <span
                    className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-xl font-light text-foreground transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="grid gap-8 border-t border-border bg-muted/40 p-7 md:grid-cols-2">
                    {c.sections.map((s) => (
                      <div key={s.h}>
                        <h4 className="font-display text-base font-black uppercase tracking-wider text-foreground">
                          {s.h}
                        </h4>
                        {"p" in s && s.p && (
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
                        )}
                        {"list" in s && s.list && (
                          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                            {s.list.map((li) => (
                              <li key={li} className="flex gap-2">
                                <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent-indigo" />
                                <span>{li}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionLabel>
          <span className="mx-auto">Let's connect</span>
        </SectionLabel>
        <h2 className="font-display text-5xl font-black tracking-tight md:text-6xl">Get in touch</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Always open to conversations about AI products, LLM evaluation, and interesting problems. Whether
          you're a recruiter, a builder, or someone who stumbled in — reach out.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:rajbhartendu7@gmail.com"
            className="inline-flex h-12 items-center justify-center rounded-md bg-accent-indigo px-6 text-sm font-semibold text-white shadow-lg shadow-accent-indigo/30 transition-all hover:translate-y-[-1px]"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/raj-bhardwaj-08b485200/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            LinkedIn
          </a>
          <a
            href={resumePdf.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground md:flex-row">
        <div className="font-display text-base font-black text-foreground">
          Raj Bhardwaj<span className="text-accent-indigo">.</span>
        </div>
        <div>© {new Date().getFullYear()} Raj Bhardwaj — Built independently. Hosted on the open web.</div>
      </div>
    </footer>
  );
}
