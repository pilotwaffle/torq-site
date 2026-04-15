import { Check, Zap, AlertCircle } from 'lucide-react';

const baseFeatures = [
  'All 5 workspace canvases (Advisory, Market, Docs, Draft, Runs)',
  'Prince AI Advisor — fine-tuned financial intelligence',
  'Persistent memory across all sessions',
  'Real-time market data + live web search',
  'PDF, DOCX, and Markdown export',
  'IRS tax knowledge + entity structure guidance',
  'L25 enterprise risk governance',
  'Up to 300 queries/month included',
  'Priority support',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-torq-darker relative overflow-hidden">
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-torq-red/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-torq-red/8 blur-3xl pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-torq-red text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-torq-white mb-6 leading-tight">
            Simple to start.
            <br />
            <span className="text-torq-grey font-light">Scales with your usage.</span>
          </h2>
          <p className="text-torq-grey max-w-lg mx-auto text-lg">
            $50/month gets you everything. Heavy users pay a fair overage —
            we don't penalize light users to subsidize power users.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 items-start">

          {/* Base plan */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 rounded-2xl border-2 border-torq-red/40 glow-red pointer-events-none" />
            <div className="relative bg-torq-surface border border-torq-red/20 rounded-2xl p-8">

              {/* Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-torq-red/15 border border-torq-red/30 text-torq-red text-[10px] font-bold tracking-widest uppercase w-fit mb-6">
                <Zap size={10} />
                Early Access
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-6xl font-black text-torq-white stat-number">$50</span>
                  <div className="flex flex-col">
                    <span className="text-torq-grey text-sm font-medium">/month</span>
                    <span className="text-torq-grey text-xs">base plan</span>
                  </div>
                </div>
                <p className="text-torq-grey text-sm mt-2">Includes up to 300 queries/month</p>
              </div>

              {/* Free trial callout */}
              <div className="flex items-center gap-2 mb-6 p-3 rounded-lg bg-torq-red/10 border border-torq-red/20">
                <div className="w-2 h-2 rounded-full bg-torq-red animate-pulse flex-shrink-0" />
                <p className="text-sm font-semibold text-torq-red">
                  Start with 48 hours FREE — no credit card required
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 mb-8">
                {baseFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-torq-red/20 border border-torq-red/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-torq-red" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-torq-grey-light leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="mailto:Admin@TorqBusinessSolutions.com?subject=TORQ Console Free Trial Request&body=Hi, I'd like to start my free 48-hour trial of TORQ Console. Please send me access details."
                className="block w-full text-center py-4 px-8 rounded-xl bg-torq-red hover:bg-torq-red-bright text-white font-bold text-lg transition-all duration-200 glow-red hover:scale-[1.01] active:scale-[0.99]"
              >
                Start Free Trial
              </a>
            </div>
          </div>

          {/* Usage & overage info */}
          <div className="flex flex-col gap-5">

            {/* Overage card */}
            <div className="rounded-2xl bg-torq-surface border border-torq-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle size={16} className="text-torq-red" />
                <h3 className="text-torq-white font-bold text-sm tracking-wide uppercase">Usage & Overages</h3>
              </div>
              <p className="text-torq-grey text-sm leading-relaxed mb-4">
                The $50 base plan covers up to <span className="text-torq-white font-semibold">300 queries/month</span> —
                enough for most business owners and investors.
              </p>
              <p className="text-torq-grey text-sm leading-relaxed mb-4">
                Heavy users (daily power users, large document analysis, multi-agent runs)
                consume more AI compute. Overage pricing will be billed transparently based
                on actual usage above the base threshold.
              </p>
              <div className="p-3 rounded-lg bg-torq-black/60 border border-torq-border">
                <p className="text-xs text-torq-grey leading-relaxed">
                  <span className="text-torq-white font-semibold">Overage rates TBD.</span> We're
                  collecting real usage data now to set fair rates. Early adopters will be
                  notified before any overage billing begins — never surprised.
                </p>
              </div>
            </div>

            {/* Pro plan teaser */}
            <div className="rounded-2xl bg-torq-surface border border-torq-border p-6 opacity-80">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-torq-white font-bold text-sm tracking-wide uppercase">Pro Plan</h3>
                <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-full border border-torq-border text-torq-grey">Coming Soon</span>
              </div>
              <p className="text-torq-grey text-sm leading-relaxed mb-4">
                Unlimited queries, team seats, API access, custom memory,
                and dedicated support. Pricing set once real usage data is in.
              </p>
              <a
                href="mailto:Admin@TorqBusinessSolutions.com?subject=TORQ Console Pro Waitlist&body=Hi, I'd like to join the Pro plan waitlist for TORQ Console. Please keep me updated on pricing and availability."
                className="block w-full text-center py-2.5 px-6 rounded-lg border border-torq-border text-torq-grey hover:text-torq-white hover:border-torq-red/40 text-sm font-semibold transition-all duration-200"
              >
                Join Pro Waitlist
              </a>
            </div>

            {/* Commitment strip */}
            <div className="rounded-2xl bg-torq-surface border border-torq-border p-5">
              <ul className="space-y-2">
                {[
                  'No credit card for trial',
                  'Cancel anytime',
                  'Full access from day one',
                  'You\'ll always know your costs upfront',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-torq-grey">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                      <path d="M2 7L5.5 10.5L12 3.5" stroke="#e8001c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-torq-border to-transparent" />
    </section>
  );
}
