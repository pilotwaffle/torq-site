import { Building2, TrendingUp, Users, LineChart } from 'lucide-react';

const personas = [
  {
    icon: <TrendingUp size={24} className="text-torq-red" />,
    headline: 'The individual investor managing real money',
    para1: "You're not a hobbyist. You're managing a real portfolio — maybe $100K, maybe $1M+ — with a strategy, a timeline, and tax implications that matter. You've outgrown generic robo-advisors and you can't justify $500/hr for every question you need answered.",
    para2: "TORQ AI knows your positions, your DCA schedule, your cost basis, your risk tolerance, and your exit targets before you finish typing. It doesn't give you the answer it gives everyone else. It gives you the answer for your situation.",
    bullets: [
      'Portfolio risk analysis with your actual holdings loaded',
      'Live market data and technical signal interpretation',
      'Position sizing, DCA logic, rebalancing — grounded in your strategy',
    ],
    badge: 'TORQ AI knows your positions before you finish typing',
  },
  {
    icon: <Building2 size={24} className="text-torq-red" />,
    headline: 'The business owner wearing 12 hats',
    para1: "You're running operations, managing cash flow, reviewing contracts, and trying to build a long-term strategy — simultaneously. You can't afford a full-time CFO, legal team, and strategy consultant. But you're making decisions that require all three.",
    para2: "TORQ routes your question to the right intelligence layer automatically. Legal question? Document Review canvas. Cash flow analysis? Advisory Desk. Competitive brief for your board? Execution Run, delivered in minutes.",
    bullets: [
      'Strategic briefs without the consulting bill',
      'Contract and document review that flags what matters',
      'Tax guidance grounded in current IRS law, not last year\'s training data',
    ],
    badge: 'One console. Every decision you face.',
  },
  {
    icon: <LineChart size={24} className="text-torq-red" />,
    headline: 'The operator or CFO who needs real-time clarity',
    para1: "You need a single view across market conditions, P&L, competitor moves, and regulatory landscape — simultaneously. You need it fast and you need it in a format you can act on. Not a chat thread you have to reformat before sending to anyone.",
    para2: "TORQ's multi-agent Execution Runs handle complex, multi-source research workflows. Every output is structured, export-ready, and built for a professional audience. PDF for your attorney. DOCX for your board. Slack for your team.",
    bullets: [
      'Multi-agent execution for complex, multi-step analysis',
      'Outputs formatted for real distribution — not just for you to read',
      'Full audit trail on every decision and governance event',
    ],
    badge: 'Structured output, not a chat thread',
  },
  {
    icon: <Users size={24} className="text-torq-red" />,
    headline: 'The wealth manager ready to scale',
    para1: "You're already good at what you do. TORQ makes you faster. Pull real-time data mid-client-call. Draft estate planning summaries in seconds. Prep a portfolio brief before the meeting instead of during it.",
    para2: 'Every session remembers your client context — no re-entering positions, no re-explaining the family structure.',
    bullets: [
      'Client briefs and portfolio summaries at speed',
      'Estate and succession planning frameworks on demand',
      'Document review for client financial packages',
    ],
    badge: 'Every session builds on the last',
  },
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-28 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-torq-red/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-torq-red/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-torq-red text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Who It&apos;s For
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-torq-white mb-6 leading-tight">
            Built for operators who make decisions that matter
          </h2>
          <p className="text-torq-grey max-w-2xl mx-auto text-lg leading-relaxed">
            TORQ AI was built by one investor-operator, for other investor-operators. If you&apos;ve ever wished you had a senior analyst, a tax strategist, and a financial advisor in the same room at 11pm — this is for you.
          </p>
        </div>

        {/* Persona grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {personas.map((persona, i) => (
            <div
              key={i}
              className="group card-shine relative border border-torq-border hover:border-torq-red/40 rounded-xl bg-torq-surface/60 hover:bg-torq-surface p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-torq-red/0 group-hover:bg-torq-red/[0.02] transition-colors duration-300" />

              <div className="relative z-10 flex flex-col flex-1">
                {/* Icon + Role */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-torq-red/10 border border-torq-red/20 flex items-center justify-center flex-shrink-0 group-hover:bg-torq-red/15 transition-colors">
                    {persona.icon}
                  </div>
                  <h3 className="text-lg font-black text-torq-white">
                    {persona.headline}
                  </h3>
                </div>

                {/* Paragraphs */}
                <p className="text-torq-grey text-sm leading-relaxed mb-4">
                  {persona.para1}
                </p>
                <p className="text-torq-grey-light text-sm leading-relaxed mb-5">
                  {persona.para2}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-torq-red/30 via-torq-red/10 to-transparent mb-5" />

                {/* Bullets */}
                <ul className="space-y-2 mb-6 flex-1">
                  {persona.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-torq-grey">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0">
                        <path d="M2 7L5.5 10.5L12 3.5" stroke="#e8001c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Signal badge */}
                <div className="mt-auto">
                  <span className="inline-block px-3 py-1.5 text-[11px] font-semibold rounded-full border border-torq-red/30 bg-torq-red/10 text-torq-red tracking-wide">
                    {persona.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-torq-grey-light text-xl leading-relaxed font-light">
            One thing all four have in common: they&apos;re making decisions with real consequences and they don&apos;t have time for tools that make them{' '}
            <span className="text-torq-white font-semibold">do the thinking twice.</span>{' '}
            TORQ AI does the intelligence work. You make the call.
          </p>
        </div>
      </div>
    </section>
  );
}
