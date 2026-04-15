import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TORQ AI — Your Autonomous Financial Intelligence Agent',
  description:
    'Built by Barry Flowers. Trained on 1,770+ real advisory conversations. TORQ AI runs inside TORQ Console — your personal command center for every financial decision that matters. 48-hour free trial.',
  keywords: [
    'AI financial intelligence',
    'portfolio management AI',
    'financial advisor AI',
    'autonomous financial agent',
    'market intelligence platform',
    'TORQ AI',
    'TORQ Console',
  ],
  openGraph: {
    title: 'TORQ AI — Your Autonomous Financial Intelligence Agent',
    description: 'Built by Barry Flowers. Trained on 1,770+ real advisory conversations. Built on your portfolio, not a template.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-torq-black text-torq-white antialiased">
        {children}
      </body>
    </html>
  );
}
