import { Building2, TrendingUp, Users, LineChart } from 'lucide-react';

const personas = [
  {
    icon: <Building2 size={24} className="text-torq-red" />,
    role: 'The Business Owner',
    problem:
      'You're the CEO, CFO, COO, and analyst — simultaneously. Every strategic question costs you either an expensive consultant or hours of research you don't have. The answers you need exist. Finding them is the bottleneck.',
    capability:
      'TORQ AI loads your full business context once. From that point, every advisory brief, competitive analysis, contract review, and tax scenario runs against your actual situation — not a generic template. The intelligence layer is finally off your plate.',
  },
  {
    icon: <TrendingUp size={24} className="text-torq-red" />,
    role: 'The Individual Investor',
    problem:
      'You're managing real money — not paper. The market doesn't wait for your advisor's next available slot and ChatGPT doesn't know your positions. Every decision gets made with incomplete context, or no context at all.',
    capability:
      'TORQ AI knows your portfolio. Every position, DCA rule, and risk threshold — already loaded. Ask what MSTR's volatility risk is against your allocation cap and get a real answer in seconds, not a disclaimer about consulting a professional.',
  },
  {
    icon: <Users size={24} className="text-torq-red" />,
    role: 'The Wealth Manager',
    problem:
      'Your client count grows. Your hours don't. Prep time per meeting is eating your capacity and every brief you build manually is time you're not spending on the relationships that actually generate revenue.',
    capability:
      'TORQ AI compresses hours of prep into minutes. Draft client summaries, pull real-time data mid-call, build estate planning frameworks, and export structured briefings — without adding headcount. Your advisory practice scales. Your hours don't.',
  },
  {
    icon: <LineChart size={24} className="text-torq-red" />,
    role: 'The Operator / CFO',
    problem:
      'Your decisions require simultaneous visibility into P&L, market conditions, competitive moves, and regulatory exposure. You're cross-referencing four systems to get a picture that should take thirty seconds.',
    capability:
      'TORQ AI runs multi-step analytical workflows that would take a junior analyst a full day. Competitive briefs, financial scenario models, regulatory summaries — executed in a single run, with structured export to PDF, DOCX, or Slack, ready to share.',
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
            Serious operators.
            <br />
            <span className="text-torq-grey font-light">All kinds.</span>
          </h2>
        </div>

        {/* Persona grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {personas.map((persona, i) => (
            <div
              key={i}
              className="group card-shine relative border border-torq-border hover:border-torq-red/40 rounded-xl bg-torq-surface/60 hover:bg-torq-surface p-8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-torq-red/0 group-hover:bg-torq-red/[0.02] transition-colors duration-300" />

              <div className="relative z-10">
                {/* Icon + Role */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-torq-red/10 border border-torq-red/20 flex items-center justify-center flex-shrink-0 group-hover:bg-torq-red/15 transition-colors">
                    {persona.icon}
                  </div>
                  <h3 className="text-lg font-black text-torq-white">
                    {persona.role}
                  </h3>
                </div>

                {/* Problem */}
                <div className="mb-5">
                  <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-torq-grey/50 mb-2">The Problem</p>
                  <p className="text-torq-grey text-sm leading-relaxed">
                    {persona.problem}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-torq-red/30 via-torq-red/10 to-transparent mb-5" />

                {/* Capability */}
                <div>
                  <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-torq-red/70 mb-2">With TORQ AI</p>
                  <p className="text-torq-grey-light text-sm leading-relaxed">
                    {persona.capability}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Unifying closer */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-torq-grey-light text-xl leading-relaxed font-light">
            They&apos;re making decisions with real consequences and they don&apos;t have time for tools that make them{' '}
            <span className="text-torq-white font-semibold">do the thinking twice.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
