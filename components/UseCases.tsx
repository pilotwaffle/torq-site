import {
  TrendingUp,
  BarChart2,
  Briefcase,
  FileText,
  Calculator,
  Shield,
} from 'lucide-react';

const useCases = [
  {
    icon: <TrendingUp size={22} className="text-torq-red" />,
    title: 'Investment Planning',
    description:
      'Build a portfolio strategy calibrated to your risk tolerance, time horizon, and goals — designed to rival the S&P 500 and the top 1% of advisors.',
    tag: 'Portfolio',
  },
  {
    icon: <BarChart2 size={22} className="text-torq-red" />,
    title: 'Market Intelligence',
    description:
      'Real-time price data, technical signals, sentiment analysis, and live web search. Know what\'s moving and why — before you trade.',
    tag: 'Markets',
  },
  {
    icon: <Briefcase size={22} className="text-torq-red" />,
    title: 'Business Advisory',
    description:
      'Strategic briefs, competitive analysis, growth planning, and executive summaries — written with the clarity of a McKinsey partner.',
    tag: 'Strategy',
  },
  {
    icon: <FileText size={22} className="text-torq-red" />,
    title: 'Document Review',
    description:
      'Upload contracts, financials, or estate documents. TORQ flags risk clauses, summarizes terms, and surfaces what your lawyer would charge $400/hr to find.',
    tag: 'Legal & Finance',
  },
  {
    icon: <Calculator size={22} className="text-torq-red" />,
    title: 'Accounting & Tax',
    description:
      'IRS deduction mapping, entity structure analysis, Section 179 guidance, and tax strategy — grounded in current tax law, not generic ChatGPT guesses.',
    tag: 'Tax',
  },
  {
    icon: <Shield size={22} className="text-torq-red" />,
    title: 'Estate Planning',
    description:
      'Asset protection frameworks, succession planning, wealth transfer strategies. Preserve what you\'ve built and pass it on with intention.',
    tag: 'Wealth',
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-28 bg-torq-darker relative overflow-hidden">
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-torq-border to-transparent" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-torq-red text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Use Cases
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-torq-white mb-6 leading-tight">
            One console.
            <br />
            <span className="text-torq-grey font-light">Every decision you face.</span>
          </h2>
          <p className="text-torq-grey max-w-xl mx-auto text-lg leading-relaxed">
            TORQ routes your query to the right intelligence workspace automatically —
            no tab switching, no tool juggling.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="group relative card-shine rounded-xl border border-torq-border hover:border-torq-red/40 bg-torq-surface/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-torq-surface cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-torq-red/0 group-hover:bg-torq-red/[0.03] transition-colors duration-300" />

              <div className="relative z-10">
                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-torq-red/10 border border-torq-red/20 flex items-center justify-center group-hover:bg-torq-red/15 transition-colors duration-300">
                    {uc.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-torq-grey border border-torq-border rounded px-2 py-0.5">
                    {uc.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-torq-white mb-3 group-hover:text-white transition-colors">
                  {uc.title}
                </h3>
                <p className="text-sm text-torq-grey leading-relaxed">
                  {uc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-torq-border to-transparent" />
    </section>
  );
}
