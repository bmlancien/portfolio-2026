import React from 'react';

export default function AboutPage() {
  return (
    <section className="py-8 md:py-16 lg:py-24 pb-12 md:pb-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl py-8">About</h1>

        <div className="max-w-2xl flex flex-col gap-6 text-gray-700 leading-relaxed">
          <p>
            I'm a UX/UI designer specialising in the energy transition — the tools, web interfaces,
            and data visualisations that help researchers, planners, policymakers, and common
            citizens make sense of complex systems.
          </p>

          <p>
            For the past eight years I've worked with research institutes, think tanks, and
            startups, designing web applications and interactive tools for problems like regional
            energy planning, charging infrastructure, sustainable transportation, and off-grid
            microgrid solutions. I handle both the design and the visual frontend implementation,
            which means fewer handoff gaps and more considered detail in the final product.
          </p>

          <p>
            My background spans applied arts training, a science degree, and eight years of
            hands-on work in the energy sector, reinforced more recently by TU Delft's certificate
            programme in Intelligent and Integrated Energy Systems.
          </p>

          <p>
            Outside client projects, I make illustrations and have shown work in exhibitions.
            I'm based in Lisbon, work remotely across Europe, and have a high interest in how
            complex systems, such as energy or cities, organise themselves.
          </p>
        </div>
      </div>
    </section>
  );
}
