import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TORQ Console — Governed Intelligence for Business, Finance, and Strategic Decisions',
  description:
    'TORQ Console is a governed operating system for advisory, finance, document review, drafting, and execution — built from real consulting work and Critical Path Methodology. Not a chatbot. 48-hour free trial.',
  keywords: [
    'governed AI system',
    'production intelligence platform',
    'advisory operating system',
    'business decision system',
    'financial intelligence platform',
    'Critical Path Methodology',
    'TORQ Console',
    'TORQ Business Solutions',
  ],
  openGraph: {
    title: 'TORQ Console — Governed Intelligence for Business, Finance, and Strategic Decisions',
    description:
      'A governed operating system for advisory, finance, and execution. Built from years of real consulting — not a wrapped LLM.',
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
