import Link from "next/link";

const cases = [
  {
    number: "01",
    industry: "REAL ESTATE",
    title: "From Attention to Qualified Enquiries",
    description:
      "A full-funnel approach connecting audience targeting, campaign messaging and conversion.",
  },
  {
    number: "02",
    industry: "HEALTHCARE",
    title: "Building Trust Before Conversion",
    description:
      "A customer journey designed around awareness, education, trust and enquiry.",
  },
  {
    number: "03",
    industry: "EDUCATION",
    title: "Turning Interest Into Admissions",
    description:
      "A structured journey connecting digital awareness with counselling and admissions.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>

      <section className="hero">

        <div className="container">

          <div className="section-label">
            CASE STUDIES
          </div>

          <h1>
            See the thinking
            <span className="gradient-text">
              {" "}behind the work.
            </span>
          </h1>

          <p className="hero-description">
            Explore how strategy, audience understanding,
            advertising and conversion thinking come together.
          </p>

        </div>

      </section>


      <section className="section section-dark">

        <div className="container">

          <div className="grid-3">

            {cases.map((item) => (

              <article
                className="card"
                key={item.number}
              >

                <span className="card-number">
                  {item.number}
                </span>

                <div
                  style={{
                    marginTop: "30px",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    color: "var(--green)",
                    fontWeight: 800
                  }}
                >
                  {item.industry}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                <div
                  style={{
                    marginTop: "25px",
                    color: "var(--green)",
                    fontWeight: 700,
                    fontSize: "14px"
                  }}
                >
                  View Case Study →
                </div>

              </article>

            ))}

          </div>

          <p
            style={{
              marginTop: "50px",
              color: "var(--text-muted)",
              fontSize: "13px"
            }}
          >
            Performance figures should be added only when
            verified case-study data is available.
          </p>

        </div>

      </section>


      <section className="final-cta">

        <div className="container final-cta-content">

          <h2>
            Want to build your
            <span className="green-text">
              {" "}next case study?
            </span>
          </h2>

          <p>
            Let's talk about your business and the challenge
            you're trying to solve.
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