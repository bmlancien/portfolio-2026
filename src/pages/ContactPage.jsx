import React from 'react';

export default function ContactPage() {
  return (
    <section className="py-8 md:py-16 lg:py-24 pb-8 lg:pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl py-8">Contact</h1>
        <p className="pb-2">Feel free to reach out by email:</p>
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
