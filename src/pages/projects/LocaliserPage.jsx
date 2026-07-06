import React from 'react';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectHero from '../../components/project/ProjectHero';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectImage from '../../components/project/ProjectImage';
import ProjectDivider from '../../components/project/ProjectDivider';
import { localiser } from '../../data/projects/localiser';
import useT from '../../hooks/useT';

export default function LocaliserPage() {
  const t = useT();
  const s = t.projects.localiser.sections;
  const h = t.projects.localiser.header;

  return (
    <div className="w-full bg-white pb-6 lg:pb-12 xl:pb-24">
      <ProjectHeader
        organization={localiser.header.organization}
        years={localiser.header.years}
        title={h.title}
        funding={h.funding}
        tagline={h.tagline}
        skills={h.skills}
      />
      <ProjectHero {...localiser.hero} />
      <div className="mt-12 lg:mt-16 xl:mt-24"></div>
      <ProjectSection title={s[0].title}>
        <p>{s[0].body[0]}</p>
        <p>{s[0].body[1]}</p>
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title={s[1].title}>
        <p>{s[1].body[0]}</p>
        <p>{s[1].body[1]}</p>
        <ProjectImage
          src="/images/projects/localiser/localiser-lis.png"
          alt={s[1].images[0].alt}
          caption={s[1].images[0].caption}
          width={1440}
          height={2929}
        />
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title={s[2].title}>
        <p>{s[2].body[0]}</p>
        <p>{s[2].body[1]}</p>
        <ProjectImage
          src="/images/projects/localiser/localiser-lis-assessment.png"
          alt={s[2].images[0].alt}
          caption={s[2].images[0].caption}
          width={1440}
          height={1364}
        />
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title={s[3].title}>
        <p>{s[3].body[0]}</p>
        <ProjectImage
          src="/images/projects/localiser/localiser-maps.png"
          alt={s[3].images[0].alt}
          caption={s[3].images[0].caption}
          width={1440}
          height={1550}
        />
        <ProjectImage
          src="/images/projects/localiser/localiser-map-infrastructure.png"
          alt={s[3].images[1].alt}
          caption={s[3].images[1].caption}
          width={1440}
          height={1024}
        />
        <p>{s[3].body[1]}</p>
        <ProjectImage
          src="/images/projects/localiser/localiser-h2-icons.png"
          alt={s[3].images[2].alt}
          caption={s[3].images[2].caption}
          width={1440}
          height={1275}
        />
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title={s[4].title}>
        <p>{s[4].body[0]}</p>
      </ProjectSection>
    </div>
  );
}
