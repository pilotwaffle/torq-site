import { Database, GitBranch, LayoutGrid, ShieldCheck, FileOutput } from 'lucide-react';

const layers = [
  {
    code: 'L1',
    icon: <Database size={22} className="text-torq-red" />,
    title: 'Memory',
    role: 'Persistent system state',
    description:
      'Dream Memory holds business context, holdings, strategy, entity structure, and prior decisions across sessions. Not chat history — governed knowledge that compounds with every use.',
  },
  {
    code: 'L2',
    icon: <GitBranch size={22} className="text-torq-red" />,
    title: 'Routing',
    role: 'Deterministic intent classification',
    description:
      'An 8-stage classifier reads every request in under a millisecond and routes it to the right workspace and the right model tier — before any LLM call is made.',
  },
  {
    code: 'L3',
    icon: <LayoutGrid size={22} className="text-torq-red" />,
    title: 'Workspaces',
    role: 'Purpose-built execution surfaces',
    description:
      'Advisory, Market Intelligence, Document Review, Draft Workshop, and Execution Runs — each a dedicated canvas with its own rendering, tooling, and structured output, not a generic chat thread.',
  },
  {
    code: 'L4',
    icon: <ShieldCheck size={22} className="text-torq-red" />,
    title: 'Governance',
    role: 'Real-time policy enforcement',
    description:
      'L21 runtime enforcement, L24 cost routing, and L25 risk classification run on every request. High-stakes changes go through audit review. Every event persists to append-only tables.',
  },
  {
    code: 'L5',
    icon: <FileOutput size={22} className="text-torq-red" />,
    title: 'Output & Evolution',
    role: 'Production-ready, continuously improving',
    description:
      'Exports to PDF, DOCX, Markdown, and Slack in one click. Feedback loops tie outputs to outcomes, and routing improves with usage under guardrails, thresholds, and rollback.',
  },
];

export default function TorqSystem() {
  return (
    <section id="system" className="py-28 relative overflow-hidden">
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-torq-red/20 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-torq-red/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-torq-red text-xs font-bold tracking-[0.2em] uppercase mb-4">
            The TORQ System
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-torq-white mb-6 leading-tight">
            Not a wrapped LLM.
            <br />
            <span className="text-torq-grey font-light">A governed operating system.</span>
          </h2>
          <p className="text-torq-grey max-w-2xl mx-auto text-lg leading-relaxed">
            TORQ Console is built as five integrated layers. Together they turn advisory thinking
            into a production intelligence system that can operate, adapt, and improve — not a
            chat box layered onto a business.
          </p>
        </div>

        {/* Architecture grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {layers.map((layer, i) => (
            <div
              key={i}
              className="group relative rounded-xl border border-torq-border hover:border-torq-red/40 bg-torq-surface/60 hover:bg-torq-surface p-6 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Layer code */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-torq-red/10 border border-torq-red/20 flex items-center justify-center group-hover:bg-torq-red/15 transition-colors">
                  {layer.icon}
                </div>
                <span className="text-[10px] font-black font-mono tracking-widest text-torq-red/70">
                  {layer.code}
                </span>
              </div>

              <h3 className="text-base font-bold text-torq-white mb-1">{layer.title}</h3>
              <p className="text-[11px] font-mono uppercase tracking-wider text-torq-red/80 mb-3">
                {layer.role}
              </p>
              <p className="text-xs text-torq-grey leading-relaxed">{layer.description}</p>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-torq-grey-light text-lg leading-relaxed font-light">
            This is how TORQ moves businesses past one-time recommendations and into systems that{' '}
            <span className="text-torq-white font-semibold">continuously operate, adapt, and improve.</span>
          </p>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-torq-border to-transparent" />
    </section>
  );
}
