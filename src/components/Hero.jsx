import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-8xl mx-auto px-6 lg:px-8 xl:px-12 py-8 md:py-16 lg:py-20 pt-16 lg:pt-24 xl:pt-32">
        <div className="flex flex-col lg:flex-row items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold font-rajdhani text-gray-700 mb-4 leading-tight">
              Data-Heavy Interfaces for Climate Tech
            </h1>
            <p className="text-base md:text-lg lg:text-xl xl:text-3xl font-light text-gray-700">
              7+ years designing and building dashboards, scenario tools, and map-based interfaces for the renewable energy sector. 
              I help interdisciplinary teams communicate complex energy insights through clear, accessible design.
            </p>
          </div>
          <div className="flex items-center justify-center w-full max-w-[16rem] md:max-w-[20rem] lg:max-w-[26rem] pt-8 lg:pt-0">
            <img src="/images/hero_img.svg" alt="Hero illustration" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
