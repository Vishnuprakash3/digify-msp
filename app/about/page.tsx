import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Agency",
    subtitle: "Performance Marketing",
    description:
      "We help businesses acquire attention, generate qualified leads and turn marketing activity into measurable business outcomes.",
    icon: "↗",
  },
  {
    number: "02",
    title: "Academy",
    subtitle: "Practical AI Marketing",
    description:
      "Learn modern digital marketing through practical training, real projects, AI tools and hands-on execution.",
    icon: "✦",
  },
  {
    number: "03",
    title: "Consulting",
    subtitle: "Growth Systems",
    description:
      "We connect acquisition, conversion, automation and retention into systems designed around sustainable growth.",
    icon: "◉",
  },
];

const stats = [
  {
    number: "10+",
    label: "Years",
    description: "Agency experience",
  },
  {
    number: "1,500+",
    label: "Clients",
    description: "Businesses served",
  },
  {
    number: "3",
    label: "Countries",
    description: "Across our journey",
  },
  {
    number: "3",
    label: "Pillars",
    description: "One connected ecosystem",
  },
];

const values = [
  {
    number: "01",
    title: "Execution over theory",
    description:
      "Ideas become valuable when they are implemented. We focus on practical strategies that can actually be executed.",
  },
  {
    number: "02",
    title: "Systems over isolated activities",
    description:
      "Ads, content, websites and follow-ups should work together instead of operating as disconnected activities.",
  },
  {
    number: "03",
    title: "AI with business purpose",
    description:
      "We use AI to improve speed, automation and decision-making while keeping business outcomes at the centre.",
  },
  {
    number: "04",
    title: "Growth that can be measured",
    description:
      "Marketing should ultimately connect to enquiries, customers, revenue and long-term business growth.",
  },
];

