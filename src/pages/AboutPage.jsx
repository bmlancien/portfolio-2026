import React from 'react';
import useT from '../hooks/useT';

export default function AboutPage() {
  const t = useT();
  return (
    <section className="py-8 md:py-16 lg:py-24 pb-12 md:pb-20 lg:pb-32">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl py-8">{t.about.heading}</h1>
        <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start">
          <div className="w-full lg:w-auto lg:flex-shrink-0 mb-8 lg:mb-0">
            <picture>
              <source srcSet="/images/portrait.webp" type="image/webp" />
              <img
                src="/images/portrait.png"
                alt="Bryan Lancien, product designer"
                className="w-full lg:w-[300px] xl:w-[340px] aspect-[4/5] object-cover rounded-2xl"
              />
            </picture>
          </div>
          <div className="max-w-2xl flex flex-col gap-6 text-gray-700 leading-relaxed min-w-0">
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
      </div>
    </section>
  );
}
