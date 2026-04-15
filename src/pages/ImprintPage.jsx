import React from 'react';
import useT from '../hooks/useT';

export default function ImprintPage() {
  const t = useT();
  return (
    <section className="py-8 md:py-16 lg:py-24 pb-12 md:pb-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-12">
        <h1 className="text-4xl py-8">{t.imprint.heading}</h1>

        <h2 className="text-2xl py-4">{t.imprint.infoHeading}</h2>
        <p>
          <span className="block pb-2">Bryan Lancien</span>
          <span className="block pb-2">Rua Poeta Mílton 2, 1170-321 Lisboa, Portugal</span>
          <span className="block pb-2">bryanlancien.ui@gmail.com</span>
          <span className="block pb-2">VAT: PT311807470</span>
        </p>

        <p className="pt-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} Bryan Lancien. {t.imprint.copyright}
        </p>
      </div>
    </section>
  );
}
