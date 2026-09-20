import Link from "next/link";

export default function AcademyPage() {
  return (
    <>

      <section className="hero">

        <div className="container">

          <div className="section-label">
            DIGIFY MSP ACADEMY
          </div>

          <h1>
            Don't just learn
            <span className="gradient-text">
              {" "}digital marketing.
            </span>
            <br />
            Learn how to execute it.
          </h1>

          <p className="hero-description">
            Practical digital marketing education built from
            agency experience, real campaigns and practical
            frameworks.
          </p>

          <div className="hero-actions">

            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Enquire About Batches →
            </Link>

          </div>

        </div>

      </section>


      <section className="section section-dark">

        <div className="container">

          <div className="section-heading">

            <div className="section-label">
              CURRICULUM
            </div>

            <h2 className="section-title">
              Learn the skills behind
              <span className="green-text">
                {" "}real campaigns.
              </span>
            </h2>

          </div>


          <div className="grid-3">

            {[
              [
                "01",
                "Meta Ads",
                "Campaign structure, audience strategy, creative and lead generation."
              ],
              [
                "02",
                "Google Ads",
                "Search advertising and intent-based campaign planning."
              ],
              [
                "03",
                "Full Funnel",
                "TOFU, MOFU and BOFU campaign thinking."
              ],
              [
                "04",
                "Brand Strategy",
                "Positioning, messaging and brand architecture."
              ],
              [
                "05",
                "AI Marketing",
                "Practical use of AI within modern marketing workflows."
              ],
              [
                "06",
                "Case Studies",
                "Understand how marketing decisions work in practical scenarios."
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

          <div className="section-heading">

            <div className="section-label">
              LEARNING TRACKS
            </div>

            <h2 className="section-title">
              Choose how you want
              <span className="green-text">
                {" "}to learn.
              </span>
            </h2>

          </div>


          <div className="grid-3">

            <div className="card">

              <span className="card-number">
                01
              </span>

              <h3>
                Group Batch
              </h3>

              <p>
                Cohort-based practical learning for students,
                freshers and career switchers.
              </p>

              <ul className="check-list">

                <li>Live Sessions</li>
                <li>Assignments</li>
                <li>Case Studies</li>
                <li>Doubt Clearing</li>

              </ul>

            </div>


            <div className="card">

              <span className="card-number">
                02
              </span>

              <h3>
                Elite 1-on-1
              </h3>

              <p>
                Personalized mentorship for professionals,
                freelancers and agency owners.
              </p>

              <ul className="check-list">

                <li>Personal Guidance</li>
                <li>Practical Execution</li>
                <li>Strategy Sessions</li>
                <li>Campaign Thinking</li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      <section className="final-cta">

        <div className="container final-cta-content">

          <div className="section-label">
            START LEARNING
          </div>

          <h2>
            Turn knowledge into
            <span className="green-text">
              {" "}execution.
            </span>
          </h2>

          <p>
            Enquire about the upcoming Digify MSP Academy
            learning programs.
          </p>

          <Link
            href="/contact"
            className="btn btn-primary"
          >
            Enquire Now →
          </Link>

        </div>

      </section>

    </>
  );
}