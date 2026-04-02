import React from 'react';

export default function ImprintPage() {
  return (
    <section className="pt-16 pb-8 lg:pt-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-12">
        <h1 className="text-4xl py-8">Imprint</h1>

        <h2 className="text-2xl py-4">Information</h2>
        <p>
          <span className="block pb-2">Bryan Lancien</span>
          <span className="block pb-2">Rua Poeta Mílton 2, 1170-321 Lisboa, Portugal</span>
          <span className="block pb-2">bryanlancien.ui@gmail.com</span>
          <span className="block pb-2">VAT: PT311807470</span>
        </p>

        <p className="pt-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} Bryan Lancien. All rights reserved.
        </p>
      </div>
    </section>
  );
}
