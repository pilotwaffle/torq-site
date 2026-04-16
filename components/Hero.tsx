'use client';

import { ArrowRight, Play } from 'lucide-react';

// Simulated terminal/console UI element
const ConsoleMockup = () => (
  <div className="relative w-full max-w-2xl mx-auto">
    {/* Glow behind mockup */}
    <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-torq-red rounded-3xl scale-90 translate-y-4" />

    {/* Window chrome */}
    <div className="rounded-xl border border-torq-border bg-torq-surface overflow-hidden shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-torq-border bg-torq-darker">
        <div className="w-3 h-3 rounded-full bg-torq-red opacity-80" />
        <div className="w-3 h-3 rounded-full bg-yellow-600 opacity-50" />
        <div className="w-3 h-3 rounded-full bg-green-700 opacity-50" />
        <span className="ml-3 text-xs font-mono text-torq-grey tracking-wider">
          TORQ CONSOLE — Advisory Desk
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="text-[10px] px-2 py-0.5 rounded bg-torq-red/20 text-torq-red font-mono tracking-wider border border-torq-red/30">
            LIVE
          </span>
        </div>
      </div>

      {/* Console content */}
      <div className="p-5 font-mono text-sm space-y-3 min-h-[280px]">
        {/* User query */}
        <div className="flex gap-3">
          <span className="text-torq-red shrink-0">›</span>
          <span className="text-torq-grey-light">
            What&apos;s the risk profile on my MSTR position given current BTC volatility?
          </span>
        </div>

        {/* System routing indicator */}
        <div className="flex gap-3 items-center ml-4">
          <div className="flex items-center gap-2 text-xs text-torq-grey">
            <div className="w-1.5 h-1.5 rounded-full bg-torq-red animate-pulse" />
            Routing → Market Intelligence + Advisory Desk
          </div>
        </div>

        {/* Prince response */}
        <div className="ml-4 mt-2 border-l-2 border-torq-red/40 pl-4 space-y-2">
          <p className="text-torq-white font-sans text-[13px] leading-relaxed">
            <span className="text-torq-red font-semibold">TORQ AI</span>
            <span className="text-torq-grey text-xs ml-2">— AI Advisor</span>
          </p>
          <p className="text-torq-grey-light font-sans text-[13px] leading-relaxed">
            Strategy holds 780,897 BTC at an average cost of $75,577 — total acquisition cost $59.02B. At current BTC levels the position is roughly breakeven on cost basis with significant convexity to the upside. Your 1,400 shares carry leveraged BTC exposure with amplified downside in a drawdown. 30-day IV remains elevated. Position is within your 20% capital cap and your $454 exit target remains the defined offramp. Risk: Elevated but intentional.
          </p>
          <div className="flex gap-3 mt-3 flex-wrap">
            <span className="px-2.5 py-1 text-xs rounded border border-torq-border text-torq-grey bg-torq-muted/50">
              Position: 1,400 shares
            </span>
            <span className="px-2.5 py-1 text-xs rounded border border-green-900 text-green-400 bg-green-950/30">
              Exit target: $454
            </span>
            <span className="px-2.5 py-1 text-xs rounded border border-yellow-900 text-yellow-400 bg-yellow-950/30">
              Risk: Elevated
            </span>
          </div>
        </div>

        {/* Cursor prompt */}
        <div className="flex gap-3 mt-4">
          <span className="text-torq-red shrink-0">›</span>
          <span className="text-torq-grey opacity-40">
            Ask anything
            <span className="cursor-blink ml-0.5 text-torq-red opacity-80">|</span>
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-5 py-2 border-t border-torq-border bg-torq-darker text-[10px] text-torq-grey font-mono">
        <div className="flex items-center gap-4">
          <span>6 WORKSPACES</span>
          <span className="text-torq-border">|</span>
          <span>TORQ CONSOLE v0.29</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400">CONNECTED</span>
        </div>
      </div>
    </div>
  </div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Radial glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      {/* Red accent orb - top left */}
      <div className="absolute top-32 left-16 w-64 h-64 rounded-full bg-torq-red/5 blur-3xl pointer-events-none" />
      {/* Red accent orb - bottom right */}
      <div className="absolute bottom-16 right-16 w-96 h-96 rounded-full bg-torq-red/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-8">
            {/* Eyebrow */}
            <p className="text-torq-red text-xs font-bold tracking-[0.2em] uppercase mb-2">Meet TORQ Console</p>

            {/* Headline */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-torq-white">
                Governed intelligence for business, finance, and strategic decisions
              </h1>
            </div>

            {/* Subline */}
            <p className="text-lg text-torq-grey leading-relaxed max-w-xl">
              TORQ Console turns advisory thinking into a governed system that processes more data, retains more context, and executes with consistency across financial, operational, and strategic decisions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="mailto:Admin@TorqBusinessSolutions.com?subject=TORQ Console Free Trial Request&body=Hi, I'd like to start my free 48-hour trial of TORQ Console. Please send me access details."
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-torq-red hover:bg-torq-red-bright text-white font-bold text-base transition-all duration-200 glow-red hover:scale-[1.02] active:scale-[0.98]"
              >
                Start Free — 48 Hours
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-torq-border hover:border-torq-muted text-torq-grey-light hover:text-torq-white font-semibold text-base transition-all duration-200 bg-torq-surface/50 hover:bg-torq-surface"
              >
                <Play size={16} className="text-torq-red" />
                See TORQ AI in action
              </a>
            </div>

            {/* Trust signal */}
            <p className="text-xs text-torq-grey flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L8.8 5.2L13.5 5.6L10 8.7L11 13.3L7 10.9L3 13.3L4 8.7L0.5 5.6L5.2 5.2L7 1Z" fill="#e8001c" fillOpacity="0.7" />
              </svg>
              No credit card required &middot; Cancel anytime &middot; Built on your portfolio, not a template
            </p>
          </div>

          {/* Right: Console mockup */}
          <div className="hidden lg:flex justify-center">
            <ConsoleMockup />
          </div>
        </div>

        {/* Mobile mockup below */}
        <div className="lg:hidden mt-12">
          <ConsoleMockup />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-torq-black to-transparent pointer-events-none" />
    </section>
  );
}
