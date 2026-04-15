import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  // Projects data - easily extensible for future projects
  const projectsData = [
    {
      projectNumber: 1,
      title: 'EmpowerPlan',
      description: 'Web app visualizing the regional energy system of a german region and aims at creating a trans-disciplinary dialogue between decision-makers.',
      imageUrl: '/images/projects/empowerplan.png',
      link: '/projects/epp'
    },
    {
      projectNumber: 2,
      title: 'WWF Energy Dashboard',
      description: 'Dashboard displaying data visualizations such as the daily updated electricity mix or CO2 trends for a climate-neutral Germany.',
      imageUrl: '/images/projects/wwf-energy-dashboard.svg',
      link: '/projects/wwf-germany'
    },
    {
      projectNumber: 3,
      title: 'ReEnAct',
      description: 'A scenario planning tool for citizens shaping their region\'s energy future.',
      imageUrl: '/images/projects/reenact.svg',
      link: '/projects/reenact'
    },
    {
      projectNumber: 4,
      title: 'Localiser',
      description: 'A digital platform for EV charging and hydrogen infrastructure planning.',
      imageUrl: '/images/projects/localiser.svg',
      link: '/projects/localiser'
    },
  ];

  return (
    <section id="projects" className="bg-white">
      <div className="max-w-8xl mx-auto px-6 lg:px-8 xl:px-12 pt-0 2xl:pt-8 pb-12 lg:pb-20">
        {/* Section Header */}
        <div className="mb-8 lg:mb-10">
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-rajdhani text-gray-700 lg:mb-4">Selected Projects</h2>
          <p className="text-center text-base md:text-lg lg:text-xl font-light text-gray-700">
            A showcase of data-driven interfaces and tools built for the renewable energy sector
          </p>
        </div>

        {/* Projects Grid */}
        <div>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.projectNumber}
              projectNumber={project.projectNumber}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
              delay={index * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
