import React from 'react';
import ProjectCard from './ProjectCard';
import FadeInView from './FadeInView';
import { en } from '../i18n/en';

const Projects = () => {
  // Projects data - easily extensible for future projects
  const projectsData = [
    {
      id: 'empowerplan',
      projectNumber: 1,
      title: 'EmpowerPlan',
      imageUrl: '/images/projects/empowerplan.png',
      link: '/projects/epp'
    },
    {
      id: 'wwf',
      projectNumber: 2,
      title: 'WWF Energy Dashboard',
      imageUrl: '/images/projects/wwf-energy-dashboard.svg',
      link: '/projects/wwf-germany'
    },
    {
      id: 'reenact',
      projectNumber: 3,
      title: 'ReEnAct',
      imageUrl: '/images/projects/reenact.svg',
      link: '/projects/reenact'
    },
    {
      id: 'localiser',
      projectNumber: 4,
      title: 'Localiser',
      imageUrl: '/images/projects/localiser.png',
      link: '/projects/localiser'
    },
  ];

  return (
    <section id="projects" className="bg-white">
      <div className="max-w-8xl mx-auto px-6 lg:px-8 xl:px-12 pt-0 2xl:pt-8 pb-12 lg:pb-20">
        {/* Section Header */}
        <FadeInView className="mb-8 lg:mb-10">
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-rajdhani text-gray-700 lg:mb-4">Selected Projects</h2>
          <p className="text-center text-base md:text-lg lg:text-xl font-light text-gray-700">
            A showcase of data-driven interfaces and tools built for the renewable energy sector
          </p>
        </FadeInView>

        {/* Projects Grid */}
        <div>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.projectNumber}
              projectNumber={project.projectNumber}
              title={project.title}
              description={en.projectsSection.cards[project.id].description}
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
