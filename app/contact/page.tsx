export default function ContactPage() {
  return (
    <>

      <section className="hero">

        <div className="container">

          <div className="section-label">
            GET IN TOUCH
          </div>

          <h1>
            Let's talk about
            <span className="gradient-text">
              {" "}what's next.
            </span>
          </h1>

          <p className="hero-description">
            Tell us about your business, your challenge and
            where you want to go next.
          </p>

        </div>

      </section>


      <section className="section section-dark">

        <div className="container">

          <div className="two-column">

            {/* CONTACT INFO */}

            <div>

              <div className="section-label">
                CONTACT DIGIFY MSP
              </div>

              <h2 className="section-title">
                Start with a
                <span className="green-text">
                  {" "}conversation.
                </span>
              </h2>


              <div
                style={{
                  marginTop: "40px",
                  display: "grid",
                  gap: "20px"
                }}
              >

                <div className="card">

                  <div className="card-number">
                    PHONE
                  </div>

                  <h3>
                    +91 90436 32525
                  </h3>

                  <a
                    href="tel:+919043632525"
                    className="green-text"
                  >
                    Call Now →
                  </a>

                </div>


                <div className="card">

                  <div className="card-number">
                    WHATSAPP
                  </div>

                  <h3>
                    Start a WhatsApp conversation
                  </h3>

                  <a
                    href="https://wa.me/919043632525"
                    className="green-text"
                  >
                    WhatsApp Us →
                  </a>

                </div>


                <div className="card">

                  <div className="card-number">
                    EMAIL
                  </div>

                  <h3>
                    hello.digifymsp@gmail.com
                  </h3>

                  <a
                    href="mailto:hello.digifymsp@gmail.com"
                    className="green-text"
                  >
                    Send Email →
                  </a>

                </div>

              </div>

            </div>


            {/* FORM */}

            <div className="card">

              <div className="section-label">
                SEND AN ENQUIRY
              </div>

              <h3
                style={{
                  fontSize: "30px",
                  marginTop: "15px"
                }}
              >
                Tell us about your business.
              </h3>


              <form
                style={{
                  marginTop: "30px",
                  display: "grid",
                  gap: "18px"
                }}
              >

                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-input"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="form-input"
                />

                <select className="form-input">

                  <option value="">
                    What are you looking for?
                  </option>

                  <option>
                    Agency Services
                  </option>

                  <option>
                    Academy
                  </option>

                  <option>
                    Consulting
                  </option>

                  <option>
                    Other
                  </option>

                </select>


                <textarea
                  placeholder="Tell us about your business..."
                  rows={6}
                  className="form-input"
                />


                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Send Enquiry →
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}