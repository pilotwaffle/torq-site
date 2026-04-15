export default function BuildStory() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-torq-red/20 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 rounded-full bg-torq-red/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">

          {/* Left: Identity block */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-torq-red text-xs font-bold tracking-[0.2em] uppercase mb-4">
                The Builder
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-torq-white leading-tight mb-4">
                Built by Barry Flowers
              </h2>
              <p className="text-torq-grey text-sm leading-relaxed">
                Founder, TORQ Business Solutions.<br />
                Investor. Operator. The first user.
              </p>
            </div>

            {/* Proof stat */}
            <div className="rounded-xl border border-torq-border bg-torq-surface p-5">
              <div className="text-3xl font-black text-torq-red stat-number mb-1">$1.19M</div>
              <div className="text-xs text-torq-grey uppercase tracking-wider mb-3">V5 Portfolio — live in TORQ</div>
              <p className="text-xs text-torq-grey/70 leading-relaxed">
                Barry built TORQ AI to manage his own portfolio before it ever touched anyone else's.
                That's a trust signal no competitor can copy.
              </p>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-3">
              {[
                { year: '2024', label: 'First line of code written' },
                { year: '2025', label: 'L21–L25 governance stack shipped' },
                { year: '2026', label: 'V5 portfolio live. Early access open.' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="text-torq-red font-mono font-bold text-xs w-10 flex-shrink-0">{item.year}</span>
                  <div className="w-px h-4 bg-torq-border" />
                  <span className="text-torq-grey">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Story */}
          <div className="flex flex-col gap-6">
            <div className="prose prose-sm max-w-none">
              <p className="text-torq-grey-light text-base leading-relaxed mb-5">
                TORQ AI is me — an autonomous financial intelligence agent built by Barry Flowers,
                one person, for one purpose: institutional-grade financial intelligence for serious
                investors and operators who don't have a team of analysts behind them.
              </p>

              <p className="text-torq-grey text-sm leading-relaxed mb-5">
                The best financial minds in the world charge $300–$500/hour, work banker's hours,
                and still don't know your portfolio the way you do. I built TORQ AI to know mine
                — my $1.19M V5 portfolio, every position, every DCA rule, every risk trigger —
                before it ever touched anyone else's money. That's not a marketing claim.
                That's how it was built.
              </p>

              {/* What it can do */}
              <div className="rounded-xl border border-torq-border bg-torq-surface/60 p-6 mb-5">
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-torq-red mb-4">What TORQ AI can do</p>
                <ul className="space-y-3">
                  {[
                    'Answer financial, tax, real estate, strategy, and operations questions with your full portfolio context already loaded — no re-explaining, no starting from scratch.',
                    'Run multi-step advisory workflows that would take a junior analyst a full day.',
                    'Route every query to the right model at the right cost tier — silently, in under 1ms.',
                    'Learn from every session so the next answer is better than the last.',
                    'Export structured briefs, analyses, and reports to PDF, DOCX, Markdown, or Slack with one click.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-torq-grey">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0">
                        <path d="M2 7L5.5 10.5L12 3.5" stroke="#e8001c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-torq-grey text-sm leading-relaxed mb-2">
                TORQ AI uses large language models as tools — they power the reasoning when needed.
                But the knowledge, the context, the financial training, and the governance architecture
                are built and owned by Barry Flowers.
              </p>

              <p className="text-torq-white font-semibold text-sm">
                Not just another AI wrapper. Built from scratch, for operators who make decisions
                that matter.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-torq-border to-transparent" />
    </section>
  );
}
