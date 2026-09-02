import {
  TrendingUp,
  BarChart2,
  Briefcase,
  FileText,
  Calculator,
  Shield,
  MessageSquare,
  GitBranch,
  Bug,
} from 'lucide-react';

const useCases = [
  {
    icon: <TrendingUp size={22} className="text-torq-red" />,
    title: 'Investment Planning',
    description:
      'Portfolio strategy calibrated to your holdings, risk cap, time horizon, and tax situation. TORQ AI loads stored context before it answers — then routes market questions to live quotes instead of inventing prices.',
    tag: 'Portfolio',
    detail: 'Advisory Desk workspace',
  },
  {
    icon: <BarChart2 size={22} className="text-torq-red" />,
    title: 'Market Intelligence',
    description:
      'Live price feeds, chart capture, and web search — only when the query needs them. Non-market work skips the network and keeps token cost down.',
    tag: 'Markets',
    detail: 'Market Intelligence workspace',
  },
  {
    icon: <Briefcase size={22} className="text-torq-red" />,
    title: 'Business Advisory',
    description:
      'Strategic briefs, growth planning, and executive summaries on a dedicated advisory canvas. Not chat. A board-ready deliverable.',
    tag: 'Strategy',
    detail: 'Advisory Desk workspace',
  },
  {
    icon: <FileText size={22} className="text-torq-red" />,
    title: 'Document Review',
    description:
      'Contracts, financials, trusts, leases. Routed into a review workspace that flags risk, surfaces terms, and produces a structured summary.',
    tag: 'Legal & Finance',
    detail: 'Document Review workspace',
  },
  {
    icon: <Calculator size={22} className="text-torq-red" />,
    title: 'Accounting & Tax',
    description:
      'Entity structure, deduction mapping, and tax strategy grounded in persistent memory — current rules you store, not last year\'s training cutoff.',
    tag: 'Tax',
    detail: 'Advisory Desk + Dream + T63 memory',
  },
  {
    icon: <Shield size={22} className="text-torq-red" />,
    title: 'Estate Planning',
    description:
      'Asset protection, succession, wealth transfer. Family structure and asset mix persist across sessions so the next conversation does not start from zero.',
    tag: 'Wealth',
    detail: 'Advisory Desk workspace',
  },
  {
    icon: <MessageSquare size={22} className="text-torq-red" />,
    title: 'Drafting & Reports',
    description:
      'Memos, briefs, and reports in Draft Workshop. Export PDF, DOCX, Markdown, or Slack in one click.',
    tag: 'Output',
    detail: 'Draft Workshop + Export',
  },
  {
    icon: <GitBranch size={22} className="text-torq-red" />,
    title: 'Multi-Agent Execution',
    description:
      'Mission-graph runs across steps, sources, and decisions inside one governed system. Work that used to take a junior analyst a day completes as a run timeline.',
    tag: 'Automation',
    detail: 'Execution Runs workspace',
  },
  {
    icon: <Bug size={22} className="text-torq-red" />,
    title: 'Cyber Range',
    description:
      'DefendSwarm specialists scan, score, and brief security findings on a dedicated canvas — gated by L21 scope and approval, not dumped into chat.',
    tag: 'Security',
    detail: 'Cyber Range workspace',
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-28 bg-torq-darker relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-torq-border to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-torq-red text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Use Cases
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-torq-white mb-6 leading-tight">
            One governed system.
            <br />
            <span className="text-torq-grey font-light">Six canvases. Cyber-range when you need it.</span>
          </h2>
          <p className="text-torq-grey max-w-2xl mx-auto text-lg leading-relaxed mb-4">
            Every request is classified into a render type and opened on the matching canvas — Advisory, Market, Documents, Draft, Runs, or Cyber Range. Chat is the fallback, not the product.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="group relative card-shine rounded-xl border border-torq-border hover:border-torq-red/40 bg-torq-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-torq-surface cursor-default"
            >
              <div className="absolute inset-0 rounded-xl bg-torq-red/0 group-hover:bg-torq-red/[0.03] transition-colors duration-300" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-torq-red/10 border border-torq-red/20 flex items-center justify-center group-hover:bg-torq-red/15 transition-colors duration-300">
                    {uc.icon}
                  </div>
                  <span className="text-[9px] font-bold tracking-widest uppercase text-torq-grey border border-torq-border rounded px-2 py-0.5">
                    {uc.tag}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-torq-white mb-2">{uc.title}</h3>
                <p className="text-xs text-torq-grey leading-relaxed mb-4">{uc.description}</p>
                <div className="flex items-center gap-1.5 text-[10px] text-torq-grey/60 font-mono">
                  <div className="w-1 h-1 rounded-full bg-torq-red/50" />
                  {uc.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-torq-border to-transparent" />
    </section>
  );
}
