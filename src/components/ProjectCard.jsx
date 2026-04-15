import React from 'react';
import { Link } from 'react-router-dom';
import FadeInView from './FadeInView';

const ProjectCard = ({ projectNumber, title, description, imageUrl, link, delay = 0 }) => {
  return (
    <FadeInView delay={delay} className="mb-24">
      <div className="mb-8">
        <p className="text-sm font-semibold text-gray-600 mb-2">Project {projectNumber}</p>
        <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-rajdhani text-gray-700 mb-4">{title}</h3>
        <p className="text-base xl:text-lg text-gray-700 max-w-2xl">{description}</p>
      </div>

      {/* Project Image */}
      <div className="relative">
        {link ? (
          <Link to={link}>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto rounded-2xl project-card-image"
            />
          </Link>
        ) : (
          <img src={imageUrl} alt={title} className="w-full h-auto rounded-xl" />
        )}
      </div>
    </FadeInView>
  );
};

export default ProjectCard;
