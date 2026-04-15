import {
  TrendingUp,
  BarChart2,
  Briefcase,
  FileText,
  Calculator,
  Shield,
  MessageSquare,
  GitBranch,
} from 'lucide-react';

const useCases = [
  {
    icon: <TrendingUp size={22} className="text-torq-red" />,
    title: 'Investment Planning',
    description:
      'Build a portfolio strategy calibrated to your risk tolerance, time horizon, and goals. Prince AI knows your holdings, your DCA schedule, and your 5-year plan — and gives you analysis that rivals what a top wealth manager charges $500/hr to provide.',
    tag: 'Portfolio',
    detail: 'Advisory Desk workspace',
  },
  {
    icon: <BarChart2 size={22} className="text-torq-red" />,
    title: 'Market Intelligence',
    description:
      'Real-time price feeds, technical signals, and live web search — conditionally activated only when your query needs it. TORQ doesn\'t say "I don\'t have real-time data." It routes market queries to a dedicated intelligence canvas and synthesizes a brief in seconds.',
    tag: 'Markets',
    detail: 'Market Intelligence workspace',
  },
  {
    icon: <Briefcase size={22} className="text-torq-red" />,
    title: 'Business Advisory',
    description:
      'Strategic briefs, competitive positioning, growth planning, and executive summaries — rendered on a dedicated Advisory Desk canvas with structured output. Not a chat response. A deliverable you can send to your board.',
    tag: 'Strategy',
    detail: 'Advisory Desk workspace',
  },
  {
    icon: <FileText size={22} className="text-torq-red" />,
    title: 'Document Review',
    description:
      'Upload contracts, financials, trust documents, or lease agreements. TORQ routes your query to a Document Review canvas that flags risk clauses, summarizes legal terms, and surfaces what your attorney would charge $400/hr to find — in under a minute.',
    tag: 'Legal & Finance',
    detail: 'Document Review workspace',
  },
  {
    icon: <Calculator size={22} className="text-torq-red" />,
    title: 'Accounting & Tax',
    description:
      'IRS deduction mapping, entity structure analysis, Section 179 guidance (updated to $2.5M OBBBA 2025 limits), and tax strategy — grounded in current law stored in TORQ\'s persistent Dream Memory, not outdated training data.',
    tag: 'Tax',
    detail: 'Advisory Desk + Dream Memory',
  },
  {
    icon: <Shield size={22} className="text-torq-red" />,
    title: 'Estate Planning',
    description:
      'Asset protection frameworks, succession planning, and wealth transfer strategies. TORQ remembers your family structure, your asset mix, and your goals across every session — so every conversation builds on the last, not from scratch.',
    tag: 'Wealth',
    detail: 'Advisory Desk workspace',
  },
  {
    icon: <MessageSquare size={22} className="text-torq-red" />,
    title: 'Draft & Publish',
    description:
      'Generate polished memos, client briefs, strategy documents, and reports in the Draft Workshop. Export to PDF (print-ready), DOCX (Word-editable), or Markdown (version-controlled) with one click. Professional output, zero reformatting.',
    tag: 'Content',
    detail: 'Draft Workshop + Export',
  },
  {
    icon: <GitBranch size={22} className="text-torq-red" />,
    title: 'Multi-Agent Execution',
    description:
      'Complex, multi-step business workflows — competitive analyses, scenario planning, multi-source research — run as coordinated Execution Runs with agent orchestration timelines. Decisions that used to take a junior analyst a full day complete in minutes.',
    tag: 'Automation',
    detail: 'Execution Runs workspace',
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
            Six workspaces.
            <br />
            <span className="text-torq-grey font-light">Every decision you face.</span>
          </h2>
          <p className="text-torq-grey max-w-xl mx-auto text-lg leading-relaxed">
            TORQ's 8-stage intent classifier reads your query and routes it to the right
            intelligence workspace automatically — in under 1 millisecond. No tab switching.
            No tool juggling. No command syntax.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="group relative card-shine rounded-xl border border-torq-border hover:border-torq-red/40 bg-torq-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-torq-surface cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-torq-red/0 group-hover:bg-torq-red/[0.03] transition-colors duration-300" />

              <div className="relative z-10">
                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-torq-red/10 border border-torq-red/20 flex items-center justify-center group-hover:bg-torq-red/15 transition-colors duration-300">
                    {uc.icon}
                  </div>
                  <span className="text-[9px] font-bold tracking-widest uppercase text-torq-grey border border-torq-border rounded px-2 py-0.5">
                    {uc.tag}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-torq-white mb-2 group-hover:text-white transition-colors">
                  {uc.title}
                </h3>
                <p className="text-xs text-torq-grey leading-relaxed mb-4">
                  {uc.description}
                </p>

                {/* Workspace label */}
                <div className="flex items-center gap-1.5 text-[10px] text-torq-grey/60 font-mono">
                  <div className="w-1 h-1 rounded-full bg-torq-red/50" />
                  {uc.detail}
                </div>
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
