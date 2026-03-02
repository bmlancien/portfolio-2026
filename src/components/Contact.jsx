import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-12 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's connect</h2>
          <p className="text-lg text-gray-700 mb-12">
            I'm always excited to explore new opportunities and collaborations, so if you have a project in mind 
            or just want to brainstorm possibilities, don't hesitate to reach out!
          </p>
          
          {/* Contact Button */}
          <button className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition">
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
