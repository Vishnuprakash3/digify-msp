import Image from "next/image";
import Link from "next/link";

const curriculum = [
  {
    number: "01",
    title: "Meta Ads",
    description:
      "Campaign structure, audience strategy, creative and lead generation.",
  },
  {
    number: "02",
    title: "Google Ads",
    description:
      "Search advertising and intent-based campaign planning.",
  },
  {
    number: "03",
    title: "Full Funnel",
    description:
      "TOFU, MOFU and BOFU campaign thinking.",
  },
  {
    number: "04",
    title: "Brand Strategy",
    description:
      "Positioning, messaging and brand architecture.",
  },
  {
    number: "05",
    title: "AI Marketing",
    description:
      "Practical use of AI within modern marketing workflows.",
  },
  {
    number: "06",
    title: "Case Studies",
    description:
      "Understand how marketing decisions work in practical scenarios.",
  },
];

const tracks = [
  {
    number: "01",
    title: "Group Batch",
    description:
      "Cohort-based practical learning for students, freshers and career switchers.",
    features: [
      "Live Sessions",
      "Assignments",
      "Case Studies",
      "Doubt Clearing",
    ],
  },
  {
    number: "02",
    title: "Elite 1-on-1",
    description:
      "Personalized mentorship for professionals, freelancers and agency owners.",
    features: [
      "Personal Guidance",
      "Practical Execution",
      "Strategy Sessions",
      "Campaign Thinking",
    ],
  },
];

