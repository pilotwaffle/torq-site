import {
  Brain,
  Database,
  LayoutDashboard,
  Radio,
  FileOutput,
  ShieldCheck,
} from 'lucide-react';

const features = [
  {
    icon: <Brain size={26} className="text-torq-red" />,
    title: 'Prince AI Advisor',
    badge: 'Fine-tuned',
    description:
      'Prince isn\'t a wrapper around ChatGPT. He\'s a custom AI persona fine-tuned on 1,770+ real financial conversations — calibrated to think like a senior financial analyst, not a generic language model. He knows the difference between a tax-loss harvest and a wash sale. He knows why a STRC position at 4,000 shares is an income engine, not speculation.',
    highlight: '1,770+ training conversations',
  },
  {
    icon: <Database size={26} className="text-torq-red" />,
    title: 'Persistent Memory',
    badge: 'Session-to-session',
    description:
      'TORQ remembers everything. Your portfolio holdings. Your DCA strategy. Your risk tolerance. Your upcoming tax deadline. Every session starts where the last one ended — no re-explaining, no re-contextualizing. It\'s the difference between a call center agent and a trusted advisor who knows your file.',
    highlight: 'Full context retained across all sessions',
  },
  {
    icon: <LayoutDashboard size={26} className="text-torq-red" />,
    title: '5 Workspace Canvases',
    badge: 'Purpose-built',
    description:
      'Advisory Desk. Market Intelligence. Document Review. Draft Workshop. Execution Runs. Each canvas is purpose-built for its task — specialized rendering, specialized AI routing, specialized output format. This isn\'t a chatbox with tabs. It\'s a purpose-built intelligence workbench.',
    highlight: 'Right tool for every decision type',
  },
  {
    icon: <Radio size={26} className="text-torq-red" />,
    title: 'Real-Time Market Data',
    badge: 'Live',
    description:
      'Live price feeds, technical signals, sentiment scoring, and integrated web search. When you ask "what\'s moving in biotech today," TORQ doesn\'t say "I don\'t have real-time data." It pulls live quotes, searches current news, and synthesizes a brief — in seconds.',
    highlight: 'Live prices + web search integrated',
  },
  {
    icon: <FileOutput size={26} className="text-torq-red" />,
    title: 'Export Everything',
    badge: 'Production-ready',
    description:
      'Every output in TORQ is export-ready. One click to PDF (formatted for print), DOCX (editable in Word), or Markdown (version-controlled). Send a brief to your attorney. Share a market summary with your team. File a strategy doc in your records. Professional output, zero friction.',
    highlight: 'PDF, DOCX, Markdown — one click',
  },
  {
    icon: <ShieldCheck size={26} className="text-torq-red" />,
    title: 'Enterprise Safety Built In',
    badge: 'L25 Governance',
    description:
      'TORQ ships with a risk classification layer (L25 Runtime Governance) that monitors every operation. Fast-path queries execute instantly. High-stakes operations route through safety review. Enterprise-grade guardrails — the kind Fortune 500 companies pay compliance teams to build manually.',
    highlight: 'Multi-tier risk governance engine',
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
            Built from the ground up.
            <br />
            <span className="text-torq-grey font-light">Not bolted together.</span>
          </h2>
          <p className="text-torq-grey max-w-xl mx-auto text-lg">
            Every feature in TORQ exists because a real decision-maker needed it.
            Zero bloat. No feature theater.
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
                <div className="hidden lg:flex flex-col justify-center min-w-[180px]">
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
