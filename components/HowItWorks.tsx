import { UserCheck, Cpu, ArrowDownToLine } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <UserCheck size={24} className="text-torq-red" />,
    title: 'Connect Your Context',
    description:
      'Tell TORQ about your business, your portfolio, and your goals. It stores everything permanently — holdings, strategy, risk profile, tax situation, entity structure, watchlists, and priorities. Every future session starts with full situational awareness. No re-explaining. No starting from scratch.',
    detail: 'Persistent Dream Memory — context that compounds',
    sub: 'Supabase-backed · 5-layer memory architecture · Session-to-session recall',
  },
  {
    number: '02',
    icon: <Cpu size={24} className="text-torq-red" />,
    title: 'Ask in Plain English',
    description:
      'Type your query naturally. TORQ\'s 8-stage deterministic classifier reads your intent in under 1 millisecond and routes it to the right workspace — Advisory Desk, Market Intelligence, Document Review, Draft Workshop, or Execution Runs. The right model at the right cost tier is selected automatically. No command syntax. No prompting tricks. No learning curve.',
    detail: '<1ms routing — 8 classification stages, 4 model tiers',
    sub: 'Deterministic routing · Multi-model cost optimization · Adaptive response depth',
  },
  {
    number: '03',
    icon: <ArrowDownToLine size={24} className="text-torq-red" />,
    title: 'Act on Structured Intelligence',
    description:
      'Receive structured briefs, risk analyses, market summaries, draft documents, or execution timelines — rendered on purpose-built canvases, not dumped into a chat thread. Export to PDF, DOCX, or Markdown instantly. Push to Slack with one click. Every output is production-ready — formatted for print, editable in Word, or version-controlled in your repo.',
    detail: 'PDF · DOCX · Markdown · Slack — one click export',
    sub: 'Structured rendering · Governed outputs · Full audit trail',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-torq-red/5 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-torq-red text-xs font-bold tracking-[0.2em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-torq-white mb-6 leading-tight">
            From question
            <br />
            <span className="text-torq-grey font-light">to confident decision — in seconds.</span>
          </h2>
          <p className="text-torq-grey max-w-lg mx-auto text-base leading-relaxed">
            Three steps. Six workspaces. Nine intelligence layers working in the background
            so you don't have to think about any of them.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px">
            <div className="mx-auto max-w-4xl h-px bg-gradient-to-r from-transparent via-torq-red/30 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center lg:items-start lg:text-left group">
                {/* Step number circle */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-full border-2 border-torq-red/40 bg-torq-surface flex items-center justify-center glow-red-sm group-hover:border-torq-red/70 transition-colors duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 text-xs font-black text-torq-red/60 font-mono">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-black text-torq-white mb-4">
                  {step.title}
                </h3>
                <p className="text-torq-grey leading-relaxed mb-5 text-sm">
                  {step.description}
                </p>

                {/* Detail tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-torq-surface border border-torq-red/20 text-xs text-torq-grey mb-3">
                  <div className="w-1 h-1 rounded-full bg-torq-red" />
                  {step.detail}
                </div>

                {/* Sub detail */}
                <p className="text-[10px] font-mono text-torq-grey/40 leading-relaxed">
                  {step.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Intelligence layer callout */}
        <div className="mt-20 rounded-xl border border-torq-border bg-torq-surface/40 p-6 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { label: 'L21', desc: 'Runtime Enforcement', status: 'Live · Observe Mode' },
              { label: 'L24', desc: 'Multi-Model Cost Router', status: 'Live · 4-Tier Active' },
              { label: 'L25', desc: 'Risk Classification', status: 'Live · Fast-Path Active' },
            ].map((layer, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-xs font-black font-mono text-torq-red tracking-widest">{layer.label}</span>
                <span className="text-sm font-semibold text-torq-white">{layer.desc}</span>
                <span className="text-[10px] text-torq-grey/50 font-mono">{layer.status}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-torq-border text-center">
            <p className="text-xs text-torq-grey/50">
              Five governance layers run silently on every query — enforcing safety, optimizing cost, and building institutional memory.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
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
