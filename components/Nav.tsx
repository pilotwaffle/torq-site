'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const TorqLogo = () => (
  <div className="flex items-center gap-2">
    <Image
      src="/torq-logo.jpg"
      alt="TORQ Console"
      width={44}
      height={44}
      className="rounded-full"
      priority
    />
  </div>
);

const navLinks = [
  { label: 'System', href: '#system' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#who-its-for' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-torq-black/95 backdrop-blur-md border-b border-torq-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 hover:opacity-90 transition-opacity">
          <TorqLogo />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-torq-grey hover:text-torq-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#pricing"
            className="text-sm font-semibold px-5 py-2.5 rounded-lg bg-torq-red hover:bg-torq-red-bright text-white transition-all duration-200 glow-red-sm hover:glow-red"
          >
            Start Free Trial
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-torq-grey hover:text-torq-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-torq-surface border-b border-torq-border">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-torq-grey hover:text-torq-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#pricing"
                className="inline-block text-sm font-semibold px-5 py-2.5 rounded-lg bg-torq-red hover:bg-torq-red-bright text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Start Free Trial
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
