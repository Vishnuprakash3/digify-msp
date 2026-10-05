import Link from "next/link";

const cases = [
  {
    number: "01",
    industry: "REAL ESTATE",
    title: "From Attention to Qualified Enquiries",
    description:
      "A full-funnel approach connecting audience targeting, campaign messaging and conversion.",
  },
  {
    number: "02",
    industry: "HEALTHCARE",
    title: "Building Trust Before Conversion",
    description:
      "A customer journey designed around awareness, education, trust and enquiry.",
  },
  {
    number: "03",
    industry: "EDUCATION",
    title: "Turning Interest Into Admissions",
    description:
      "A structured journey connecting digital awareness with counselling and admissions.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="w-full min-w-0 overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-20 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[var(--green)]/8 blur-[130px]"
        />

        <div className="relative mx-auto w-full max-w-[1400px] px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-36">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2 text-[10px] font-bold tracking-[0.22em] text-[var(--green)] sm:text-xs">
              CASE STUDIES
            </div>

            <h1 className="break-words text-4xl font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
              See the thinking
              <span className="block text-[var(--green)]">
                behind the work.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8 lg:text-xl">
              Explore how strategy, audience understanding, advertising and
              conversion thinking come together.
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="mx-auto mt-16 max-w-6xl sm:mt-20">
            <div className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--bg-card)] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:p-8">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[var(--green)]/5 blur-3xl"
              />

              <div className="relative grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-[var(--text-muted)]">
                    01
                  </div>

                  <div className="mt-5 text-xl font-black">
                    Understand
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                    Audience, market, offer and business challenge.
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--green)]/30 bg-[var(--green)]/5 p-6">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-[var(--green)]">
                    02
                  </div>

                  <div className="mt-5 text-xl font-black">
                    Build
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                    Strategy, campaigns and customer journeys.
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-[var(--text-muted)]">
                    03
                  </div>

                  <div className="mt-5 text-xl font-black">
                    Convert
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                    Turn attention into meaningful business outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)]">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="text-[10px] font-bold tracking-[0.22em] text-[var(--green)] sm:text-xs">
              SELECTED WORK
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              Strategy that connects
              <span className="block text-[var(--green)]">
                the entire journey.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
              These examples demonstrate the type of thinking behind our
              approach. Verified performance figures will be added when
              confirmed data is available.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {cases.map((item) => (
              <article
                key={item.number}
                className="group relative min-w-0 overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--bg-card)] p-7 transition duration-300 hover:-translate-y-2 hover:border-[var(--green)]/40 hover:shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:p-8"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.15em] text-[var(--green)]">
                    {item.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-lg text-[var(--text-muted)] transition duration-300 group-hover:border-[var(--green)] group-hover:text-[var(--green)]">
                    ↗
                  </span>
                </div>

                {/* Industry */}
                <div className="mt-10 text-[10px] font-extrabold tracking-[0.2em] text-[var(--green)]">
                  {item.industry}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.025em]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                  {item.description}
                </p>

                {/* Bottom */}
                <div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-5">
                  <span className="text-sm font-bold text-[var(--green)]">
                    View Case Study
                  </span>

                  <span className="text-sm text-[var(--text-muted)] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Data note */}
          <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] px-5 py-4 sm:px-6">
            <p className="text-xs leading-6 text-[var(--text-muted)]">
              <span className="font-bold text-[var(--text-secondary)]">
                Note:
              </span>{" "}
              Performance figures should be added only when verified
              case-study data is available.
            </p>
          </div>
        </div>
      </section>

      {/* THINKING SECTION */}
      <section className="relative overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <div className="text-[10px] font-bold tracking-[0.22em] text-[var(--green)] sm:text-xs">
                THE THINKING
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Marketing is not
                <span className="block text-[var(--green)]">
                  one isolated activity.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
                Every campaign exists inside a larger customer journey. The
                strongest results come when the audience, message, offer,
                landing experience and follow-up work together.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Audience",
                "Positioning",
                "Advertisement",
                "Landing Page",
                "Lead",
                "Follow-up",
                "Conversion",
                "Retention",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] px-5 py-4"
                >
                  <span className="text-xs font-bold text-[var(--green)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-[var(--border)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--green)]/7 blur-[140px]"
        />

        <div className="relative mx-auto w-full max-w-[1000px] px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="text-[10px] font-bold tracking-[0.22em] text-[var(--green)] sm:text-xs">
            BUILD YOUR NEXT STORY
          </div>

          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl lg:text-6xl">
            Want to build your
            <span className="block text-[var(--green)]">
              next case study?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
            Let&apos;s talk about your business and the challenge you&apos;re
            trying to solve.
          </p>

          <div className="mt-9">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--green)] px-8 py-4 text-sm font-extrabold text-[#03101f] transition hover:-translate-y-1 hover:bg-[var(--green-light)] hover:shadow-[0_15px_40px_rgba(140,255,0,0.18)] sm:w-auto"
            >
              Start a Conversation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}