export default function AcademyPage() {
  return (
    <main className="overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[720px] bg-[var(--bg)] pt-32 pb-20">

        {/* Background glow */}
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#8cff00]/10 blur-[140px]" />

        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">

          {/* LEFT */}
          <div className="relative z-10">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#8cff00]/30 bg-[#8cff00]/5 px-4 py-2 text-xs font-bold tracking-[0.2em] text-[#8cff00]">
              <span className="h-2 w-2 rounded-full bg-[#8cff00]" />
              DIGIFY MSP ACADEMY
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
              Don't just learn
              <span className="block text-[#8cff00]">
                digital marketing.
              </span>
              <span className="mt-2 block text-white">
                Learn how to execute it.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Practical digital marketing education built from
              agency experience, real campaigns and practical
              frameworks.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#8cff00] px-7 py-4 text-sm font-extrabold text-[#03101f] shadow-[0_15px_50px_rgba(140,255,0,0.2)] transition hover:-translate-y-1 hover:bg-[#aaff40]"
              >
                Enquire About Batches →
              </Link>

              <a
                href="#curriculum"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-bold text-white transition hover:border-[#8cff00]/40 hover:bg-white/[0.06]"
              >
                Explore Curriculum
              </a>

            </div>

            {/* Small trust points */}
            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/10 py-5">

              <div>
                <div className="text-2xl font-black text-white">
                  01
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Practical
                </p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <div className="text-2xl font-black text-white">
                  02
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Real Projects
                </p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <div className="text-2xl font-black text-white">
                  03
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Agency Experience
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="absolute -inset-5 rounded-[40px] bg-[#8cff00]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#071329] shadow-2xl">

              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />

              <Image
                src="/academy-hero.png"
                alt="Digify MSP Academy"
                width={900}
                height={900}
                className="h-[580px] w-full object-cover"
                priority
              />

              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#020817]/85 p-5 backdrop-blur-xl">

                <div className="flex items-center justify-between gap-5">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8cff00]">
                      Learn → Execute
                    </p>

                    <h3 className="mt-2 text-lg font-extrabold text-white">
                      Built for real-world marketing.
                    </h3>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8cff00] text-xl font-black text-[#03101f] sm:flex">
                    ↗
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO / STRIP
      ===================================================== */}
      <section className="border-y border-white/10 bg-[#061329]">

        <div className="mx-auto grid max-w-[1400px] grid-cols-2 px-6 lg:grid-cols-4 lg:px-10">

          {[
            ["01", "Agency Experience"],
            ["02", "Live Projects"],
            ["03", "Practical Frameworks"],
            ["04", "AI-Powered Learning"],
          ].map(([number, title]) => (

            <div
              key={number}
              className="border-r border-white/10 px-5 py-6 first:pl-0 last:border-r-0"
            >

              <span className="text-xs font-bold text-[#8cff00]">
                {number}
              </span>

              <p className="mt-2 text-sm font-bold text-white">
                {title}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          CURRICULUM
      ===================================================== */}
      <section
        id="curriculum"
        className="relative bg-[var(--bg)] py-28 lg:py-36"
      >

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Heading */}
            <div className="lg:sticky lg:top-32 lg:h-fit">

              <div className="text-xs font-bold tracking-[0.2em] text-[#8cff00]">
                CURRICULUM
              </div>

              <h2 className="mt-5 text-4xl font-black leading-[1] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Learn the skills behind
                <span className="block text-slate-500">
                  real campaigns.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-base leading-7 text-slate-400">
                The curriculum focuses on the skills marketers
                actually use when working with real businesses,
                campaigns and growth systems.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center text-sm font-bold text-white transition hover:text-[#8cff00]"
              >
                Talk to the Academy →
              </Link>

            </div>


            {/* Cards */}
            <div className="grid gap-4 sm:grid-cols-2">

              {curriculum.map((item) => (

                <div
                  key={item.number}
                  className="group relative min-h-[250px] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#8cff00]/40 hover:bg-white/[0.045]"
                >

                  <div className="flex items-start justify-between">

                    <span className="text-xs font-bold text-[#8cff00]">
                      {item.number}
                    </span>

                    <span className="text-lg text-slate-600 transition group-hover:text-[#8cff00]">
                      ↗
                    </span>

                  </div>

                  <div className="mt-16">

                    <h3 className="text-2xl font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>

                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#8cff00] transition-all duration-500 group-hover:w-full" />

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LEARNING TRACKS
      ===================================================== */}
      <section className="bg-[#061329] py-28 lg:py-36">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="mb-14 max-w-3xl">

            <div className="text-xs font-bold tracking-[0.2em] text-[#8cff00]">
              LEARNING TRACKS
            </div>

            <h2 className="mt-5 text-4xl font-black leading-[1] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Choose how you want
              <span className="text-slate-500">
                {" "}to learn.
              </span>
            </h2>

          </div>


          <div className="grid gap-5 lg:grid-cols-2">

            {tracks.map((track) => (

              <div
                key={track.number}
                className="group rounded-[28px] border border-white/10 bg-[#020817]/60 p-7 transition hover:border-[#8cff00]/40 lg:p-10"
              >

                <div className="flex items-start justify-between">

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#8cff00] text-sm font-black text-[#03101f]">
                    {track.number}
                  </span>

                  <span className="text-2xl text-slate-600 transition group-hover:text-[#8cff00]">
                    ↗
                  </span>

                </div>

                <h3 className="mt-10 text-3xl font-black text-white">
                  {track.title}
                </h3>

                <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
                  {track.description}
                </p>


                <div className="mt-8 grid gap-3 sm:grid-cols-2">

                  {track.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3"
                    >

                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8cff00] text-xs font-black text-[#03101f]">
                        ✓
                      </span>

                      <span className="text-sm font-semibold text-slate-200">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section className="bg-[var(--bg)] py-28 lg:py-36">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <div className="text-xs font-bold tracking-[0.2em] text-[#8cff00]">
                THE DIGIFY APPROACH
              </div>

              <h2 className="mt-5 text-4xl font-black leading-[1] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Learn.
                <br />
                Execute.
                <br />
                <span className="text-slate-500">
                  Improve.
                </span>
              </h2>

            </div>


            <div className="space-y-3">

              {[
                [
                  "01",
                  "Learn the concept",
                  "Understand the strategy behind the marketing activity.",
                ],
                [
                  "02",
                  "Execute the task",
                  "Apply the concept through practical assignments and projects.",
                ],
                [
                  "03",
                  "Analyse the result",
                  "Understand what worked, what failed and why.",
                ],
                [
                  "04",
                  "Build the skill",
                  "Turn repeated execution into a professional marketing skill.",
                ],
              ].map(([number, title, description]) => (

                <div
                  key={number}
                  className="grid grid-cols-[50px_1fr] gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-[#8cff00]/30"
                >

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8cff00] text-xs font-black text-[#03101f]">
                    {number}
                  </span>

                  <div>

                    <h3 className="font-extrabold text-white">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#8cff00] py-24 lg:py-32">

        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/30 blur-3xl" />

        <div className="relative mx-auto max-w-[1100px] px-6 text-center">

          <div className="text-xs font-black tracking-[0.25em] text-[#173000]">
            START LEARNING
          </div>

          <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#03101f] sm:text-5xl lg:text-7xl">
            Turn knowledge into
            <span className="block">
              execution.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#173000] sm:text-lg">
            Enquire about the upcoming Digify MSP Academy
            learning programs and start building practical
            marketing skills.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-[#03101f] px-8 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-[#0b1d32]"
          >
            Enquire Now →
          </Link>

        </div>

      </section>

    </main>
  );
}