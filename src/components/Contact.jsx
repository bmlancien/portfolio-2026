import React from 'react';
import { Link } from 'react-router-dom';
import FadeInView from './FadeInView';
import useT from '../hooks/useT';

const Contact = () => {
  const t = useT();
  return (
    <section id="contact" className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-12 py-24">
        <FadeInView className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-rajdhani text-gray-700 mb-6">{t.contactSection.heading}</h2>
          <p className="text-lg text-gray-700 mb-12">{t.contactSection.body}</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-gray-700 text-white font-medium font-rajdhani rounded-lg hover:bg-gray-600 transition"
          >
            {t.contactSection.cta}
          </Link>
        </FadeInView>
      </div>
    </section>
  );
};

export default Contact;
