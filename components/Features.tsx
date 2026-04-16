import {
  Brain,
  Database,
  LayoutDashboard,
  Radio,
  FileOutput,
  ShieldCheck,
  Zap,
  GitMerge,
  Slack,
  TrendingDown,
} from 'lucide-react';

const features = [
  {
    icon: <Brain size={26} className="text-torq-red" />,
    title: 'TORQ AI Advisor',
    badge: 'Fine-Tuned',
    description:
      'TORQ AI isn\'t a wrapper around a generic model. It\'s a purpose-built advisory agent calibrated on 1,770+ real financial conversations — trained to think like a senior analyst, not autocomplete. It knows the difference between a tax-loss harvest and a wash sale. It knows why 4,000 shares of STRC is an income engine, not a speculation. Every session it loads your live portfolio, your strategy, and your context before answering.',
    highlight: '1,770+ domain-specific training conversations',
  },
  {
    icon: <Database size={26} className="text-torq-red" />,
    title: 'Dream Memory System',
    badge: 'Self-Improving',
    description:
      'TORQ doesn\'t just remember your sessions — it extracts, validates, and persists knowledge from every interaction into a governed Dream Memory layer. Verified facts, patterns, decisions, and best practices accumulate over time. IRS tax law, Section 179 limits, your entity structure, your DCA rules — all stored and injected into every future session automatically. The system gets smarter with every query.',
    highlight: 'Persistent memory that compounds over time',
  },
  {
    icon: <LayoutDashboard size={26} className="text-torq-red" />,
    title: 'Purpose-Built Workspaces',
    badge: 'Intelligent Routing',
    description:
      'Advisory Desk. Market Intelligence. Document Review. Draft Workshop. Execution Runs. Conversational Chat. Each canvas is purpose-built — specialized rendering, specialized AI routing, specialized output format. TORQ\'s 8-stage deterministic classifier routes every query to the right workspace in under 1 millisecond, before the LLM is even called. No command syntax. No learning curve.',
    highlight: '<1ms routing — 8-stage deterministic classifier',
  },
  {
    icon: <Radio size={26} className="text-torq-red" />,
    title: 'Conditional Real-Time Intelligence',
    badge: 'Live',
    description:
      'Live price feeds, technical signals, and integrated web search — but activated conditionally. Market queries get real-time data. Legal analysis, drafting, and strategic planning skip web search entirely, cutting input tokens 23–38% on non-market calls. When you ask "what\'s moving in biotech today," TORQ pulls live quotes and synthesizes a brief in seconds. When you ask to review a contract, it doesn\'t waste compute fetching news.',
    highlight: '23–38% token reduction on non-market queries',
  },
  {
    icon: <Zap size={26} className="text-torq-red" />,
    title: 'Multi-Model Cost Routing',
    badge: 'L24 Intelligence',
    description:
      'TORQ automatically picks the right AI model for every operation — a 4-tier routing system that routes simple queries to fast cheap models (GLM-5-Turbo, local Ollama) and reserves Claude Sonnet/Opus for complex reasoning. Classification happens in under 1ms with no LLM overhead. The result: Fortune 500-grade intelligence at a fraction of the compute cost. Prompt caching drops miss rates from 69% to 13%.',
    highlight: '4-tier model routing — 69% → 13% cache miss rate',
  },
  {
    icon: <GitMerge size={26} className="text-torq-red" />,
    title: 'Learning Loop Infrastructure',
    badge: 'Adaptive',
    description:
      'Every classification decision, every interaction, every model call is logged to a persistent learning infrastructure. The system reads recent patterns back into its context on every session — routing decisions improve over time without retraining. Adaptive response depth automatically scales answer complexity: simple queries get crisp 2-4 paragraph answers; deep analysis requests trigger exhaustive 5,000+ character breakdowns with bull/base/bear scenarios.',
    highlight: 'System improves with every query — no retraining needed',
  },
  {
    icon: <FileOutput size={26} className="text-torq-red" />,
    title: 'Export Everything',
    badge: 'Production-Ready',
    description:
      'Every output in TORQ is export-ready. One click to PDF (print-formatted), DOCX (Word-editable with headings, tables, and inline formatting), or Markdown (version-controlled). Send a strategic brief to your attorney. Share a market summary with your team. File a tax strategy doc in your records. Export to Slack with one click. Professional output with zero reformatting.',
    highlight: 'PDF · DOCX · Markdown · Slack — one click each',
  },
  {
    icon: <ShieldCheck size={26} className="text-torq-red" />,
    title: 'L21–L25 Governance Stack',
    badge: 'Enterprise-Grade',
    description:
      'TORQ ships a four-layer governance architecture in production. L21 Runtime Enforcement monitors every operation through a 5-mode lifecycle (Observe → Advise → Shadow → Partial → Enforce). L22.5 Context Pipeline keeps long sessions stable. L24 Multi-Model Cost Router selects the right model tier per call. L25 Risk Classification fast-paths low-risk ops and routes high-stakes changes through audit review. Every decision persists to append-only Supabase tables — a full audit trail, bank-grade.',
    highlight: 'Full audit trail — append-only, tamper-evident',
  },
  {
    icon: <TrendingDown size={26} className="text-torq-red" />,
    title: 'Context Compaction',
    badge: 'L22.5',
    description:
      'Long sessions don\'t bloat. When a conversation exceeds 150,000 tokens, TORQ\'s L22.5 Context Pipeline automatically compacts the history using a fast free-tier model — preserving full situational awareness at near-zero cost. You keep the context. You don\'t pay for it twice. The system caps failures at 3 per session and degrades gracefully if compaction isn\'t available.',
    highlight: 'Intelligent compaction at 150K tokens — ~$0 cost',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 bg-torq-darker relative overflow-hidden">
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-torq-red/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-torq-red text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Features
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-torq-white mb-6 leading-tight">
            Engineered from first principles.
            <br />
            <span className="text-torq-grey font-light">Not assembled from parts.</span>
          </h2>
          <p className="text-torq-grey max-w-xl mx-auto text-lg">
            Every layer of TORQ was built because a real decision required it.
            Nine intelligence systems. Zero bloat. No feature theater.
          </p>
        </div>

        {/* Feature rows */}
        <div className="flex flex-col gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group card-shine border border-torq-border hover:border-torq-red/30 rounded-xl bg-torq-surface/60 hover:bg-torq-surface p-8 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="grid lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-10 items-start">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-torq-red/10 border border-torq-red/20 flex items-center justify-center flex-shrink-0 group-hover:bg-torq-red/15 transition-colors duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-torq-white">
                      {feature.title}
                    </h3>
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-torq-red/15 text-torq-red border border-torq-red/30">
                      {feature.badge}
                    </span>
                  </div>
                  <p className="text-sm text-torq-grey leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Highlight */}
                <div className="hidden lg:flex flex-col justify-center min-w-[220px]">
                  <div className="text-right">
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-torq-border bg-torq-surface text-xs text-torq-grey-light font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-torq-red flex-shrink-0" />
                      <span>{feature.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile highlight */}
              <div className="lg:hidden mt-5 pt-4 border-t border-torq-border">
                <div className="inline-flex items-center gap-2 text-xs text-torq-grey">
                  <div className="w-1 h-1 rounded-full bg-torq-red" />
                  {feature.highlight}
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
