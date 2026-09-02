import { Database, GitBranch, LayoutGrid, ShieldCheck, FileOutput } from 'lucide-react';

const layers = [
  {
    code: '01',
    icon: <Database size={22} className="text-torq-red" />,
    title: 'Memory',
    role: 'Persistent system state',
    description:
      'Three stores, one operator experience: user context (holdings, strategy), Dream Memory (consolidated facts on a schedule), and T63 unified semantic memory with vector recall. Recalled facts are wrapped so they cannot be treated as commands.',
  },
  {
    code: '02',
    icon: <GitBranch size={22} className="text-torq-red" />,
    title: 'Routing',
    role: 'L27 4-tier cascade',
    description:
      'Classifier first. Then the cheapest capable model: local Ollama when enabled, GLM-5-Turbo for mid work, frontier Claude for high-stakes, search, and vision. Tools and live quotes are gated — no silent price invention.',
  },
  {
    code: '03',
    icon: <LayoutGrid size={22} className="text-torq-red" />,
    title: 'Workspaces',
    role: 'Purpose-built canvases',
    description:
      'Advisory, Market, Documents, Draft, Execution Runs, Cyber Range. Chat is the fallback renderer. Each canvas has its own rail, export path, and output shape.',
  },
  {
    code: '04',
    icon: <ShieldCheck size={22} className="text-torq-red" />,
    title: 'Governance',
    role: 'L17–L28 ladder',
    description:
      'Risk before the model call. L21 enforcement with single-use approvals. L18 promotion policy. L26 DefendSwarm on the cyber canvas. Append-only audit. Mutations do not ship themselves.',
  },
  {
    code: '05',
    icon: <FileOutput size={22} className="text-torq-red" />,
    title: 'Output & Evolution',
    role: 'Production-ready, scored',
    description:
      'PDF, DOCX, Markdown, Slack. L28 scores live outcomes (torq_score). Routing and depth adapt under thresholds and rollback — not unbounded self-rewrite.',
  },
];

export default function TorqSystem() {
  return (
    <section id="system" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-torq-red/20 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
            Five integrated layers. Together they turn advisory thinking into a production system that can operate, remember, and improve — without treating chat as the product.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {layers.map((layer, i) => (
            <div
              key={i}
              className="group relative rounded-xl border border-torq-border hover:border-torq-red/40 bg-torq-surface/60 hover:bg-torq-surface p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-torq-red/10 border border-torq-red/20 flex items-center justify-center">
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
      </div>
    </section>
  );
}
