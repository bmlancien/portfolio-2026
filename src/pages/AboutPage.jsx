import React from 'react';
import useT from '../hooks/useT';

export default function AboutPage() {
  const t = useT();
  return (
    <section className="py-8 md:py-16 lg:py-24 pb-12 md:pb-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl py-8">{t.about.heading}</h1>
        <div className="max-w-2xl flex flex-col gap-6 text-gray-700 leading-relaxed">
          {t.about.paragraphs.map((p, i) =>
            typeof p === 'string' ? (
              <p key={i}>{p}</p>
            ) : (
              <p key={i}>
                {p.pre}
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">
                  {p.linkText}
                </a>
                {p.post}
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
}
