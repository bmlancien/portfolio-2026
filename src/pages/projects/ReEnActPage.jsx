import React from 'react';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectHero from '../../components/project/ProjectHero';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectImage from '../../components/project/ProjectImage';
import ProjectDivider from '../../components/project/ProjectDivider';
import { reenact } from '../../data/projects/reenact';
import useT from '../../hooks/useT';

export default function ReEnActPage() {
  const t = useT();
  const s = t.projects.reenact.sections;
  const h = t.projects.reenact.header;

  return (
    <div className="w-full bg-white pb-10 lg:pb-16 xl:pb-28">
      <ProjectHeader
        organization={reenact.header.organization}
        years={reenact.header.years}
        title={h.title}
        funding={h.funding}
        tagline={h.tagline}
        skills={h.skills}
      />
      <ProjectHero {...reenact.hero} />
      <ProjectSection title={s[0].title}>
        <p>{s[0].body[0]}</p>
        <p>{s[0].body[1]}</p>
        <p>{s[0].body[2]}</p>
        <p>{s[0].body[3]}</p>
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title={s[1].title}>
        <p>{s[1].body[0]}</p>
        <p>{s[1].body[1]}</p>
        <ProjectImage
          src="/images/projects/reenact/reenact-map.png"
          alt={s[1].images[0].alt}
          caption={s[1].images[0].caption}
          width={1367}
          height={1869}
        />
        <p>{s[1].body[2]}</p>
        <ProjectImage
          src="/images/projects/reenact/reenact-compare-2.png"
          alt={s[1].images[1].alt}
          caption={s[1].images[1].caption}
          width={1367}
          height={2065}
        />
        <p>{s[1].body[3]}</p>
        <ProjectImage
          src="/images/projects/reenact/reenact-create.png"
          alt={s[1].images[2].alt}
          caption={s[1].images[2].caption}
          width={1367}
          height={1347}
        />
        <p>{s[1].body[4]}</p>
        <ProjectImage
          src="/images/projects/reenact/reenact-compare.png"
          alt={s[1].images[3].alt}
          caption={s[1].images[3].caption}
          width={1367}
          height={1147}
        />
        <p>{s[1].body[5]}</p>
        <p>{s[1].body[6]}</p>
        <ProjectImage
          src="/images/projects/reenact/reenact-compare-3.png"
          alt={s[1].images[4].alt}
          caption={s[1].images[4].caption}
          width={1367}
          height={1463}
        />
        <ProjectImage
          src="/images/projects/reenact/reenact-compare-4.png"
          alt={s[1].images[5].alt}
          caption={s[1].images[5].caption}
          width={1367}
          height={1625}
        />
        <p>{s[1].body[7]}</p>
        <p>{s[1].body[8]}</p>
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title={s[2].title}>
        <p>{s[2].body[0]}</p>
        <ProjectImage
          src="/images/projects/reenact/reenact-second-version-1.png"
          alt={s[2].images[0].alt}
          caption={s[2].images[0].caption}
          width={1280}
          height={832}
        />
        <ProjectImage
          src="/images/projects/reenact/reenact-second-version-2.png"
          alt={s[2].images[1].alt}
          caption={s[2].images[1].caption}
          width={1280}
          height={832}
        />
        <ProjectImage
          src="/images/projects/reenact/reenact-second-version-3.png"
          alt={s[2].images[2].alt}
          caption={s[2].images[2].caption}
          width={1280}
          height={832}
        />
        <p>{s[2].body[1]}</p>
        <p>
          {s[2].body[2].pre}
          <a href={s[2].body[2].href} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-800 transition-colors">
            {s[2].body[2].linkText}
          </a>
          {s[2].body[2].post}
        </p>
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title={s[3].title}>
        <p>{s[3].body[0]}</p>
        <p>{s[3].body[1]}</p>
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title={s[4].title}>
        <p>{s[4].body[0]}</p>
        <p>{s[4].body[1]}</p>
      </ProjectSection>
    </div>
  );
}
