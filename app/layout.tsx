import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TORQ Console — AI Business Intelligence for Serious Decision-Makers',
  description:
    'TORQ Console gives small businesses, investors, and operators the same intelligence firepower as Fortune 500 advisory teams — at $50/month. 48-hour free trial. No credit card required.',
  keywords: [
    'AI business intelligence',
    'portfolio management AI',
    'financial advisor AI',
    'business consulting AI',
    'market intelligence platform',
    'TORQ Console',
  ],
  openGraph: {
    title: 'TORQ Console — AI Business Intelligence',
    description: 'Strategic briefs. Market signals. Document analysis. Built for operators who move fast.',
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
