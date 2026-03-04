"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Menu",     href: "#menu" },
    { label: "Gallery",  href: "#gallery" },
    { label: "About",    href: "#about" },
    { label: "Location", href: "#location" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(13,8,6,0.97)" : "rgba(13,8,6,0.78)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(212,175,55,0.22)",
        transition: "background-color 0.35s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center" style={{ height: "64px" }}>

          {/* Logo */}
          <a href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 900,
                color: "#F5E6C8",
                fontSize: "1rem",
                letterSpacing: "0.14em",
                display: "block",
                lineHeight: 1.1,
              }}
            >
              SZECHUAN ROYALE
            </span>
            <span
              style={{
                fontFamily: "'Noto Serif SC', serif",
                color: "#D4AF37",
                fontSize: "0.55rem",
                letterSpacing: "0.55em",
                display: "block",
                lineHeight: 1.6,
              }}
            >
              四川皇家
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center" style={{ gap: "2rem" }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
            <a
              href="https://order.mealkeyway.com/merchant/697a4f754551584c38385230584f427631595a526e413d3d/main"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-crimson"
              style={{ padding: "0.45rem 1.25rem", fontSize: "0.7rem" }}
            >
              Order Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{ color: "#8A7968", background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div style={{ backgroundColor: "#0d0806", borderTop: "1px solid rgba(212,175,55,0.15)" }}>
          <div className="px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="nav-link block py-3"
                style={{ borderBottom: "1px solid rgba(212,175,55,0.08)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://order.mealkeyway.com/merchant/697a4f754551584c38385230584f427631595a526e413d3d/main"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-crimson block text-center mt-4"
              style={{ fontSize: "0.8rem" }}
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
