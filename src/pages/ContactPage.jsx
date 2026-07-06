import React from 'react';
import useT from '../hooks/useT';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);


export default function ContactPage() {
  const t = useT();
  return (
    <section className="py-8 md:py-16 lg:py-24 pb-12 md:pb-20 lg:pb-32">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl py-8">{t.contactPage.heading}</h1>
        <div className="max-w-2xl flex flex-col gap-6 text-gray-700 leading-relaxed">
          <p>{t.contactPage.paragraphs[0]}</p>
          <p>{t.contactPage.paragraphs[1]}</p>
          <a
            href="mailto:bryanlancien.ui@gmail.com"
            className="flex items-center gap-3 text-gray-700 hover:text-gray-500 w-fit"
          >
            <MailIcon />
            <span className="underline">bryanlancien.ui@gmail.com</span>
          </a>
          <p>{t.contactPage.note}</p>
          <p>
            {t.contactPage.linkedin.pre}
            <a
              href={t.contactPage.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-500"
            >
              {t.contactPage.linkedin.linkText}
            </a>
            {t.contactPage.linkedin.post}
          </p>
        </div>
      </div>
    </section>
  );
}
