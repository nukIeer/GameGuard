import { ReactNode } from 'react';

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="px-4 py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-black text-text-primary mb-8 tracking-tight">{title}</h1>
      <div className="prose prose-invert prose-green max-w-none prose-p:text-text-secondary prose-headings:text-text-primary prose-a:text-accent-green">
        {children}
      </div>
    </div>
  );
}