const meetupImages = [
  "https://media.licdn.com/dms/image/v2/D5622AQGVMFpuy0boow/feedshare-shrink_1280/B56Z3DoVMqIkAM-/0/1777103628050?e=1793232000&v=beta&t=cBkhUmyGC6rfmzlTPuB65t0NaVRz0G-4kgcC4BIaf14",
  "https://media.licdn.com/dms/image/v2/D5622AQGblIazNgvF-w/feedshare-shrink_800/B56Zma2IcyJ0Ag-/0/1759239514602?e=1793232000&v=beta&t=4S5z_v-q6ZF923B3CS0OmrEnIqm0BeRY3YpOqD6SObQ",
  "https://media.licdn.com/dms/image/v2/D5622AQF2GDFX2NmTkw/feedshare-shrink_800/feedshare-shrink_800/0/1728735303300?e=1793232000&v=beta&t=maJF9v3S4cjnFNA-JNbq3401puPNslv6pxHiSRyS38E",
  "https://media.licdn.com/dms/image/v2/D5622AQE1VV_LZ03avA/feedshare-shrink_800/B56aCAxxivIIAc-/0/1788866927310?e=1793232000&v=beta&t=owwOmqiOHUGr8mZ4fXWBtIr0hjHbAjFyWb0JaikwYtU",
  "https://instagram.fblr8-1.fna.fbcdn.net/v/t51.82787-15/601444649_17856785550577629_8101643958565806026_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=108&_nc_map=urlgen_bucketless&ig_cache_key=Mzc4OTc0MzkxNTI0ODM4MDMxMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=VTWUVrQk_7EQ7kNvwFsPLhY&_nc_oc=Adr-A3WJslmvrO1znNDVW4TANNu6jvFp1AHvV8MHVlN_WWXnt9mD1StwRKZDPDZ4nyI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fblr8-1.fna&_nc_gid=d2FN5iifylZt5S_frvF9iA&_nc_ss=7a22e&oh=00_AQOGkFwwp9KBrs1-xgnRm_Z2JbVcW7AGrF8HJyiHuHopmQ&oe=6ACC472E",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[var(--bg)] text-[var(--text)]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate min-h-[720px] border-b border-white/10 pt-32">

        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-[#8cff00]/10 blur-[140px]" />

        <div className="pointer-events-none absolute right-[-180px] top-[-100px] -z-10 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[160px]" />

        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">

          {/* LEFT */}
          <div className="max-w-3xl">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#8cff00]/20 bg-[#8cff00]/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#8cff00] shadow-[0_0_15px_#8cff00]" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8cff00]">
                About Digify MSP
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-[88px]">
              Built from
              <br />

              <span className="text-[#8cff00]">
                real marketing
              </span>

              <br />

              experience.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Digify MSP brings together agency execution,
              practical marketing education and strategic
              consulting under one connected growth ecosystem.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#8cff00] px-7 py-4 text-sm font-black text-[#03101f] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(140,255,0,0.25)]"
              >
                Work With Us →
              </Link>

              <Link
                href="/agency"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:border-[#8cff00]/50 hover:bg-white/[0.06]"
              >
                Explore Our Work
              </Link>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="absolute -inset-6 rounded-[40px] bg-[#8cff00]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#071329] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">

              <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-[#020817]/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#8cff00] backdrop-blur-md">
                Agency • Academy • Consulting
              </div>

              <Image
                src="/hero-img.png"
                alt="Digify MSP growth strategy"
                width={900}
                height={1000}
                priority
                className="h-[520px] w-full object-cover object-center sm:h-[600px]"
              />

              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-[#020817]/85 p-5 backdrop-blur-xl">

                <div className="flex items-center justify-between gap-4">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8cff00]">
                      The Digify approach
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Strategy → Execution → Systems → Growth
                    </p>
                  </div>

                  <span className="hidden text-3xl font-black text-[#8cff00] sm:block">
                    360°
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO / STORY
      ===================================================== */}
      <section className="relative bg-[#061329] py-24 sm:py-32">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8cff00]">
                Our Story
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                Agency.
                <br />
                Academy.
                <br />
                Consulting.
              </h2>
            </div>


            <div className="max-w-3xl">

              <p className="text-xl leading-9 text-slate-200 sm:text-2xl">
                Digify MSP is structured around three connected
                pillars. The agency works on business growth,
                the academy teaches practical marketing and
                consulting focuses on strategic systems.
              </p>

              <p className="mt-7 text-lg leading-8 text-slate-400">
                The goal is simple: connect knowledge with
                execution instead of treating marketing as a
                collection of isolated activities.
              </p>

              <div className="mt-10 h-px w-full bg-white/10" />

              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5">

                <div>
                  <p className="text-2xl font-black text-white">
                    Attention
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Get noticed
                  </p>
                </div>

                <div className="text-2xl text-[#8cff00]">
                  →
                </div>

                <div>
                  <p className="text-2xl font-black text-white">
                    Conversion
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Create action
                  </p>
                </div>

                <div className="text-2xl text-[#8cff00]">
                  →
                </div>

                <div>
                  <p className="text-2xl font-black text-white">
                    Growth
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Build systems
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          THREE PILLARS
      ===================================================== */}
      <section className="py-24 sm:py-32">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="mb-14 max-w-3xl">

            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8cff00]">
              The Digify Ecosystem
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              One growth partner.
              <br />

              <span className="text-slate-500">
                Multiple growth engines.
              </span>
            </h2>

          </div>


          <div className="grid gap-5 lg:grid-cols-3">

            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="group relative min-h-[340px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#8cff00]/40 hover:bg-white/[0.045]"
              >

                <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-[#8cff00]/5 blur-3xl transition duration-500 group-hover:bg-[#8cff00]/15" />

                <div className="relative flex h-full flex-col">

                  <div className="flex items-center justify-between">

                    <span className="text-sm font-black text-[#8cff00]">
                      {pillar.number}
                    </span>

                    <span className="text-2xl text-slate-500 transition duration-300 group-hover:text-[#8cff00]">
                      {pillar.icon}
                    </span>

                  </div>

                  <div className="mt-auto">

                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                      {pillar.subtitle}
                    </p>

                    <h3 className="text-3xl font-black tracking-tight text-white">
                      {pillar.title}
                    </h3>

                    <p className="mt-5 text-base leading-7 text-slate-400">
                      {pillar.description}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          STATS
      ===================================================== */}
      <section className="border-y border-white/10 bg-[#061329] py-20">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="mb-12">

            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8cff00]">
              Experience
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Numbers that describe
              <span className="text-[#8cff00]">
                {" "}the journey.
              </span>
            </h2>

          </div>


          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 md:grid-cols-4">

            {stats.map((stat) => (
              <div
                key={stat.number + stat.label}
                className="bg-[#061329] p-7 sm:p-9"
              >

                <div className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                  {stat.number}
                </div>

                <div className="mt-3 text-sm font-black uppercase tracking-wider text-[#8cff00]">
                  {stat.label}
                </div>

                <p className="mt-2 text-sm text-slate-500">
                  {stat.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>



      {/* //meetuo images // */}
<section className="border-y border-[var(--border)] bg-[var(--bg-secondary)]">
  <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

    <div className="max-w-3xl">
      <div className="text-[10px] font-bold tracking-[0.22em] text-[var(--green)] sm:text-xs">
        HAPPY MEETUPS
      </div>

      <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] sm:text-4xl lg:text-5xl">
        People, conversations
        <span className="block text-[var(--green)]">
          and shared experiences.
        </span>
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
        Moments from our meetups, conversations and community experiences.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
      {meetupImages.map((image, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--bg-card)]"
        >
          <img
            src={image}
            alt={`Digify MSP Happy Meetup ${index + 1}`}
            className="aspect-[4/4] w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </div>

  </div>
</section>

      {/* =====================================================
          VALUES / HOW WE THINK
      ===================================================== */}
      <section className="py-24 sm:py-32">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8cff00]">
                How We Think
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
                Don't optimise
                <br />
                one channel.
                <br />

                <span className="text-slate-500">
                  Optimise the system.
                </span>
              </h2>

              <p className="mt-7 max-w-lg text-lg leading-8 text-slate-400">
                Digify MSP looks at the complete customer
                journey — from attention and traffic to
                conversion, follow-up and growth.
              </p>

            </div>


            <div className="divide-y divide-white/10 border-y border-white/10">

              {values.map((value) => (
                <div
                  key={value.number}
                  className="group grid gap-5 py-7 sm:grid-cols-[70px_1fr] sm:items-start"
                >

                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8cff00] text-sm font-black text-[#03101f]">
                    {value.number}
                  </span>

                  <div>

                    <h3 className="text-xl font-black text-white transition group-hover:text-[#8cff00]">
                      {value.title}
                    </h3>

                    <p className="mt-2 max-w-2xl leading-7 text-slate-400">
                      {value.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FOUNDER
      ===================================================== */}
      <section className="bg-[#061329] py-24 sm:py-32">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#020817]">

            <div className="grid lg:grid-cols-[0.7fr_1.3fr]">

              {/* Founder visual */}
              <div className="relative min-h-[420px] overflow-hidden bg-gradient-to-br from-[#0b1b34] to-[#020817]">

                <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-[#8cff00]/10 blur-[80px]" />

                <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-blue-500/10 blur-[100px]" />

                <Image
                  src="/founder.jpeg"
                  alt="Digify MSP founder and growth strategy"
                  width={800}
                  height={900}
                  className="relative z-10 h-full min-h-[420px] w-full object-cover object-center opacity-90"
                />

                <div className="absolute bottom-6 left-6 right-6 z-20 rounded-2xl border border-white/10 bg-[#020817]/85 p-4 backdrop-blur-xl">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8cff00]">
                    Digify MSP
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Experience-led marketing systems
                  </p>

                </div>

              </div>


              {/* Founder content */}
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8cff00]">
                  Founder
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                  Poorna Pragathi
                  <br />
                  Maruthamuthu
                </h2>

                <p className="mt-3 font-bold text-[#8cff00]">
                  Founder & CEO — Digify MSP
                </p>

                <div className="my-8 h-px w-full bg-white/10" />

                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                  IIM K certified digital marketer with 10+
                  years of agency experience, bringing
                  practical frameworks and real-world
                  marketing experience into the Digify
                  ecosystem.
                </p>

                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500">
                  The vision behind Digify MSP is to bring
                  strategy, execution, education and technology
                  together so businesses can build marketing
                  systems that actually contribute to growth.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-slate-300">
                    10+ Years Experience
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-slate-300">
                    Digital Marketing
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-slate-300">
                    Growth Strategy
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden py-28 sm:py-36">

        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8cff00]/10 blur-[140px]" />

        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#8cff00]">
            Ready to grow?
          </p>

          <h2 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Let's build something
            <br />

            <span className="text-[#8cff00]">
              worth growing.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Tell us where your business is today and let's
            identify the systems that can take it forward.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#8cff00] px-8 py-4 text-sm font-black text-[#03101f] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(140,255,0,0.25)]"
            >
              Get in Touch →
            </Link>

            <Link
              href="/agency"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-bold text-white transition duration-300 hover:border-[#8cff00]/40 hover:bg-white/[0.06]"
            >
              Explore Digify MSP
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}