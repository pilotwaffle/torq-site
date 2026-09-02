import {
  Brain,
  Database,
  LayoutDashboard,
  Radio,
  FileOutput,
  ShieldCheck,
  Zap,
  GitMerge,
  Bug,
} from 'lucide-react';

const features = [
  {
    icon: <Brain size={26} className="text-torq-red" />,
    title: 'TORQ AI / Prince Flowers',
    badge: 'Lead Advisor',
    description:
      'Purpose-built advisory agent, not a generic wrapper. Local identity is a fine-tuned Qwen3-8B trained on 8,381 curated examples. Production answers run through L27 so simple work stays cheap and high-stakes work reaches frontier Claude — with your portfolio and strategy loaded first.',
    highlight: '8,381 domain examples · identity + routing',
  },
  {
    icon: <Database size={26} className="text-torq-red" />,
    title: 'Compounding Memory',
    badge: 'Dream + T63',
    description:
      'User context for holdings and rules. Dream Memory consolidates durable facts on a schedule. T63 unified memory stores embeddings and retrieves by meaning, then wraps the result so recalled text cannot become instructions. Sessions start aware. Off-topic recall stays quiet.',
    highlight: 'Three memory planes, one operator view',
  },
  {
    icon: <LayoutDashboard size={26} className="text-torq-red" />,
    title: 'Purpose-Built Workspaces',
    badge: 'Render Types',
    description:
      'Advisory brief, market insight, document review, draft output, run timeline, cyber-range brief. Chat is the fallback. An 8-stage classifier picks the canvas before the model is called.',
    highlight: 'Canvases own the center workspace',
  },
  {
    icon: <Radio size={26} className="text-torq-red" />,
    title: 'Conditional Live Intelligence',
    badge: 'Provenance',
    description:
      'Live quotes, TradingView snapshots, vision on chart uploads, and web search — only when the serving gate says tools are required. Live quotes are stamped. Tool-less paths are not allowed to invent a price.',
    highlight: '23–38% token cut on non-market calls',
  },
  {
    icon: <Zap size={26} className="text-torq-red" />,
    title: 'L27 Multi-Model Routing',
    badge: '4-Tier',
    description:
      'Local Ollama (config-gated), GLM-5-Turbo, optional NIM, frontier Claude Opus. Stakes and search needs escalate. Prompt caching and prefix-stable memory keep repeat work cheap.',
    highlight: 'Cheapest capable model per request',
  },
  {
    icon: <GitMerge size={26} className="text-torq-red" />,
    title: 'Learning Loop',
    badge: 'L28',
    description:
      'Classifications, interactions, and outcomes persist. The experience engine scores responses. Adaptive depth: short answers for simple questions, structured deep analysis when you ask for it.',
    highlight: 'Improves under governance, not in the dark',
  },
  {
    icon: <FileOutput size={26} className="text-torq-red" />,
    title: 'Export Everything',
    badge: 'Production-Ready',
    description:
      'PDF for print, DOCX for Word, Markdown for repos, Slack for the team. Draft workspace ships the Slack button next to the file exports.',
    highlight: 'PDF · DOCX · Markdown · Slack',
  },
  {
    icon: <ShieldCheck size={26} className="text-torq-red" />,
    title: 'L17–L28 Governance',
    badge: 'Risk-First',
    description:
      'L25 classifies risk before the model call. L21 runs Observe → Enforce with single-use approval tokens. L22.5 compacts long context. L22.6 records decision projections. L18 governs promotions. Audit is append-only.',
    highlight: 'Approval before write-capable action',
  },
  {
    icon: <Bug size={26} className="text-torq-red" />,
    title: 'DefendSwarm / Cyber Range',
    badge: 'L26',
    description:
      'Scoped security scanning with specialist lanes, evidence, and a dedicated brief canvas. Findings are gated — the scanner does not silently swap in a fixture when you asked for a real target.',
    highlight: 'Security work on its own canvas',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 bg-torq-darker relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-torq-red/20 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-torq-red text-xs font-bold tracking-[0.2em] uppercase mb-4">Features</p>
          <h2 className="text-4xl lg:text-5xl font-black text-torq-white mb-6 leading-tight">
            Engineered from first principles.
            <br />
            <span className="text-torq-grey font-light">Not assembled from parts.</span>
          </h2>
          <p className="text-torq-grey max-w-xl mx-auto text-lg">
            Every layer exists because a real decision required it. v0.80 is the current production line.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group card-shine border border-torq-border hover:border-torq-red/30 rounded-xl bg-torq-surface/60 hover:bg-torq-surface p-8 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-10 items-start">
                <div className="w-14 h-14 rounded-xl bg-torq-red/10 border border-torq-red/20 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-torq-white">{feature.title}</h3>
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-torq-red/15 text-torq-red border border-torq-red/30">
                      {feature.badge}
                    </span>
                  </div>
                  <p className="text-sm text-torq-grey leading-relaxed">{feature.description}</p>
                </div>
                <div className="hidden lg:flex flex-col justify-center min-w-[220px]">
                  <div className="text-right">
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-torq-border bg-torq-surface text-xs text-torq-grey-light font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-torq-red flex-shrink-0" />
                      <span>{feature.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
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
    </section>
  );
}
