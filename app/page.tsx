"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ---------- shared style tokens ---------- */
const container =
  "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16";
const sectionPad = "py-20 sm:py-28 lg:py-32";
const eyebrow =
  "text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--accent)]";
const h2Style =
  "mt-5 text-4xl font-black leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[3.5rem]";
const copyStyle =
  "text-base leading-8 text-[var(--text-secondary)] sm:text-lg";
const card =
  "rounded-[24px] border border-[var(--border)] bg-[var(--bg-card)]";

/* ---------- data ---------- */
const growthProblems = [
  {
    title: "Getting leads but not enough customers?",
    focus: "Lead Generation + Conversion",
    description:
      "We identify where your funnel is leaking and build a system that moves people from attention to action.",
  },
  {
    title: "Running ads without knowing what works?",
    focus: "Performance Marketing + Analytics",
    description:
      "We connect campaigns, audiences and conversion data so you know what is actually driving business.",
  },
  {
    title: "Leads are coming but follow-up is slow?",
    focus: "AI Follow-up + Automation",
    description:
      "We build smart workflows that help your team respond faster and reduce the leads lost through manual follow-up.",
  },
  {
    title: "Your brand looks good but doesn't convert?",
    focus: "Conversion + Positioning",
    description:
      "We improve your messaging, landing pages and customer journey so attention has a clear path toward action.",
  },
];

const ecosystem = [
  {
    number: "01",
    title: "Performance Marketing",
    description:
      "Meta and Google campaigns designed around business outcomes, not vanity metrics.",
  },
  {
    number: "02",
    title: "AI Growth Systems",
    description:
      "Automations, AI workflows and smart follow-up systems that reduce manual work.",
  },
  {
    number: "03",
    title: "AI Marketing Academy",
    description:
      "Practical training with live projects, tools and real-world marketing execution.",
  },
  {
    number: "04",
    title: "Growth Consulting",
    description:
      "A strategic layer connecting acquisition, conversion, retention and revenue.",
  },
];

const industries = [
  {
    title: "Retail & Fashion",
    description:
      "Hyper-local campaigns designed around products, offers, festivals and customer intent.",
  },
  {
    title: "Beauty & Wellness",
    description:
      "Positioning and lead systems designed to attract better customers and premium bookings.",
  },
  {
    title: "Education",
    description:
      "Lead generation and conversion systems for academies, trainers and education businesses.",
  },
  {
    title: "Local Businesses",
    description:
      "Growth systems connecting local discovery, ads, enquiries and follow-up.",
  },
];

const faqData = [
  {
    question: "What does Digify MSP actually do?",
    answer:
      "Digify MSP combines performance marketing, AI-powered workflows, practical marketing training and growth consulting into one connected growth system.",
  },
  {
    question: "Do you only run Meta and Google ads?",
    answer:
      "No. Ads are one part of the system. We also work on positioning, landing pages, lead generation, automation, follow-up, conversion and growth strategy.",
  },
  {
    question: "Is the Academy suitable for beginners?",
    answer:
      "Yes. The Academy is designed around practical learning, tools, live projects and real-world marketing execution.",
  },
  {
    question: "Can you build AI automation for our business?",
    answer:
      "Yes. Depending on the business, workflows can include lead handling, customer follow-up, content processes, enquiry systems and other repetitive marketing tasks.",
  },
];

const problemCards = [
  "Ads are running but leads are inconsistent",
  "Leads come in but follow-up is slow",
  "Website traffic does not become enquiries",
  "Marketing activity does not connect to revenue",
];

const layers = [
  ["01", "Attention", "Get the right people to notice you."],
  ["02", "Traffic", "Move intent toward your business."],
  ["03", "Conversion", "Turn interest into enquiries or sales."],
  ["04", "AI Follow-up", "Respond faster and reduce lead leakage."],
  ["05", "Growth", "Connect the system to measurable outcomes."],
];

const aiCards = [
  ["AI Workflows", "Automate repetitive marketing operations."],
  ["Smart Follow-up", "Respond to leads faster."],
  ["Content Systems", "Create consistent content workflows."],
  ["Conversion Intelligence", "Understand what moves customers."],
];

const academyTopics = [
  "Prompt Engineering",
  "Meta Ads",
  "Lead Generation",
  "Local SEO",
  "Canva & Creative Systems",
  "Landing Pages",
];

