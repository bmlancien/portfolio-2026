import React from 'react';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectHero from '../../components/project/ProjectHero';
import { empowerplan } from '../../data/projects/empowerplan';

export default function EmpowerPlanPage() {
  return (
    <div className="w-full bg-white">
      <ProjectHeader {...empowerplan.header} />
      <ProjectHero {...empowerplan.hero} />
    </div>
  );
}
