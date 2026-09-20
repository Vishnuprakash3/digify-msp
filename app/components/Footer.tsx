import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* BRAND */}

          <div className="footer-brand">

            <Image
              src="/digify-logo.png"
              alt="Digify MSP"
              width={180}
              height={80}
            />

            <p>
              Performance marketing, practical education and
              strategic consulting — connected into one
              growth ecosystem.
            </p>

            <div className="footer-tagline">
              AGENCY · ACADEMY · CONSULTING
            </div>

          </div>


          {/* EXPLORE */}

          <div>

            <h4>Explore</h4>

            <div className="footer-links">

              <Link href="/agency">
                Agency
              </Link>

              <Link href="/academy">
                Academy
              </Link>

              <Link href="/consulting">
                Consulting
              </Link>

              <Link href="/case-studies">
                Case Studies
              </Link>

              <Link href="/about">
                About
              </Link>

            </div>

          </div>


          {/* SERVICES */}

          <div>

            <h4>Services</h4>

            <div className="footer-links">

              <span>Meta Advertising</span>

              <span>Google Advertising</span>

              <span>Lead Generation</span>

              <span>AI Marketing</span>

              <span>Growth Strategy</span>

            </div>

          </div>


          {/* CONTACT */}

          <div>

            <h4>Connect</h4>

            <div className="footer-links">

              <a href="tel:+919043632525">
                +91 90436 32525
              </a>

              <a href="tel:+919876543210">
                +91 98765 43210
              </a>

              <a href="mailto:hello.digifymsp@gmail.com">
                hello.digifymsp@gmail.com
              </a>

              <span>
                India · UAE · UK
              </span>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Digify MSP.
            All rights reserved.
          </span>

          <span>
            Built for Growth.
          </span>

        </div>

      </div>

    </footer>
  );
}