import React from 'react';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectHero from '../../components/project/ProjectHero';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectImage from '../../components/project/ProjectImage';
import ProjectDivider from '../../components/project/ProjectDivider';
import { empowerplan } from '../../data/projects/empowerplan';
import useT from '../../hooks/useT';

export default function EmpowerPlanPage() {
  const t = useT();
  const s = t.projects.empowerplan.sections;
  const h = t.projects.empowerplan.header;

  return (
    <div className="w-full bg-white pb-10 lg:pb-16 xl:pb-28">
      <ProjectHeader
        organization={empowerplan.header.organization}
        years={empowerplan.header.years}
        title={h.title}
        funding={h.funding}
        tagline={h.tagline}
        skills={h.skills}
      />
      <ProjectHero {...empowerplan.hero} />
      <ProjectSection title={s[0].title}>
        <p>{s[0].body[0]}</p>
        <p>{s[0].body[1]}</p>
        <ProjectImage
          src="/images/projects/epp/epp-challenges.svg"
          alt={s[0].images[0].alt}
          caption={s[0].images[0].caption}
          width={1280}
          height={673}
        />
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title={s[1].title}>
        <p>{s[1].body[0]}</p>
        <ProjectImage
          src="/images/projects/epp/epp-scenarios.svg"
          alt={s[1].images[0].alt}
          caption={s[1].images[0].caption}
          width={1282}
          height={822}
        />
        <p>{s[1].body[1]}</p>
        <ProjectImage
          src="/images/projects/epp/epp-wizard.svg"
          alt={s[1].images[1].alt}
          caption={s[1].images[1].caption}
          width={806}
          height={524}
        />
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title={s[2].title}>
        <p>{s[2].body[0]}</p>
        <ProjectImage
          src="/images/projects/epp/epp-palettes.png"
          alt={s[2].images[0].alt}
          caption={s[2].images[0].caption}
          width={1440}
          height={2447}
        />
        <ProjectImage
          src="/images/projects/epp/epp-map.png"
          alt={s[2].images[1].alt}
          caption={s[2].images[1].caption}
          width={1440}
          height={901}
        />
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title={s[3].title}>
        <p>{s[3].body[0]}</p>
        <ProjectImage
          src="/images/projects/epp/epp-iteration.png"
          alt={s[3].images[0].alt}
          caption={s[3].images[0].caption}
          width={1440}
          height={329}
        />
        <p>{s[3].body[1]}</p>
        <ProjectImage
          src="/images/projects/epp/epp-results.png"
          alt={s[3].images[1].alt}
          caption={s[3].images[1].caption}
          width={1280}
          height={1031}
        />
      </ProjectSection>
    </div>
  );
}
