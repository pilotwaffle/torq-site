import { Link2, MessageSquare, Download } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Link2 size={24} className="text-torq-red" />,
    title: 'Connect',
    description:
      'Tell TORQ about your business, portfolio, and goals. It stores your context permanently — your holdings, strategy, risk profile, and priorities — so every future session starts with full situational awareness.',
    detail: 'Persistent memory across all sessions',
  },
  {
    number: '02',
    icon: <MessageSquare size={24} className="text-torq-red" />,
    title: 'Ask',
    description:
      'Query in plain English. TORQ\'s 8-stage intent classifier reads your query and routes it to the right workspace — Advisory, Market, Document, Draft, or Execution — in milliseconds. No command syntax. No learning curve.',
    detail: '8-stage intelligent routing engine',
  },
  {
    number: '03',
    icon: <Download size={24} className="text-torq-red" />,
    title: 'Act',
    description:
      'Receive structured briefs, charts, risk analyses, and recommendations you can actually use. Export to PDF, DOCX, or Markdown instantly. Share with your team, your accountant, your attorney, or your board.',
    detail: 'Export to PDF, DOCX, Markdown',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-torq-red/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-torq-red text-xs font-bold tracking-[0.2em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-torq-white mb-6 leading-tight">
            Three steps from question
            <br />
            <span className="text-torq-grey font-light">to confident decision.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px">
            <div className="mx-auto max-w-4xl h-px bg-gradient-to-r from-transparent via-torq-red/30 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Step number circle */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-full border-2 border-torq-red/40 bg-torq-surface flex items-center justify-center glow-red-sm">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 text-xs font-black text-torq-red/60 font-mono">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-torq-white mb-4">
                  {step.title}
                </h3>
                <p className="text-torq-grey leading-relaxed mb-5 text-sm">
                  {step.description}
                </p>

                {/* Detail tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-torq-surface border border-torq-border text-xs text-torq-grey">
                  <div className="w-1 h-1 rounded-full bg-torq-red" />
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-torq-red hover:bg-torq-red-bright text-white font-bold text-base transition-all duration-200 glow-red hover:scale-[1.02]"
          >
            Start Your Free 48-Hour Trial
          </a>
        </div>
      </div>
    </section>
  );
}
