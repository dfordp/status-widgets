"use client";

import { useState, useEffect } from "react";

type NavLink = 
  | { label: string; href: string }
  | { label: string; scrollTo: string };

const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Demo", scrollTo: "demo" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 md:pt-5">
      <nav
        className="w-full max-w-5xl rounded-2xl transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "oklch(0.1822 0 0 / 0.6)"
            : "oklch(0.2046 0 0 / 0.95)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(8px)",
          border: scrolled
            ? "1px solid oklch(0.2809 0 0 / 0.3)"
            : "1px solid oklch(0.2809 0 0 / 0.8)",
          boxShadow: scrolled
            ? "none"
            : "0 4px 32px oklch(0 0 0 / 0.4)",
        }}
      >
        <div className="flex md:grid md:grid-cols-12 items-center justify-between px-5 md:px-7 h-14 md:h-16">
          {/* Logo */}
          <div className="md:col-span-3 flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor: "oklch(0.8003 0.1821 151.7110)",
                boxShadow: "0 0 12px oklch(0.8003 0.1821 151.7110 / 0.35)",
              }}
            >
              <div className="w-2 h-2 rounded-sm bg-card" />
            </div>
            <span className="font-semibold text-foreground tracking-tight text-sm">
              Status Widgets
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex md:col-span-6 items-center justify-center gap-7">
            {navLinks.map((link) => {
              if ('scrollTo' in link) {
                return (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.scrollTo)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 font-medium bg-none border-none cursor-pointer"
                  >
                    {link.label}
                  </button>
                );
              } else {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 font-medium"
                  >
                    {link.label}
                  </a>
                );
              }
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:col-span-3 justify-end">
            <button
              onClick={scrollToWaitlist}
              className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                backgroundColor: "oklch(0.8003 0.1821 151.7110)",
                color: "oklch(0.1822 0 0)",
                boxShadow: "0 0 18px oklch(0.8003 0.1821 151.7110 / 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "brightness(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className="w-5 h-0.5 rounded-full block transition-all duration-200 bg-foreground"
              style={{
                transform: mobileOpen
                  ? "rotate(45deg) translateY(8px)"
                  : "none",
              }}
            />
            <span
              className="w-5 h-0.5 rounded-full block transition-all duration-200 bg-foreground"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="w-5 h-0.5 rounded-full block transition-all duration-200 bg-foreground"
              style={{
                transform: mobileOpen
                  ? "rotate(-45deg) translateY(-8px)"
                  : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div
            className="md:hidden border-t px-5 py-4 flex flex-col gap-3"
            style={{ borderColor: "oklch(0.2809 0 0 / 0.6)" }}
          >
            {navLinks.map((link) => {
              if ('scrollTo' in link) {
                return (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.scrollTo)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium py-1 bg-none border-none cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                );
              } else {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium py-1"
                  >
                    {link.label}
                  </a>
                );
              }
            })}
            <button
              onClick={scrollToWaitlist}
              className="mt-1 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                backgroundColor: "oklch(0.8003 0.1821 151.7110)",
                color: "oklch(0.1822 0 0)",
              }}
            >
              Join Waitlist
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
