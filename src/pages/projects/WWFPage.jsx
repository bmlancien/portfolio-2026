import React from 'react';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectHero from '../../components/project/ProjectHero';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectImage from '../../components/project/ProjectImage';
import ProjectDivider from '../../components/project/ProjectDivider';
import { wwf } from '../../data/projects/wwf';
import useT from '../../hooks/useT';

export default function WWFPage() {
  const t = useT();
  const s = t.projects.wwf.sections;
  const h = t.projects.wwf.header;

  return (
    <div className="w-full bg-white pb-10 lg:pb-16 xl:pb-28">
      <ProjectHeader
        organization={wwf.header.organization}
        years={wwf.header.years}
        title={h.title}
        funding={h.funding}
        skills={h.skills}
      />
      <ProjectHero {...wwf.hero} />
      <ProjectSection title={s[0].title}>
        <p>{s[0].body[0]}</p>
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title={s[1].title}>
        <p>{s[1].body[0]}</p>
        <p>{s[1].body[1]}</p>
        <ProjectImage
          src="/images/projects/wwf/wwf-responsive.svg"
          alt={s[1].images[0].alt}
          caption={s[1].images[0].caption}
          width={1440}
          height={1066}
        />
        <ProjectImage
          src="/images/projects/wwf/wwf-desktop.png"
          alt={s[1].images[1].alt}
          caption={s[1].images[1].caption}
          width={1440}
          height={2419}
        />
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title={s[2].title}>
        <p>{s[2].body[0]}</p>
        <p>{s[2].body[1]}</p>
        <ProjectImage
          src="/images/projects/wwf/wwf-first-sketches.svg"
          alt={s[2].images[0].alt}
          caption={s[2].images[0].caption}
          width={1440}
          height={825}
        />
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title={s[3].title}>
        <p>{s[3].body[0]}</p>
        <ProjectImage
          src="/images/projects/wwf/wwf-frames.svg"
          alt={s[3].images[0].alt}
          caption={s[3].images[0].caption}
          width={1440}
          height={844}
        />
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title={s[4].title}>
        <p>{s[4].body[0]}</p>
        <ProjectImage
          src="/images/projects/wwf/wwf-frames2.png"
          alt={s[4].images[0].alt}
          caption={s[4].images[0].caption}
          width={1440}
          height={844}
        />
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title={s[5].title}>
        <p>{s[5].body[0]}</p>
      </ProjectSection>
    </div>
  );
}
