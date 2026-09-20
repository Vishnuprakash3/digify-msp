import Link from "next/link";

export default function AboutPage() {
  return (
    <>

      <section className="hero">

        <div className="container">

          <div className="section-label">
            ABOUT DIGIFY MSP
          </div>

          <h1>
            Built from
            <span className="gradient-text">
              {" "}real marketing experience.
            </span>
          </h1>

          <p className="hero-description">
            Digify MSP brings together agency execution,
            practical marketing education and strategic
            consulting under one ecosystem.
          </p>

        </div>

      </section>


      <section className="section section-dark">

        <div className="container">

          <div className="two-column">

            <div>

              <div className="section-label">
                OUR STORY
              </div>

              <h2 className="section-title">
                Agency.
                <br />
                Academy.
                <br />
                Consulting.
              </h2>

            </div>


            <div>

              <p className="section-description">
                Digify MSP is structured around three connected
                pillars. The agency works on business growth,
                the academy teaches practical marketing and
                consulting focuses on strategic systems.
              </p>

              <p className="section-description">
                The goal is to connect knowledge with execution
                instead of treating marketing as isolated
                activities.
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <div className="section-heading">

            <div className="section-label">
              EXPERIENCE
            </div>

            <h2 className="section-title">
              Numbers that describe
              <span className="green-text">
                {" "}the journey.
              </span>
            </h2>

          </div>


          <div className="grid-4">

            <div className="card">
              <div className="stat-number">
                10+
              </div>
              <p>
                Years of agency experience
              </p>
            </div>

            <div className="card">
              <div className="stat-number">
                1,500+
              </div>
              <p>
                Clients served
              </p>
            </div>

            <div className="card">
              <div className="stat-number">
                3
              </div>
              <p>
                Countries
              </p>
            </div>

            <div className="card">
              <div className="stat-number">
                3
              </div>
              <p>
                Business pillars
              </p>
            </div>

          </div>

        </div>

      </section>


      <section className="section section-dark">

        <div className="container">

          <div className="card">

            <div className="section-label">
              FOUNDER
            </div>

            <h2
              style={{
                marginTop: "20px",
                fontSize: "40px",
                fontWeight: 900
              }}
            >
              Poorna Pragathi Maruthamuthu
            </h2>

            <p
              style={{
                color: "var(--green)",
                marginTop: "5px"
              }}
            >
              Founder & CEO — Digify MSP
            </p>

            <p
              className="section-description"
              style={{ maxWidth: "800px" }}
            >
              IIM K certified digital marketer with 10+ years
              of agency experience, bringing practical
              frameworks and real-world marketing experience
              into the Digify ecosystem.
            </p>

          </div>

        </div>

      </section>


      <section className="final-cta">

        <div className="container final-cta-content">

          <h2>
            Let's build something
            <span className="green-text">
              {" "}worth growing.
            </span>
          </h2>

          <Link
            href="/contact"
            className="btn btn-primary"
          >
            Get in Touch →
          </Link>

        </div>

      </section>

    </>
  );
}