const btnPrimary =
  "inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#8cff00] px-7 text-center text-sm font-extrabold text-[#03101f] transition-all duration-300 hover:-translate-y-1 hover:bg-[#aaff40] hover:shadow-[0_15px_40px_rgba(140,255,0,0.22)]";
const btnGhost =
  "inline-flex min-h-[54px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-7 text-center text-sm font-bold text-[var(--text)] transition-all duration-300 hover:border-[#8cff00]/50 hover:text-[var(--accent)]";

export default function Home() {
  const [selectedProblem, setSelectedProblem] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const activeProblem = growthProblems[selectedProblem];

  return (
    <main className="w-full overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden border-b border-[var(--border)] pt-[var(--nav-h)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-180px] top-[20%] -z-10 h-[500px] w-[500px] rounded-full bg-[#8cff00]/5 blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-200px] top-[5%] -z-10 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[160px]"
        />

        <div
          className={`${container} grid grid-cols-1 items-center gap-10 py-12 sm:py-16 lg:min-h-[calc(100vh-var(--nav-h))] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-10`}
        >
          {/* LEFT */}
          <div className="relative z-10 flex min-w-0 flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#8cff00]/30 bg-[#8cff00]/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#8cff00] shadow-[0_0_12px_#8cff00]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent)] sm:text-xs">
                Performance × AI × Growth
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,4.6vw,4.75rem)] font-black leading-[1] tracking-[-0.04em]">
              Marketing built
              <br />
              <span className="text-[var(--accent)]">for growth.</span>
            </h1>

            <p className={`mt-6 max-w-[600px] ${copyStyle}`}>
              Digify MSP combines performance marketing, AI-powered workflows
              and strategic growth systems to turn attention into measurable
              business outcomes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={btnPrimary}>
                Build Your Growth System →
              </Link>
              <Link href="#ecosystem" className={btnGhost}>
                Explore Digify MSP
              </Link>
            </div>

            <div className="mt-10 grid max-w-[600px] grid-cols-3 border-y border-[var(--border)]">
              {[
                ["360°", "Growth approach"],
                ["AI", "Powered workflows"],
                ["ROI", "Business focused"],
              ].map(([big, small], i) => (
                <div
                  key={big}
                  className={`py-5 ${
                    i === 0
                      ? "pr-3"
                      : "border-l border-[var(--border)] px-3 sm:px-6"
                  }`}
                >
                  <div className="text-3xl font-black sm:text-4xl">{big}</div>
                  <p className="mt-1 text-xs text-[var(--text-muted)] sm:text-sm">
                    {small}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative z-10 flex w-full min-w-0 items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute inset-6 rounded-[40px] bg-[#8cff00]/5 blur-[90px]"
            />
            <div className="relative w-full max-w-[620px] overflow-hidden rounded-[28px] border border-white/10 bg-[#07101f]/40 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
              <Image
                src="/hero-img.png"
                alt="Digify MSP growth system"
                width={900}
                height={1000}
                priority
                sizes="(min-width: 1024px) 620px, 100vw"
                className="relative z-10 block h-auto max-h-[640px] w-full object-contain"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= STRIP ================= */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-secondary)]">
        <div
          className={`${container} grid grid-cols-2 lg:grid-cols-4`}
        >
          {[
            ["01", "Performance Marketing"],
            ["02", "AI Automation"],
            ["03", "Growth Strategy"],
            ["04", "Practical Training"],
          ].map(([number, title], i) => (
            <div
              key={number}
              className={`border-[var(--border)] py-5 pr-4 ${
                i % 2 === 1 ? "pl-4" : ""
              } ${i < 2 ? "border-b lg:border-b-0" : ""} ${
                i > 0 ? "lg:border-l lg:pl-6" : ""
              } ${i % 2 === 1 ? "border-l" : ""}`}
            >
              <span className="text-xs font-bold text-[var(--accent)]">
                {number}
              </span>
              <div className="mt-1 text-sm font-bold sm:text-base">{title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className={`relative overflow-hidden ${sectionPad}`}>
        <div
          className={`${container} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16`}
        >
          <div className="min-w-0">
            <p className={eyebrow}>The Problem</p>
            <h2 className={`${h2Style} max-w-[620px]`}>
              Marketing is not the problem.{" "}
              <span className="text-slate-400">A disconnected system is.</span>
            </h2>
            <p className={`mt-7 max-w-[560px] ${copyStyle}`}>
              Businesses often run ads, create content, build websites and
              collect leads separately. Digify MSP connects those pieces into
              one growth system.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {problemCards.map((item, index) => (
              <div
                key={item}
                className={`group flex min-h-[170px] flex-col ${card} p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8cff00]/40`}
              >
                <span className="text-xs font-bold text-[var(--accent)]">
                  0{index + 1}
                </span>
                <div className="mt-4 h-px w-10 bg-[#8cff00] transition-all duration-300 group-hover:w-20" />
                <h3 className="mt-5 text-lg font-bold leading-7">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOTTLENECK ================= */}
      <section
        className={`relative overflow-hidden bg-[var(--bg-secondary)] ${sectionPad}`}
      >
        <div className={container}>
          <div className="max-w-[820px]">
            <p className={eyebrow}>Find Your Bottleneck</p>
            <h2 className={h2Style}>Where is your growth getting stuck?</h2>
            <p className={`mt-6 max-w-[700px] ${copyStyle}`}>
              Choose the situation closest to your business and see the type
              of system we would focus on.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="space-y-3">
              {growthProblems.map((problem, index) => {
                const active = selectedProblem === index;
                return (
                  <button
                    key={problem.title}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelectedProblem(index)}
                    className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left text-sm font-bold leading-6 transition-all duration-300 sm:text-base ${
                      active
                        ? "border-[#8cff00]/60 bg-[#8cff00]/10 text-[var(--text)] shadow-[0_0_30px_rgba(140,255,0,0.06)]"
                        : "border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[#8cff00]/30"
                    }`}
                  >
                    <span
                      className={`h-3 w-3 shrink-0 rounded-full ${
                        active ? "bg-[#8cff00]" : "bg-slate-500"
                      }`}
                    />
                    {problem.title}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col rounded-[28px] border border-[var(--border)] bg-[var(--bg)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.2)] sm:p-8">
              <p className={eyebrow}>Recommended Focus</p>
              <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                {activeProblem.focus}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
                {activeProblem.description}
              </p>

              <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
                {["Diagnose", "Build", "Optimise"].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-3"
                  >
                    <span className="block text-xs font-bold text-[var(--accent)]">
                      0{index + 1}
                    </span>
                    <span className="mt-1 block text-sm font-bold">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="group mt-auto inline-flex items-center gap-2 pt-8 font-bold text-[var(--accent)]"
              >
                Talk to Digify MSP
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ECOSYSTEM ================= */}
      <section
        id="ecosystem"
        className={`relative scroll-mt-[var(--nav-h)] overflow-hidden ${sectionPad}`}
      >
        <div className={container}>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12">
            <div>
              <p className={eyebrow}>The Digify Ecosystem</p>
              <h2 className={h2Style}>
                One growth partner.{" "}
                <span className="text-slate-400">Multiple growth engines.</span>
              </h2>
            </div>
            <p className="max-w-[500px] text-base leading-8 text-[var(--text-secondary)] lg:justify-self-end">
              From acquiring attention to building systems around conversion,
              we look at the entire customer journey.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((item) => (
              <Link
                href="/agency"
                key={item.number}
                className={`group flex min-h-[230px] flex-col ${card} p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#8cff00]/40`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[var(--accent)]">
                    {item.number}
                  </span>
                  <span className="text-lg text-slate-500 transition group-hover:text-[var(--accent)]">
                    →
                  </span>
                </div>
                <h3 className="mt-auto pt-10 text-xl font-black">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LAYER THINKING ================= */}
      <section
        className={`relative overflow-hidden bg-[var(--bg-secondary)] ${sectionPad}`}
      >
        <div
          className={`${container} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16`}
        >
          <div className="min-w-0">
            <p className={eyebrow}>Layer Thinking Framework</p>
            <h2 className={h2Style}>
              Don&apos;t optimise one channel.{" "}
              <span className="text-slate-400">Optimise the whole system.</span>
            </h2>
            <p className={`mt-6 max-w-[560px] ${copyStyle}`}>
              Growth does not happen inside one platform. We connect every
              important layer of the customer journey.
            </p>
          </div>

          <div className="space-y-3">
            {layers.map(([number, title, description]) => (
              <div
                key={number}
                className="flex items-center gap-4 rounded-[20px] border border-[var(--border)] bg-[var(--bg-card)] p-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#8cff00] text-sm font-black text-[#03101f]">
                  {number}
                </div>
                <div className="min-w-0">
                  <h3 className="font-black">{title}</h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AI × MARKETING ================= */}
      <section className={`relative overflow-hidden ${sectionPad}`}>
        <div
          className={`${container} grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16`}
        >
          <div className="min-w-0">
            <p className={eyebrow}>AI × Marketing</p>
            <h2 className={h2Style}>
              Make your marketing{" "}
              <span className="text-slate-400">work harder.</span>
            </h2>
            <p className={`mt-6 max-w-[600px] ${copyStyle}`}>
              AI should not simply create more content. It should help your
              business respond faster, automate repetitive work and create
              better customer journeys.
            </p>
            <Link
              href="/consulting"
              className="mt-8 inline-flex rounded-full border border-[var(--border)] px-6 py-3 text-sm font-bold transition hover:border-[#8cff00]/50 hover:text-[var(--accent)]"
            >
              Explore AI Growth Systems →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aiCards.map(([title, description], index) => (
              <div key={title} className={`${card} p-6`}>
                <span className="text-xs font-bold text-[var(--accent)]">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section
        className={`relative overflow-hidden bg-[var(--bg-secondary)] ${sectionPad}`}
      >
        <div className={container}>
          <div className="max-w-[800px]">
            <p className={eyebrow}>Built For Real Businesses</p>
            <h2 className={h2Style}>
              Growth systems built around{" "}
              <span className="text-slate-400">your business.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <div key={industry.title} className={`${card} p-6`}>
                <span className="text-xs font-bold text-[var(--accent)]">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-xl font-black">{industry.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ACADEMY ================= */}
      <section className={`relative overflow-hidden ${sectionPad}`}>
        <div
          className={`${container} grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16`}
        >
          <div className="min-w-0">
            <p className={eyebrow}>Digify MSP Academy</p>
            <h2 className={h2Style}>
              Learn marketing.{" "}
              <span className="text-slate-400">Build real systems.</span>
            </h2>
            <p className={`mt-6 max-w-[620px] ${copyStyle}`}>
              Practical training designed around real tools, real campaigns
              and real-world marketing execution.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/academy" className={btnPrimary}>
                Explore Academy →
              </Link>
              <Link href="/contact" className={btnGhost}>
                Ask About Training
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-5">
              <span className="text-sm font-bold">Practical Learning System</span>
              <span className="rounded-full bg-[#8cff00]/10 px-3 py-1 text-xs font-bold text-[var(--accent)]">
                LIVE PROJECTS
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {academyTopics.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-[var(--border)] p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#8cff00] text-xs font-black text-[#03101f]">
                    {index + 1}
                  </span>
                  <span className="text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section
        className={`relative overflow-hidden bg-[var(--bg-secondary)] ${sectionPad}`}
      >
        <div className="mx-auto w-full max-w-[1000px] px-5 sm:px-8">
          <div className="text-center">
            <p className={eyebrow}>Frequently Asked</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
              Questions, answered.
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqData.map((faq, index) => {
              const open = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--bg-card)]"
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="font-bold">{faq.question}</span>
                    <span
                      className={`shrink-0 text-2xl leading-none text-[var(--accent)] transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {open && (
                    <div className="border-t border-[var(--border)] px-5 pb-5 pt-4 text-sm leading-7 text-[var(--text-muted)] sm:px-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className={`relative overflow-hidden ${sectionPad}`}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex justify-center"
        >
          <div className="h-[500px] w-[700px] max-w-full rounded-full bg-[#8cff00]/5 blur-[150px]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1000px] px-5 text-center sm:px-8">
          <p className={eyebrow}>Ready To Build?</p>

          <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[4.25rem]">
            Stop managing
            <br />
            disconnected marketing.
          </h2>

          <p className={`mx-auto mt-7 max-w-[680px] ${copyStyle}`}>
            Build a connected growth system that brings together marketing,
            AI, conversion and strategy.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className={btnPrimary}>
              Let&apos;s Build Your Growth System →
            </Link>
            <Link href="/case-studies" className={btnGhost}>
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}