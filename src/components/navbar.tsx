"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Impact", href: "#impact" },
  { label: "Services", href: "#services" },
  { label: "Builds", href: "#builds" },
  { label: "Why Me", href: "#why-me" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const shadow = useTransform(scrollY, [0, 100], ["none", "0 1px 12px rgba(0,0,0,0.08)"]);

  return (
    <motion.nav
      style={{
        boxShadow: shadow,
      }}
      className="fixed top-0 right-0 left-0 z-50"
    >
      <motion.div
        className="absolute inset-0 border-b border-transparent bg-white/80 backdrop-blur-md"
        style={{ opacity: bgOpacity, borderColor: "rgba(226,232,240,0.5)" }}
      />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-bold tracking-tight text-primary">
          Deep<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
          >
            Work With Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-primary"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-primary"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-primary"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={
          mobileOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative overflow-hidden border-b border-border bg-white/95 backdrop-blur-md md:hidden"
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-lg bg-accent px-5 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-accent-dark"
          >
            Work With Me
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
