import { Building2, TrendingUp, Users, LineChart } from 'lucide-react';

const personas = [
  {
    icon: <Building2 size={28} className="text-torq-red" />,
    role: 'The Business Owner',
    tagline: 'Run ops, finances, and strategy from one console.',
    description:
      'You wear 12 hats. TORQ is the advisor, analyst, and strategist you\'ve never been able to afford full-time. From cash flow analysis to competitive briefs to contract review — it handles the intelligence layer so you can handle the decisions.',
    bullets: [
      'Strategic briefs in minutes, not days',
      'Contract and doc review without the legal bill',
      'Tax guidance grounded in current IRS law',
    ],
  },
  {
    icon: <TrendingUp size={28} className="text-torq-red" />,
    role: 'The Individual Investor',
    tagline: 'Build a portfolio strategy that rivals the top 1%.',
    description:
      'You\'re managing real money with limited time and no army of analysts. TORQ gives you AI-driven portfolio analysis, real-time market signals, and an advisor who knows your positions — not a generic robo-advisor with guardrails.',
    bullets: [
      'Portfolio risk analysis with your actual holdings',
      'Live market data + technical signal interpretation',
      'DCA strategy, rebalancing logic, position sizing',
    ],
  },
  {
    icon: <Users size={28} className="text-torq-red" />,
    role: 'The Wealth Manager',
    tagline: 'Serve more clients with AI-augmented advisory.',
    description:
      'TORQ is the research analyst you\'ve always needed. Prep client briefings faster. Pull real-time data mid-call. Draft estate planning summaries in seconds. Scale your advisory practice without scaling headcount.',
    bullets: [
      'Client briefs and portfolio summaries at speed',
      'Estate and succession planning frameworks',
      'Document review for client financial packages',
    ],
  },
  {
    icon: <LineChart size={28} className="text-torq-red" />,
    role: 'The Operator / CFO',
    tagline: 'Real-time intelligence across your entire business.',
    description:
      'You need clarity across P&L, market conditions, competitor moves, and regulatory landscape — simultaneously. TORQ\'s multi-agent execution runs handle complex, multi-step research workflows that would take a junior analyst a full day.',
    bullets: [
      'Multi-agent execution for complex analysis',
      'Competitive intelligence and market positioning',
      'Financial model drafting and scenario planning',
    ],
  },
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-28 relative overflow-hidden">
      {/* Red orb */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-torq-red/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-torq-red/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-torq-red text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Who It&apos;s For
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-torq-white mb-6 leading-tight">
            Serious operators.
            <br />
            <span className="text-torq-grey font-light">All kinds.</span>
          </h2>
          <p className="text-torq-grey max-w-xl mx-auto text-lg">
            TORQ was built for people who make decisions that matter — and need intelligence
            that keeps up.
          </p>
        </div>

        {/* Persona grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {personas.map((persona, i) => (
            <div
              key={i}
              className="group card-shine relative border border-torq-border hover:border-torq-red/40 rounded-xl bg-torq-surface/60 hover:bg-torq-surface p-8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-torq-red/0 group-hover:bg-torq-red/[0.02] transition-colors duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-torq-red/10 border border-torq-red/20 flex items-center justify-center mb-6 group-hover:bg-torq-red/15 transition-colors">
                  {persona.icon}
                </div>

                {/* Role + tagline */}
                <h3 className="text-xl font-black text-torq-white mb-1">
                  {persona.role}
                </h3>
                <p className="text-torq-red text-sm font-semibold mb-4">
                  &ldquo;{persona.tagline}&rdquo;
                </p>

                {/* Description */}
                <p className="text-torq-grey text-sm leading-relaxed mb-6">
                  {persona.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 pt-5 border-t border-torq-border">
                  {persona.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-torq-grey-light">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="mt-0.5 flex-shrink-0"
                      >
                        <path
                          d="M2 7L5.5 10.5L12 3.5"
                          stroke="#e8001c"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
