import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TORQ Console v0.80 — Governed Intelligence for Business, Finance, and Strategic Decisions',
  description:
    'TORQ Console is a governed advisory workbench: six purpose-built canvases, L17–L28 governance, persistent memory, and L27 multi-model routing. Not a chatbot. 48-hour free trial.',
  keywords: [
    'governed AI system',
    'production intelligence platform',
    'advisory operating system',
    'TORQ Console',
    'TORQ Business Solutions',
    'Prince Flowers',
    'L27 model router',
  ],
  openGraph: {
    title: 'TORQ Console — Governed Intelligence for Business, Finance, and Strategic Decisions',
    description:
      'A governed operating system for advisory, finance, documents, drafting, execution, and cyber-range work. Built from real consulting — not a wrapped LLM.',
    type: 'website',
    url: 'https://torq-site-pi.vercel.app',
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
