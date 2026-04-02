import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ projectNumber, title, description, imageUrl, link }) => {
  return (
    <div className="mb-24">
      <div className="mb-8">
        <p className="text-sm font-semibold text-gray-600 mb-2">Project {projectNumber}</p>
        <h3 className="text-4xl font-bold font-rajdhani text-gray-700 mb-4">{title}</h3>
        <p className="text-lg text-gray-700 max-w-2xl">{description}</p>
      </div>

      {/* Project Image */}
      <div className="relative">
        {link ? (
          <Link to={link}>
            <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg hover:opacity-90 transition-opacity" />
          </Link>
        ) : (
          <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
