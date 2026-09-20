"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="nav-container">

        {/* LOGO */}

        <Link
          href="/"
          className="nav-logo"
          onClick={closeMenu}
        >
          <Image
            src="/logo.png"
            alt="Digify MSP"
            width={100}
            height={50}
            priority
          />
        </Link>


        {/* DESKTOP NAVIGATION */}

        <nav className="desktop-nav">

          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link href="/agency" className="nav-link">
            Agency
          </Link>

          <Link href="/academy" className="nav-link">
            Academy
          </Link>

          <Link href="/consulting" className="nav-link">
            Consulting
          </Link>

          <Link href="/case-studies" className="nav-link">
            Case Studies
          </Link>

          <Link href="/about" className="nav-link">
            About
          </Link>

        </nav>


        {/* RIGHT SIDE */}

        <div className="nav-actions">

          <ThemeToggle />

          <Link
            href="/contact"
            className="nav-cta"
          >
            Let's Talk →
          </Link>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>


      {/* MOBILE MENU */}

      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >

        <Link href="/" onClick={closeMenu}>
          Home
        </Link>

        <Link href="/agency" onClick={closeMenu}>
          Agency
        </Link>

        <Link href="/academy" onClick={closeMenu}>
          Academy
        </Link>

        <Link href="/consulting" onClick={closeMenu}>
          Consulting
        </Link>

        <Link href="/case-studies" onClick={closeMenu}>
          Case Studies
        </Link>

        <Link href="/about" onClick={closeMenu}>
          About
        </Link>

        <Link
          href="/contact"
          className="mobile-menu-cta"
          onClick={closeMenu}
        >
          Start a Conversation →
        </Link>

      </div>

    </header>
  );
}