import Link from "next/link";

const consultingAreas = [
  {
    number: "01",
    title: "Positioning",
    description:
      "Understand how the business is positioned and where the offer can become clearer and stronger.",
  },
  {
    number: "02",
    title: "Customer Journey",
    description:
      "Map the journey from first interaction to enquiry, purchase and long-term customer value.",
  },
  {
    number: "03",
    title: "Marketing Channels",
    description:
      "Evaluate which channels are creating meaningful opportunities and where resources are being wasted.",
  },
  {
    number: "04",
    title: "Conversion Process",
    description:
      "Identify friction between attention, enquiry and conversion so the system can perform better.",
  },
  {
    number: "05",
    title: "Automation Opportunities",
    description:
      "Find repetitive processes where AI and automation can improve speed, consistency and efficiency.",
  },
  {
    number: "06",
    title: "Retention Systems",
    description:
      "Explore ways to improve follow-up, repeat business and long-term customer relationships.",
  },
];

const consultingSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start with the business, its current situation and the challenge behind the challenge.",
  },
  {
    number: "02",
    title: "Diagnose",
    description:
      "Identify the gaps, bottlenecks and opportunities across the growth system.",
  },
  {
    number: "03",
    title: "Prioritise",
    description:
      "Separate what needs attention now from what can wait until later.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Turn the strategic direction into practical actions, systems and measurable improvements.",
  },
];

export default function ConsultingPage() {
  return (
    <main className="w-full min-w-0 overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--green)]/8 blur-[130px]"
        />

        <div className="relative mx-auto w-full max-w-[1400px] px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-36">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2 text-[10px] font-bold tracking-[0.22em] text-[var(--green)] sm:text-xs">
              DIGIFY MSP CONSULTING
            </div>

            <h1 className="break-words text-4xl font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
              Sometimes you don&apos;t need
              <span className="block text-[var(--green)]">
                another campaign.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8 lg:text-xl">
              You need someone to step back, understand the entire business
              and identify where growth systems can be improved.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--green)] px-7 py-4 text-sm font-extrabold text-[#03101f] transition hover:-translate-y-1 hover:bg-[var(--green-light)] hover:shadow-[0_15px_40px_rgba(140,255,0,0.18)] sm:w-auto"
              >
                Book a Consulting Conversation →
              </Link>

              <Link
                href="/agency"
                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-7 py-4 text-sm font-bold text-[var(--text)] transition hover:-translate-y-1 hover:border-[var(--green)] hover:text-[var(--green)] sm:w-auto"
              >
                Explore Our Agency
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="mx-auto mt-16 max-w-6xl sm:mt-20">
            <div className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--bg-card)] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:p-6 lg:p-8">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[var(--green)]/5 blur-3xl"
              />

              <div className="relative grid gap-4 md:grid-cols-3">
                {/* Business */}
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-[var(--text-muted)]">
                    BUSINESS
                  </div>

                  <div className="mt-5 text-2xl font-black">
                    Where are we?
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                    Understand the current business, offer, audience and
                    customer journey.
                  </p>
                </div>

                {/* Diagnosis */}
                <div className="relative rounded-2xl border border-[var(--green)]/30 bg-[var(--green)]/5 p-6">
                  <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-full bg-[var(--green)]" />

                  <div className="text-[10px] font-bold tracking-[0.2em] text-[var(--green)]">
                    DIAGNOSIS
                  </div>

                  <div className="mt-5 text-2xl font-black">
                    What is blocking growth?
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                    Find the gaps, bottlenecks and opportunities inside the
                    growth system.
                  </p>
                </div>

                {/* Direction */}
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-[var(--text-muted)]">
                    DIRECTION
                  </div>

                  <div className="mt-5 text-2xl font-black">
                    Where should we go?
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                    Create a practical direction for the next stage of
                    business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE EXAMINE */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)]">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="text-[10px] font-bold tracking-[0.22em] text-[var(--green)] sm:text-xs">
              WHAT WE EXAMINE
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              Look beyond the campaign.
              <span className="block text-[var(--green)]">
                Look at the system.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
              Marketing problems are often connected to larger business
              systems. We look at the complete picture before recommending
              what should change.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {consultingAreas.map((item) => (
              <div
                key={item.title}
                className="group min-w-0 rounded-[24px] border border-[var(--border)] bg-[var(--bg-card)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--green)]/40 hover:bg-[var(--green)]/[0.03] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.15em] text-[var(--green)]">
                    {item.number}
                  </span>

                  <span className="text-lg text-[var(--text-muted)] transition group-hover:translate-x-1 group-hover:text-[var(--green)]">
                    ↗
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-extrabold sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SHIFT */}
      <section className="relative overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Left */}
            <div>
              <div className="text-[10px] font-bold tracking-[0.22em] text-[var(--green)] sm:text-xs">
                THE SHIFT
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                From
                <span className="block text-[var(--green)]">
                  “What should we post?”
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
                Good consulting changes the question. Instead of focusing only
                on individual marketing activities, we look at how the entire
                business should grow.
              </p>
            </div>

            {/* Right */}
            <div className="relative min-w-0">
              <div className="absolute -inset-4 rounded-[32px] bg-[var(--green)]/5 blur-2xl" />

              <div className="relative rounded-[28px] border border-[var(--green)]/25 bg-[var(--bg-card)] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.2)] sm:p-10">
                <div className="text-xs font-bold tracking-[0.2em] text-[var(--green)]">
                  THE BETTER QUESTION
                </div>

                <div className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  “How should this business grow?”
                </div>

                <div className="mt-8 h-px w-full bg-[var(--border)]" />

                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  <div>
                    <div className="text-xs font-bold text-[var(--text-muted)]">
                      STRATEGY
                    </div>
                    <div className="mt-2 text-sm font-bold">
                      Clear direction
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-[var(--text-muted)]">
                      SYSTEM
                    </div>
                    <div className="mt-2 text-sm font-bold">
                      Connected growth
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-[var(--text-muted)]">
                      EXECUTION
                    </div>
                    <div className="mt-2 text-sm font-bold">
                      Practical action
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW CONSULTING WORKS */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)]">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="text-[10px] font-bold tracking-[0.22em] text-[var(--green)] sm:text-xs">
                OUR APPROACH
              </div>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl">
                Strategy before
                <span className="block text-[var(--green)]">
                  solutions.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-[var(--text-secondary)]">
                We start with understanding the problem. The solution comes
                after the diagnosis.
              </p>
            </div>

            <div className="grid gap-4">
              {consultingSteps.map((step) => (
                <div
                  key={step.number}
                  className="group grid gap-5 rounded-[24px] border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:grid-cols-[70px_1fr] sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] text-xs font-bold text-[var(--green)] transition group-hover:border-[var(--green)] group-hover:bg-[var(--green)] group-hover:text-[#03101f]">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-muted)] sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTING CTA */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--green)]/7 blur-[140px]"
        />

        <div className="relative mx-auto w-full max-w-[1000px] px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="text-[10px] font-bold tracking-[0.22em] text-[var(--green)] sm:text-xs">
            STRATEGIC CONVERSATION
          </div>

          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl lg:text-6xl">
            Let&apos;s understand the
            <span className="block text-[var(--green)]">
              bigger picture.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
            Bring your business challenge. We&apos;ll start with the problem
            before discussing the solution.
          </p>

          <div className="mt-9">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--green)] px-8 py-4 text-sm font-extrabold text-[#03101f] transition hover:-translate-y-1 hover:bg-[var(--green-light)] hover:shadow-[0_15px_40px_rgba(140,255,0,0.18)] sm:w-auto"
            >
              Book a Consultation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}