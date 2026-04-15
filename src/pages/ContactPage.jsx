import React from 'react';
import useT from '../hooks/useT';

export default function ContactPage() {
  const t = useT();
  return (
    <section className="py-8 md:py-16 lg:py-24 pb-12 md:pb-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl py-8">{t.contactPage.heading}</h1>
        <p className="pb-2">{t.contactPage.intro}</p>
        <a
          href="mailto:bryanlancien.ui@gmail.com"
          className="text-gray-700 font-medium underline hover:text-gray-500"
        >
          bryanlancien.ui@gmail.com
        </a>
      </div>
    </section>
  );
}
