import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}

      <section className="hero">

        <div className="container hero-grid">

          <div>

            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              Agency · Academy · Consulting
            </div>

            <h1>
              Don't Just
              <span> Run Marketing.</span>

              <br />

              <span className="gradient-text">
                Build Growth.
              </span>
            </h1>

            <p className="hero-description">
              Digify MSP combines performance marketing,
              AI-powered workflows, conversion strategy and
              practical expertise to build connected growth
              systems for modern businesses.
            </p>

            <div className="hero-actions">

              <Link
                href="/contact"
                className="btn btn-primary"
              >
                Build My Growth System →
              </Link>

              <Link
                href="#ecosystem"
                className="btn btn-secondary"
              >
                Explore Digify MSP ↓
              </Link>

            </div>

          </div>


          <div className="hero-visual">

            <div className="logo-orbit">

              <div className="logo-card">

                <Image
                  src="/hero-img.png"
                  alt="Digify MSP"
                  width={220}
                  height={220}
                />

              </div>

            </div>


            <div className="floating-card float-1">
              <div className="float-label">
                Growth
              </div>

              <div className="float-value">
                Strategy ↗
              </div>
            </div>


            <div className="floating-card float-2">
              <div className="float-label">
                Powered by
              </div>

              <div className="float-value">
                AI Systems
              </div>
            </div>


            <div className="floating-card float-3">
              <div className="float-label">
                Experience
              </div>

              <div className="float-value">
                10+ Years
              </div>
            </div>


            <div className="floating-card float-4">
              <div className="float-label">
                Clients
              </div>

              <div className="float-value">
                1,500+
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* STATS */}

      <section className="stats">

        <div className="container stats-grid">

          <div className="stat">
            <div className="stat-number">10+</div>
            <div className="stat-label">
              Years Experience
            </div>
          </div>

          <div className="stat">
            <div className="stat-number">1,500+</div>
            <div className="stat-label">
              Clients
            </div>
          </div>

          <div className="stat">
            <div className="stat-number">3</div>
            <div className="stat-label">
              Countries
            </div>
          </div>

          <div className="stat">
            <div className="stat-number">3</div>
            <div className="stat-label">
              Growth Pillars
            </div>
          </div>

        </div>

      </section>


      {/* PROBLEM */}

      <section className="section">

        <div className="container">

          <div className="section-heading">

            <div className="section-label">
              THE PROBLEM
            </div>

            <h2 className="section-title">
              Your business doesn't need
              <span className="green-text">
                {" "}more marketing noise.
              </span>
            </h2>

            <p className="section-description">
              Ads, content, leads, landing pages and
              follow-ups shouldn't operate as disconnected
              activities. Growth becomes stronger when
              everything works together.
            </p>

          </div>


          <div className="grid-3">

            <div className="card">
              <span className="card-number">01</span>
              <h3>Attract</h3>
              <p>
                Reach the right audience with the right
                message at the right moment.
              </p>
            </div>

            <div className="card">
              <span className="card-number">02</span>
              <h3>Convert</h3>
              <p>
                Turn attention into enquiries,
                opportunities and customers.
              </p>
            </div>

            <div className="card">
              <span className="card-number">03</span>
              <h3>Scale</h3>
              <p>
                Build repeatable systems instead of
                depending on random campaign wins.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ECOSYSTEM */}

      <section
        id="ecosystem"
        className="section section-dark"
      >

        <div className="container">

          <div className="section-heading">

            <div className="section-label">
              THE DIGIFY ECOSYSTEM
            </div>

            <h2 className="section-title">
              One brand.
              <span className="green-text">
                {" "}Three ways to grow.
              </span>
            </h2>

          </div>


          <div className="grid-3">

            <div className="card">

              <span className="card-number">
                01 / AGENCY
              </span>

              <h3>
                Performance Marketing
              </h3>

              <p>
                Paid advertising, lead generation,
                conversion systems and AI-powered
                marketing workflows.
              </p>

              <Link
                href="/agency"
                className="btn btn-secondary"
                style={{ marginTop: "25px" }}
              >
                Explore Agency →
              </Link>

            </div>


            <div className="card">

              <span className="card-number">
                02 / ACADEMY
              </span>

              <h3>
                Practical Learning
              </h3>

              <p>
                Learn digital marketing through practical
                frameworks, campaigns and real-world
                execution.
              </p>

              <Link
                href="/academy"
                className="btn btn-secondary"
                style={{ marginTop: "25px" }}
              >
                Explore Academy →
              </Link>

            </div>


            <div className="card">

              <span className="card-number">
                03 / CONSULTING
              </span>

              <h3>
                Strategic Growth
              </h3>

              <p>
                Strategic direction, growth architecture,
                automation and marketing systems for
                established businesses.
              </p>

              <Link
                href="/consulting"
                className="btn btn-secondary"
                style={{ marginTop: "25px" }}
              >
                Explore Consulting →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* FRAMEWORK */}

      <section className="section">

        <div className="container">

          <div className="two-column">

            <div>

              <div className="section-label">
                THE DIGIFY FRAMEWORK
              </div>

              <h2 className="section-title">
                Don't think in campaigns.
                <span className="green-text">
                  {" "}Think in layers.
                </span>
              </h2>

              <p className="section-description">
                Marketing becomes more meaningful when
                audience reality, brand truth and
                conversion context are connected.
              </p>

            </div>


            <div>

              <div className="card">

                <span className="card-number">
                  01
                </span>

                <h3>
                  Audience Reality
                </h3>

                <p>
                  Understand who you're actually trying
                  to reach and what influences their
                  decisions.
                </p>

              </div>


              <div
                className="card"
                style={{ marginTop: "15px" }}
              >

                <span className="card-number">
                  02
                </span>

                <h3>
                  Brand Truth
                </h3>

                <p>
                  Identify what genuinely makes your
                  business different.
                </p>

              </div>


              <div
                className="card"
                style={{ marginTop: "15px" }}
              >

                <span className="card-number">
                  03
                </span>

                <h3>
                  Conversion Context
                </h3>

                <p>
                  Understand what customers need before
                  they take action.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* AI */}

      <section className="section section-dark">

        <div className="container">

          <div className="two-column">

            <div>

              <div className="section-label">
                AI × MARKETING
              </div>

              <h2 className="section-title">
                AI shouldn't replace
                <span className="green-text">
                  {" "}strategy.
                </span>
              </h2>

              <p className="section-description">
                It should make good marketing faster,
                smarter and easier to scale.
              </p>

              <Link
                href="/agency"
                className="btn btn-primary"
                style={{ marginTop: "30px" }}
              >
                Explore AI Growth Systems →
              </Link>

            </div>


            <div className="grid-3">

              <div className="card">
                <span className="card-number">AI</span>
                <h3>Content</h3>
              </div>

              <div className="card">
                <span className="card-number">01</span>
                <h3>Workflows</h3>
              </div>

              <div className="card">
                <span className="card-number">02</span>
                <h3>Automation</h3>
              </div>

              <div className="card">
                <span className="card-number">03</span>
                <h3>Conversion</h3>
              </div>

              <div className="card">
                <span className="card-number">04</span>
                <h3>Creative</h3>
              </div>

              <div className="card">
                <span className="card-number">05</span>
                <h3>Intelligence</h3>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* INDUSTRIES */}

      <section className="section">

        <div className="container">

          <div className="section-heading">

            <div className="section-label">
              INDUSTRIES
            </div>

            <h2 className="section-title">
              Different businesses.
              <span className="green-text">
                {" "}Different journeys.
              </span>
            </h2>

          </div>


          <div className="grid-3">

            <div className="card">
              <span className="card-number">01</span>
              <h3>Real Estate</h3>
              <p>
                Interest → Trust → Site Visit → Conversion
              </p>
            </div>

            <div className="card">
              <span className="card-number">02</span>
              <h3>Healthcare</h3>
              <p>
                Awareness → Trust → Enquiry → Appointment
              </p>
            </div>

            <div className="card">
              <span className="card-number">03</span>
              <h3>Education</h3>
              <p>
                Awareness → Interest → Application →
                Admission
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="final-cta">

        <div className="container final-cta-content">

          <div className="section-label">
            READY WHEN YOU ARE
          </div>

          <h2>
            Your next stage of
            <span className="green-text">
              {" "}growth starts here.
            </span>
          </h2>

          <p>
            Whether you need more customers, better
            marketing skills or strategic direction,
            let's start with a conversation.
          </p>

          <Link
            href="/contact"
            className="btn btn-primary"
          >
            Start a Conversation →
          </Link>

        </div>

      </section>

    </>
  );
}