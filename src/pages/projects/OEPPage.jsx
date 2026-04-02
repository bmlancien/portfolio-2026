import React from 'react';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectHero from '../../components/project/ProjectHero';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectImage from '../../components/project/ProjectImage';
import ProjectDivider from '../../components/project/ProjectDivider';
import { empowerplan as oep } from '../../data/projects/oep';

export default function OEPPage() {
  return (
    <>
      <div className="w-full bg-white">
        <ProjectHeader {...oep.header} />
        <ProjectHero {...oep.hero} />
      </div>
    </>
  );
}
