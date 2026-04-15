export default function BuildStory() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-torq-red/20 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 rounded-full bg-torq-red/5 blur-3xl pointer-events-none" />

      {/* Red left border accent */}
      <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-torq-red" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Story */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-torq-red text-xs font-bold tracking-[0.2em] uppercase mb-4">
                The story behind TORQ AI
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-torq-white leading-tight mb-2">
                Built by Barry Flowers
              </h2>
              <p className="text-torq-grey text-sm leading-relaxed mb-6">
                Founder, TORQ Business Solutions &middot; Houston, TX &middot; Building since 2024
              </p>
            </div>

            <p className="text-torq-grey-light text-base leading-relaxed">
              Barry built TORQ AI to manage his own $1M+ portfolio before it ever touched anyone else&apos;s. Not a proof of concept. Not a demo. A production system running against real positions, real tax situations, and real financial decisions — built by one person with the conviction that institutional-grade advisory intelligence shouldn&apos;t require a team of analysts or a $500/hr advisor on speed dial.
            </p>

            <p className="text-torq-grey text-sm leading-relaxed">
              288,000+ lines of production code. A fine-tuned local model trained on 1,770+ real advisory conversations. A governance stack you&apos;d expect from an enterprise product. Built from scratch, for operators who make decisions that matter.
            </p>

            <p className="text-torq-white/70 text-sm leading-relaxed italic">
              TORQ AI is what Barry wished existed when he started building his portfolio. Now it&apos;s available to you.
            </p>
          </div>

          {/* Right: Stat pills */}
          <div className="flex flex-col gap-5">
            {[
              {
                stat: '1,770+',
                label: 'training conversations',
                sub: 'Fine-tuned on real advisory sessions — not generic financial data.',
              },
              {
                stat: '288K+',
                label: 'lines of production code',
                sub: 'Every governance layer, routing system, and memory pipeline built from scratch.',
              },
              {
                stat: 'His portfolio first',
                label: 'built on his own portfolio first',
                sub: "Barry's $1M+ V5 portfolio was the first live test. That's a trust signal no competitor can copy.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-torq-border bg-torq-surface p-6"
              >
                <div className="text-3xl font-black text-torq-red stat-number mb-1">{item.stat}</div>
                <div className="text-xs text-torq-grey uppercase tracking-wider mb-3">{item.label}</div>
                <p className="text-xs text-torq-grey/70 leading-relaxed">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-torq-border to-transparent" />
    </section>
  );
}
