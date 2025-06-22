import type { Metadata } from 'next';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';

export const metadata: Metadata = {
  title: 'Presentation - HKBU',
  description: 'Interactive presentation built with Next.js and Reveal.js',
};

export default function SlidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen">
      {children}
    </div>
  );
}