import Link from "next/link";

export default function ConsultingPage() {
  return (
    <>

      <section className="hero">

        <div className="container">

          <div className="section-label">
            DIGIFY MSP CONSULTING
          </div>

          <h1>
            Sometimes you don't need
            <span className="gradient-text">
              {" "}another campaign.
            </span>
          </h1>

          <p className="hero-description">
            You need someone to step back, understand the
            entire business and identify where growth systems
            can be improved.
          </p>

          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ marginTop: "35px" }}
          >
            Book a Consulting Conversation →
          </Link>

        </div>

      </section>


      <section className="section section-dark">

        <div className="container">

          <div className="section-heading">

            <div className="section-label">
              WHAT WE EXAMINE
            </div>

            <h2 className="section-title">
              Look beyond the campaign.
              <span className="green-text">
                {" "}Look at the system.
              </span>
            </h2>

          </div>


          <div className="grid-3">

            {[
              ["01", "Positioning"],
              ["02", "Customer Journey"],
              ["03", "Marketing Channels"],
              ["04", "Conversion Process"],
              ["05", "Automation Opportunities"],
              ["06", "Retention Systems"],
            ].map(([number, title]) => (

              <div className="card" key={title}>

                <span className="card-number">
                  {number}
                </span>

                <h3>
                  {title}
                </h3>

                <p>
                  Identify opportunities, gaps and
                  strategic improvements within the
                  marketing system.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <div className="two-column">

            <div>

              <div className="section-label">
                THE SHIFT
              </div>

              <h2 className="section-title">
                From
                <span className="green-text">
                  {" "}“What should we post?”
                </span>
              </h2>

            </div>

            <div className="card">

              <h3>
                To
              </h3>

              <p style={{
                fontSize: "28px",
                color: "var(--text)",
                fontWeight: 800,
                marginTop: "15px"
              }}>
                “How should this business grow?”
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="final-cta">

        <div className="container final-cta-content">

          <div className="section-label">
            STRATEGIC CONVERSATION
          </div>

          <h2>
            Let's understand the
            <span className="green-text">
              {" "}bigger picture.
            </span>
          </h2>

          <p>
            Bring your business challenge. We'll start
            with the problem before discussing the solution.
          </p>

          <Link
            href="/contact"
            className="btn btn-primary"
          >
            Book a Consultation →
          </Link>

        </div>

      </section>

    </>
  );
}