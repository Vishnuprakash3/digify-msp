import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Meta Advertising",
    description:
      "Campaign strategy, audience targeting, creative testing and lead generation.",
  },
  {
    number: "02",
    title: "Google Advertising",
    description:
      "Intent-based search campaigns designed to capture active demand.",
  },
  {
    number: "03",
    title: "Lead Generation",
    description:
      "Build campaigns and journeys that turn attention into qualified enquiries.",
  },
  {
    number: "04",
    title: "Conversion Systems",
    description:
      "Landing pages, messaging and customer journeys designed around conversion.",
  },
  {
    number: "05",
    title: "AI Workflows",
    description:
      "Use AI to streamline repetitive marketing and customer-response processes.",
  },
  {
    number: "06",
    title: "Growth Strategy",
    description:
      "Connect positioning, traffic, conversion and retention into a larger system.",
  },
];

const journey = [
  {
    number: "01",
    title: "Audience",
    description: "Identify who matters most.",
  },
  {
    number: "02",
    title: "Positioning",
    description: "Make the offer easier to understand.",
  },
  {
    number: "03",
    title: "Advertisement",
    description: "Create attention and demand.",
  },
  {
    number: "04",
    title: "Landing Page",
    description: "Turn interest into action.",
  },
  {
    number: "05",
    title: "Lead",
    description: "Capture qualified enquiries.",
  },
  {
    number: "06",
    title: "Follow-up",
    description: "Respond and nurture quickly.",
  },
  {
    number: "07",
    title: "Conversion",
    description: "Turn prospects into customers.",
  },
  {
    number: "08",
    title: "Retention",
    description: "Build long-term customer value.",
  },
];

const results = [
  ["01", "Better targeting", "Reach audiences with stronger buying intent."],
  ["02", "Better conversion", "Connect campaigns with pages and offers."],
  ["03", "Better follow-up", "Reduce delays between enquiry and response."],
  ["04", "Better growth", "Build a system instead of isolated campaigns."],
];

