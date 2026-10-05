export default function ContactPage() {
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
              GET IN TOUCH
            </div>

            <h1 className="break-words text-4xl font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
              Let&apos;s talk about
              <span className="block text-[var(--green)]">
                what&apos;s next.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8 lg:text-xl">
              Tell us about your business, your challenge and where you want
              to go next.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)]">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* CONTACT INFO */}
            <div className="min-w-0">
              <div className="text-[10px] font-bold tracking-[0.22em] text-[var(--green)] sm:text-xs">
                CONTACT DIGIFY MSP
              </div>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Start with a
                <span className="block text-[var(--green)]">
                  conversation.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-[var(--text-secondary)]">
                Whether you need marketing execution, practical training or
                strategic guidance, tell us what you are working on.
              </p>

              <div className="mt-10 grid gap-4">
                {/* PHONE */}
                <div className="group rounded-[24px] border border-[var(--border)] bg-[var(--bg-card)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--green)]/40">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-extrabold tracking-[0.2em] text-[var(--green)]">
                        PHONE
                      </div>

                      <h3 className="mt-4 text-xl font-extrabold break-words">
                        +91 90436 32525
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition group-hover:border-[var(--green)] group-hover:text-[var(--green)]">
                      ↗
                    </div>
                  </div>

                  <a
                    href="tel:+919043632525"
                    className="mt-5 inline-flex text-sm font-bold text-[var(--green)]"
                  >
                    Call Now →
                  </a>
                </div>

                {/* WHATSAPP */}
                <div className="group rounded-[24px] border border-[var(--border)] bg-[var(--bg-card)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--green)]/40">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-[10px] font-extrabold tracking-[0.2em] text-[var(--green)]">
                        WHATSAPP
                      </div>

                      <h3 className="mt-4 text-xl font-extrabold">
                        Start a WhatsApp conversation
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition group-hover:border-[var(--green)] group-hover:text-[var(--green)]">
                      ↗
                    </div>
                  </div>

                  <a
                    href="https://wa.me/919043632525"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex text-sm font-bold text-[var(--green)]"
                  >
                    WhatsApp Us →
                  </a>
                </div>

                {/* EMAIL */}
                <div className="group rounded-[24px] border border-[var(--border)] bg-[var(--bg-card)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--green)]/40">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-[10px] font-extrabold tracking-[0.2em] text-[var(--green)]">
                        EMAIL
                      </div>

                      <h3 className="mt-4 break-all text-lg font-extrabold sm:text-xl">
                        hello.digifymsp@gmail.com
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition group-hover:border-[var(--green)] group-hover:text-[var(--green)]">
                      ↗
                    </div>
                  </div>

                  <a
                    href="mailto:hello.digifymsp@gmail.com"
                    className="mt-5 inline-flex text-sm font-bold text-[var(--green)]"
                  >
                    Send Email →
                  </a>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="min-w-0">
              <div className="rounded-[28px] border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
                <div className="text-[10px] font-bold tracking-[0.22em] text-[var(--green)] sm:text-xs">
                  SEND AN ENQUIRY
                </div>

                <h3 className="mt-4 text-2xl font-black tracking-[-0.025em] sm:text-3xl">
                  Tell us about your business.
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                  Share a few details and we&apos;ll understand where you need
                  help.
                </p>

                <form className="mt-8 grid gap-5">
                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold text-[var(--text-secondary)]"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--green)]/60 focus:ring-4 focus:ring-[var(--green)]/5"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold text-[var(--text-secondary)]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--green)]/60 focus:ring-4 focus:ring-[var(--green)]/5"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-bold text-[var(--text-secondary)]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--green)]/60 focus:ring-4 focus:ring-[var(--green)]/5"
                    />
                  </div>

                  {/* SERVICE */}
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-xs font-bold text-[var(--text-secondary)]"
                    >
                      What are you looking for?
                    </label>

                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="w-full cursor-pointer rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-sm text-[var(--text)] outline-none transition focus:border-[var(--green)]/60 focus:ring-4 focus:ring-[var(--green)]/5"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>

                      <option value="agency">
                        Agency Services
                      </option>

                      <option value="academy">
                        Academy
                      </option>

                      <option value="consulting">
                        Consulting
                      </option>

                      <option value="other">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-bold text-[var(--text-secondary)]"
                    >
                      Tell us about your business
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your business..."
                      rows={6}
                      className="w-full resize-y rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--green)]/60 focus:ring-4 focus:ring-[var(--green)]/5"
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-[var(--green)] px-7 py-4 text-sm font-extrabold text-[#03101f] transition hover:-translate-y-1 hover:bg-[var(--green-light)] hover:shadow-[0_15px_40px_rgba(140,255,0,0.18)]"
                  >
                    Send Enquiry →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--green)]/5 blur-[120px]"
        />

        <div className="relative mx-auto w-full max-w-[1000px] px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <div className="text-[10px] font-bold tracking-[0.22em] text-[var(--green)] sm:text-xs">
            DIGIFY MSP
          </div>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
            Have a business challenge?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            Start the conversation and let&apos;s figure out what comes next.
          </p>
        </div>
      </section>
    </main>
  );
}