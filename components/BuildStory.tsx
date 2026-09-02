export default function BuildStory() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-torq-red/20 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 rounded-full bg-torq-red/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-torq-red" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-torq-red text-xs font-bold tracking-[0.2em] uppercase mb-4">
                The story behind TORQ Console
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-torq-white leading-tight mb-2">
                Founder-built. Operator-tested.
              </h2>
              <p className="text-torq-grey text-sm leading-relaxed mb-6">
                Barry Flowers, Founder · TORQ Business Solutions · Austin, TX · Building since 2024
              </p>
            </div>

            <p className="text-torq-grey-light text-base leading-relaxed">
              TORQ Console was built to manage a real portfolio and real operating decisions before it ever touched anyone else&apos;s. Not a proof of concept. A production workbench running against live positions, tax context, documents, and execution — built by one operator who needed institutional-grade advisory without a $500/hr bench on speed dial.
            </p>

            <p className="text-torq-grey text-sm leading-relaxed">
              v0.80 is the current line: Prince Flowers as the lead advisor, an 8,381-example fine-tune for local identity, L17–L28 governance, L27 cost routing, and memory that compounds across sessions. Built from scratch for operators who make decisions that matter.
            </p>

            <p className="text-torq-white/70 text-sm leading-relaxed italic">
              TORQ Console is the system that didn&apos;t exist when the work started. Now it&apos;s available to you.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {[
              {
                stat: '8,381',
                label: 'training examples',
                sub: 'Prince Flowers / Qwen3-8B identity trained on real advisory, market, document, draft, and run work — not generic finance text.',
              },
              {
                stat: 'L17–L28',
                label: 'adaptive intelligence stack',
                sub: 'Enforcement, context, decision memory, risk, DefendSwarm, model routing, and an experience engine that scores live outcomes.',
              },
              {
                stat: 'v0.80',
                label: 'production workbench',
                sub: 'Structured canvases own the center. Chat is the fallback. Every high-stakes path is risk-first.',
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

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-torq-border to-transparent" />
    </section>
  );
}
