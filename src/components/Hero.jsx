import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-12 py-24">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Data-Heavy Interfaces for Climate Tech
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              7+ years designing and building dashboards, scenario tools, and map-based interfaces for the renewable energy sector. 
              I help interdisciplinary teams communicate complex energy insights through clear, accessible design.
            </p>
          </div>

          {/* Right Image Placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full">
              <img src="/images/hero_img.svg" alt="Hero illustration" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
