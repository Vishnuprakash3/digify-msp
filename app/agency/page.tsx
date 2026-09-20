import Link from "next/link";

export default function AgencyPage() {
  return (
    <>

      <section className="hero">

        <div className="container">

          <div className="section-label">
            DIGIFY MSP AGENCY
          </div>

          <h1>
            Marketing that moves
            <span className="gradient-text">
              {" "}business forward.
            </span>
          </h1>

          <p className="hero-description">
            We build performance marketing systems designed
            around your audience, offer, customer journey and
            business objectives.
          </p>

          <div className="hero-actions">

            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Talk About Your Business →
            </Link>

            <Link
              href="/case-studies"
              className="btn btn-secondary"
            >
              View Case Studies
            </Link>

          </div>

        </div>

      </section>


      <section className="section section-dark">

        <div className="container">

          <div className="section-heading">

            <div className="section-label">
              WHAT WE DO
            </div>

            <h2 className="section-title">
              From attention
              <span className="green-text">
                {" "}to conversion.
              </span>
            </h2>

          </div>


          <div className="grid-3">

            {[
              [
                "01",
                "Meta Advertising",
                "Campaign strategy, audience targeting, creative testing and lead generation."
              ],
              [
                "02",
                "Google Advertising",
                "Intent-based search campaigns designed to capture active demand."
              ],
              [
                "03",
                "Lead Generation",
                "Build campaigns and journeys that turn attention into qualified enquiries."
              ],
              [
                "04",
                "Conversion Systems",
                "Landing pages, messaging and customer journeys designed around conversion."
              ],
              [
                "05",
                "AI Workflows",
                "Use AI to streamline repetitive marketing and customer-response processes."
              ],
              [
                "06",
                "Growth Strategy",
                "Connect positioning, traffic, conversion and retention into a larger system."
              ],
            ].map(([number, title, description]) => (

              <div className="card" key={title}>

                <span className="card-number">
                  {number}
                </span>

                <h3>
                  {title}
                </h3>

                <p>
                  {description}
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
                THE JOURNEY
              </div>

              <h2 className="section-title">
                Traffic is not the
                <span className="green-text">
                  {" "}finish line.
                </span>
              </h2>

            </div>


            <div className="card">

              <ul className="check-list">

                <li>Audience</li>
                <li>Positioning</li>
                <li>Advertisement</li>
                <li>Landing Page</li>
                <li>Lead</li>
                <li>Follow-up</li>
                <li>Conversion</li>
                <li>Retention</li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      <section className="final-cta">

        <div className="container final-cta-content">

          <div className="section-label">
            LET'S BUILD
          </div>

          <h2>
            Ready to turn marketing
            <span className="green-text">
              {" "}into a system?
            </span>
          </h2>

          <p>
            Tell us about your business and where you want
            to go next.
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