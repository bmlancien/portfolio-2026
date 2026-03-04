import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  // Projects data - easily extensible for future projects
  const projectsData = [
    {
      projectNumber: 1,
      title: 'EmpowerPlan',
      description: 'Web app visualizing the regional energy system of a german region and aims at creating a trans-disciplinary dialogue between decision-makers.',
      imageUrl: '/images/projects/empowerplan.png'
    },
    {
      projectNumber: 2,
      title: 'WWF Energy Dashboard',
      description: 'Dashboard displaying data visualizations such as the daily updated electricity mix or CO2 trends for a climate-neutral Germany.',
      imageUrl: '/images/projects/wwf-energy-dashboard.png'
    },
    {
      projectNumber: 3,
      title: 'Open Energy Platform',
      description: 'Database platform used for research data in energy system analysis.',
      imageUrl: '/images/projects/open-energy-platform.png'
    },
    {
      projectNumber: 4,
      title: 'Agora Photovoltaics and Wind Area Calculator',
      description: 'Dashboard displaying when and where a chosen region is suitable as a wind potential area or for the installation of photovoltaic systems.',
      imageUrl: '/images/projects/agora-calculator.png'
    }
  ];

  return (
    <section id="projects" className="bg-white">
      <div className="max-w-8xl mx-auto px-6 lg:px-8 xl:px-12 py-24">
        {/* Section Header */}
        {/* Downward arrows indicating scrollable content */}
        <div className="flex justify-center space-x-2 mb-8">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="text-3xl text-gray-400 animate-float"
              style={{ animationDelay: `${i * 0.15}s` }}
              aria-hidden="true"
            >
              ↓
            </span>
          ))}
        </div>
        <div className="mb-24">
          <h2 className="text-center text-5xl font-bold font-rajdhani text-gray-700 mb-4">Selected Projects</h2>
          <p className="text-center text-xl font-light text-gray-700">
            A showcase of data-driven interfaces and tools built for the renewable energy sector
          </p>
        </div>

        {/* Projects Grid */}
        <div>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.projectNumber}
              projectNumber={project.projectNumber}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
