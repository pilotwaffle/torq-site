import { UserCheck, Cpu, ArrowDownToLine } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <UserCheck size={24} className="text-torq-red" />,
    title: 'Connect Your Context',
    description:
      'Holdings, strategy, risk cap, tax situation, entity structure, watchlists. Stored in user context, Dream Memory, and T63 unified semantic memory — retrieved on every turn, wrapped so recalled facts cannot be treated as instructions.',
    detail: 'Dream + T63 + session history',
    sub: 'Supabase + pgvector · progressive recall · prompt-injection envelope',
  },
  {
    number: '02',
    icon: <Cpu size={24} className="text-torq-red" />,
    title: 'Ask in Plain English',
    description:
      'The 8-stage classifier reads intent in under a millisecond. L25 scores risk first. L21 enforces policy. L27 picks the cheapest model that can do the job — local, GLM, or frontier Claude — and only turns on web search or live quotes when the query needs them.',
    detail: '<1ms classify · L27 4-tier route',
    sub: 'Risk-first · tool-gated serving · no prompt tricks',
  },
  {
    number: '03',
    icon: <ArrowDownToLine size={24} className="text-torq-red" />,
    title: 'Act on Structured Intelligence',
    description:
      'Output lands on the matching canvas, not a chat dump. Export PDF, DOCX, Markdown, or Slack. High-stakes changes leave an append-only audit trail. Outcomes feed the L28 experience engine so routing and depth improve with use.',
    detail: 'PDF · DOCX · Markdown · Slack',
    sub: 'Structured canvases · audit trail · torq_score feedback',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-torq-red/5 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-torq-red text-xs font-bold tracking-[0.2em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-torq-white mb-6 leading-tight">
            From question
            <br />
            <span className="text-torq-grey font-light">to governed decision — in seconds.</span>
          </h2>
          <p className="text-torq-grey max-w-lg mx-auto text-base leading-relaxed">
            Three steps on the surface. Risk, enforcement, routing, and memory underneath so you do not have to operate the stack.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center lg:items-start lg:text-left group">
              <div className="relative mb-8">
                <div className="w-16 h-16 rounded-full border-2 border-torq-red/40 bg-torq-surface flex items-center justify-center glow-red-sm group-hover:border-torq-red/70 transition-colors duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 text-xs font-black text-torq-red/60 font-mono">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-black text-torq-white mb-4">{step.title}</h3>
              <p className="text-torq-grey leading-relaxed mb-5 text-sm">{step.description}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-torq-surface border border-torq-red/20 text-xs text-torq-grey mb-3">
                <div className="w-1 h-1 rounded-full bg-torq-red" />
                {step.detail}
              </div>
              <p className="text-[10px] font-mono text-torq-grey/40 leading-relaxed">{step.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-xl border border-torq-border bg-torq-surface/40 p-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { label: 'L21', desc: 'Enforcement ladder' },
              { label: 'L22.5', desc: 'Context pipeline' },
              { label: 'L22.6', desc: 'Decision memory' },
              { label: 'L25', desc: 'Risk classifier' },
              { label: 'L27', desc: '4-tier router' },
              { label: 'L28', desc: 'Experience engine' },
            ].map((layer, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-xs font-black font-mono text-torq-red tracking-widest">{layer.label}</span>
                <span className="text-sm font-semibold text-torq-white">{layer.desc}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-torq-border text-center">
            <p className="text-xs text-torq-grey/50">
              Live path: risk → enforcement → classification → L27 routing → structured canvas. L26 DefendSwarm and L18 promotion sit on the same ladder.
            </p>
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href="mailto:Admin@TorqBusinessSolutions.com?subject=TORQ Console Free Trial Request&body=Hi, I'd like to start my free 48-hour trial of TORQ Console. Please send me access details."
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-torq-red hover:bg-torq-red-bright text-white font-bold text-base transition-all duration-200 glow-red hover:scale-[1.02]"
          >
            Start Your Free 48-Hour Trial
          </a>
        </div>
      </div>
    </section>
  );
}