export default function AgencyPage() {
  return (
    <main className="w-full min-w-0 overflow-x-clip bg-[var(--bg)] text-[var(--text)]">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative w-full overflow-hidden pt-32 sm:pt-36 lg:pt-44">
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--green)]/5 blur-[140px]" />

        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

            {/* LEFT */}
            <div className="min-w-0">

              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--green)]">
                <span className="h-2 w-2 rounded-full bg-[var(--green)] shadow-[0_0_15px_rgba(140,255,0,.7)]" />
                Digify MSP Agency
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
                Marketing that moves
                <span className="block text-[var(--green)]">
                  business forward.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
                We build performance marketing systems designed around your
                audience, offer, customer journey and business objectives.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--green)] px-7 py-4 text-sm font-extrabold text-[#03101f] transition duration-300 hover:-translate-y-1 hover:bg-[var(--green-light)] hover:shadow-[0_15px_40px_rgba(140,255,0,.2)]"
                >
                  Talk About Your Business
                  <span className="ml-2">→</span>
                </Link>

                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-7 py-4 text-sm font-bold transition duration-300 hover:border-[var(--green)] hover:text-[var(--green)]"
                >
                  View Case Studies
                </Link>

              </div>

              {/* Small metrics */}
              <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-[var(--border)] pt-7">

                <div>
                  <p className="text-2xl font-black sm:text-3xl">01</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
                    Growth system
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black sm:text-3xl">AI</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
                    Powered workflows
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black sm:text-3xl">ROI</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
                    Business focused
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative min-w-0">

              <div className="absolute -inset-5 rounded-[40px] bg-[var(--green)]/5 blur-3xl" />

              <div className="relative rounded-[30px] border border-[var(--border)] bg-[var(--bg-card)] p-5 shadow-[var(--shadow)] sm:p-7">

                <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--green)]">
                      Performance System
                    </p>

                    <p className="mt-1 text-xs text-[var(--text-muted)]">
                      From attention to conversion
                    </p>
                  </div>

                  <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] font-bold text-[var(--text-muted)]">
                    ACTIVE
                  </span>

                </div>

                {/* Visual system */}
                <div className="mt-6 space-y-3">

                  {[
                    ["01", "Audience", "Who should see you?"],
                    ["02", "Traffic", "How do we capture demand?"],
                    ["03", "Conversion", "How does interest become action?"],
                    ["04", "Follow-up", "How quickly do we respond?"],
                  ].map(([number, title, description], index) => (

                    <div
                      key={number}
                      className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 transition duration-300 hover:border-[rgba(140,255,0,.35)] hover:bg-[rgba(140,255,0,.025)]"
                    >

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--green)] text-xs font-black text-[#03101f]">
                        {number}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-black">
                          {title}
                        </h3>

                        <p className="mt-1 text-xs text-[var(--text-muted)]">
                          {description}
                        </p>
                      </div>

                      <span className="hidden text-[var(--green)] sm:block">
                        →
                      </span>

                    </div>

                  ))}

                </div>

                {/* Progress */}
                <div className="mt-5 rounded-2xl border border-[rgba(140,255,0,.15)] bg-[rgba(140,255,0,.035)] p-4">

                  <div className="flex justify-between gap-4 text-xs">

                    <span className="font-semibold text-[var(--text-secondary)]">
                      Growth pipeline
                    </span>

                    <span className="font-bold text-[var(--green)]">
                      Optimising
                    </span>

                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[82%] rounded-full bg-[var(--green)]" />
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          INTRO STRIP
      ========================================================== */}
      <section className="mt-20 w-full border-y border-[var(--border)] bg-[var(--bg-secondary)] sm:mt-24">

        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-2 sm:grid-cols-4">

          {[
            ["01", "Audience"],
            ["02", "Acquisition"],
            ["03", "Conversion"],
            ["04", "Retention"],
          ].map(([number, title]) => (

            <div
              key={number}
              className="border-b border-[var(--border)] px-5 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-7 sm:last:border-r-0"
            >

              <p className="text-[10px] font-bold text-[var(--green)]">
                {number}
              </p>

              <p className="mt-1 text-sm font-bold text-[var(--text-secondary)]">
                {title}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section className="w-full py-20 sm:py-24 lg:py-32">

        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--green)]">
              What we do
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              From attention
              <span className="block text-[var(--text-muted)]">
                to conversion.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
              Every service is designed to work as part of a larger growth
              system rather than operating as an isolated marketing activity.
            </p>

          </div>


          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (

              <div
                key={service.number}
                className="group relative overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--bg-card)] p-6 transition duration-300 hover:-translate-y-2 hover:border-[rgba(140,255,0,.35)]"
              >

                <div className="flex items-center justify-between">

                  <span className="text-xs font-bold text-[var(--green)]">
                    {service.number}
                  </span>

                  <span className="text-lg text-[var(--text-muted)] transition duration-300 group-hover:translate-x-1 group-hover:text-[var(--green)]">
                    ↗
                  </span>

                </div>

                <h3 className="mt-12 text-xl font-black">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[var(--text-muted)]">
                  {service.description}
                </p>

                <div className="mt-7 h-px w-10 bg-[var(--green)] transition-all duration-300 group-hover:w-20" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          JOURNEY
      ========================================================== */}
      <section className="w-full bg-[var(--bg-secondary)] py-20 sm:py-24 lg:py-32">

        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">

          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            {/* LEFT */}
            <div className="lg:sticky lg:top-32">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--green)]">
                The journey
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Traffic is not the
                <span className="block text-[var(--green)]">
                  finish line.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-[var(--text-secondary)]">
                Getting people to your website is only one part of the
                equation. The real opportunity is what happens after someone
                notices your business.
              </p>

              <Link
                href="/consulting"
                className="mt-8 inline-flex items-center rounded-full border border-[rgba(140,255,0,.3)] px-5 py-3 text-sm font-bold text-[var(--green)] transition hover:bg-[rgba(140,255,0,.06)]"
              >
                Explore growth strategy →
              </Link>

            </div>


            {/* RIGHT */}
            <div className="relative">

              <div className="absolute bottom-6 left-[22px] top-6 hidden w-px bg-[var(--border)] sm:block" />

              <div className="space-y-3">

                {journey.map((item) => (

                  <div
                    key={item.number}
                    className="relative flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5 transition duration-300 hover:border-[rgba(140,255,0,.3)] sm:gap-6"
                  >

                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--green)] text-xs font-black text-[#03101f]">
                      {item.number}
                    </div>

                    <div className="min-w-0">

                      <h3 className="text-base font-black">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">
                        {item.description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          RESULTS / VALUE
      ========================================================== */}
      <section className="w-full py-20 sm:py-24 lg:py-32">

        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--green)]">
                Why the system matters
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Better marketing
                <span className="block text-[var(--text-muted)]">
                  comes from better connections.
                </span>
              </h2>

            </div>

            <p className="max-w-2xl text-base leading-7 text-[var(--text-secondary)] lg:ml-auto">
              Ads, landing pages, follow-up and strategy become more powerful
              when they are connected. That is where we focus our agency
              execution.
            </p>

          </div>


          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {results.map(([number, title, description]) => (

              <div
                key={number}
                className="rounded-[24px] border border-[var(--border)] bg-[var(--bg-card)] p-6"
              >

                <span className="text-xs font-bold text-[var(--green)]">
                  {number}
                </span>

                <h3 className="mt-7 text-lg font-black">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="w-full px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">

        <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[32px] border border-[rgba(140,255,0,.18)] bg-[rgba(140,255,0,.04)] px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-20">

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--green)]/10 blur-[110px]" />

          <div className="relative mx-auto max-w-4xl">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--green)]">
              Let's build
            </p>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl lg:text-6xl">
              Ready to turn marketing
              <span className="block text-[var(--green)]">
                into a system?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
              Tell us about your business, your current marketing and where
              you want to go next.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center justify-center rounded-full bg-[var(--green)] px-8 py-4 text-sm font-extrabold text-[#03101f] transition duration-300 hover:-translate-y-1 hover:bg-[var(--green-light)] hover:shadow-[0_15px_40px_rgba(140,255,0,.2)]"
            >
              Start a Conversation
              <span className="ml-2">→</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}