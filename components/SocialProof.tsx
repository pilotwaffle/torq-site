import { Zap, Code2, Layers, Clock } from 'lucide-react';

const stats = [
  {
    icon: <Zap size={14} className="text-torq-red" />,
    label: 'Powered by Claude AI',
  },
  {
    icon: <Code2 size={14} className="text-torq-red" />,
    label: '288,000+ lines of production code',
  },
  {
    icon: <Layers size={14} className="text-torq-red" />,
    label: '5 specialized workspaces',
  },
  {
    icon: <Clock size={14} className="text-torq-red" />,
    label: '48-hour free trial',
  },
];

export default function SocialProof() {
  return (
    <section className="border-y border-torq-border bg-torq-surface/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-2.5 group">
              {i > 0 && (
                <div className="hidden sm:block w-px h-4 bg-torq-border" />
              )}
              <div className="flex items-center gap-2 text-sm text-torq-grey group-hover:text-torq-grey-light transition-colors">
                <span className="flex-shrink-0">{stat.icon}</span>
                <span className="font-medium tracking-wide">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
