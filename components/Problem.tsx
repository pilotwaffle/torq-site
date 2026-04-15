import { DollarSign, Database, AlertCircle } from 'lucide-react';

const problems = [
  {
    icon: <DollarSign size={28} className="text-torq-red" />,
    title: 'You\'re paying $300/hr for advice you need daily',
    description:
      'Top financial advisors and consultants bill $250–$500/hr — and they\'re not available at 11pm when you\'re making the call. Your business doesn\'t wait for office hours.',
    stat: '$300',
    statLabel: 'avg advisor hourly rate',
  },
  {
    icon: <Database size={28} className="text-torq-red" />,
    title: 'Your data lives in 12 different places',
    description:
      'Brokerage accounts. Bank portals. Spreadsheets. PDFs. Google Docs. No single view means no single truth — and you\'re the one stitching it all together manually.',
    stat: '12+',
    statLabel: 'disconnected data sources',
  },
  {
    icon: <AlertCircle size={28} className="text-torq-red" />,
    title: 'Generic AI gives generic answers — your business isn\'t generic',
    description:
      'ChatGPT doesn\'t know your portfolio, your risk tolerance, your tax situation, or your five-year plan. It gives you the same answer it gives everyone else. That\'s not intelligence — that\'s autocomplete.',
    stat: '0%',
    statLabel: 'context retained session-to-session',
  },
];

export default function Problem() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Subtle noise/texture */}
      <div className="absolute inset-0 opacity-30 bg-radial-glow-center pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-torq-red text-xs font-bold tracking-[0.2em] uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-torq-white leading-tight">
            The old model is broken.
            <br />
            <span className="text-torq-grey font-light">You deserve better.</span>
          </h2>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="relative group card-shine border-gradient border-gradient-hover rounded-xl p-8 bg-torq-surface transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number indicator */}
              <div className="absolute top-6 right-6 text-5xl font-black text-torq-border/60 leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-torq-red/10 border border-torq-red/20 flex items-center justify-center mb-6">
                {problem.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-torq-white mb-4 leading-snug pr-8">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-torq-grey leading-relaxed mb-6">
                {problem.description}
              </p>

              {/* Stat */}
              <div className="pt-5 border-t border-torq-border">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-torq-red stat-number">
                    {problem.stat}
                  </span>
                  <span className="text-xs text-torq-grey uppercase tracking-wider">
                    {problem.statLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
