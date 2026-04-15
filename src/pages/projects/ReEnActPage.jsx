import React from 'react';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectHero from '../../components/project/ProjectHero';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectImage from '../../components/project/ProjectImage';
import ProjectDivider from '../../components/project/ProjectDivider';
import { reenact as reenact } from '../../data/projects/reenact';

export default function reenactPage() {
  return (
    <div className="w-full bg-white pb-10 lg:pb-16 xl:pb-28">
      <ProjectHeader {...reenact.header} />
      <ProjectHero {...reenact.hero} />
      <ProjectSection title="A complex topic and a skeptical audience">
        <p>
          The energy transition in rural eastern Germany isn't just a technical question. It's 
          a political one. In some german regions, renewable energy projects might meet real 
          skepticism from residents who distrust political decisions and feel changes are 
          happening around them rather than with them.
        </p>
        <p>
          ReEnAct was a direct response to that tension. The goal: give citizens and local 
          stakeholders an active role in exploring their region's energy future. My role was to 
          design and build the tool that made this possible.
        </p>
        <p>
          The tool had to work for anyone, such as citizens with no energy background, people 
          potentially skeptical of the project, workshop facilitators switching views quickly 
          on an iPad. The underlying system was genuinely complex: wind, multiple PV technologies, 
          biomass, hydrogen, storage, land use, costs, CO₂ targets for 2030 and 2040.
        </p>
        <p>
          Some users wouldn't trust the tool or the people behind it. No interface can fully 
          close that gap, which is why the project included social researchers and facilitators 
          who were closer to the communities. The tool's job was narrower: present real data 
          honestly, and let people explore without feeling pushed.
        </p>
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title="Design decisions">
        <p>
          Every significant decision came from one question: what does this audience need to 
          understand and trust what they're seeing?
        </p>
        <p>
          One solution was including a map. Some residents might fear renewable installations 
          would dominate the landscape. Showing the actual footprint layered against settlement 
          areas and moorland sites made the reality visible in a way numbers alone couldn't.
        </p>
        <ProjectImage
          src="/images/projects/reenact/reenact-map.png"
          alt="Map view of the ReEnAct scenario planning tool"
          caption="The map view was designed to make the spatial implications of different energy scenarios legible to different types of users, including those who might be skeptical of the project. I used bar charts were used throughout the tool, because they are familiar, easy to read and perceptually accurate."
          width={1367}
          height={1869}
        />
        <p>
          Bar charts were used throughout the tool, because even if they can look boring, they are 
          familiar, easy to read and perceptually accurate. Progressive disclosure structured the 
          experience. The most important information came first, in the simplest form. More 
          detailed charts were available for curious users, but hidden by default.
        </p>
        <ProjectImage
          src="/images/projects/reenact/reenact-compare-2.png"
          alt="Scenario comparison view of the ReEnAct scenario planning tool"
          caption="Bar charts were used throughout the tool, because they are familiar, easy to read and perceptually accurate."
          width={1367}
          height={2065}
        />
        <p>
          Context was built into every interaction. Sliders showed markers for current values and 
          targets. Charts included goal lines. Changing a slider updated the results immediately, 
          making the link between decision and consequence visible in real time. Scenarios and 
          technologies could be compared side by side, because isolated numbers are hard to evaluate.
        </p>
        <ProjectImage
          src="/images/projects/reenact/reenact-create.png"
          alt="Scenario creation view of the ReEnAct scenario planning tool"
          caption="The scenario creation view was designed to allow users to easily define and compare different energy scenarios."
          width={1367}
          height={1347}
        />
        <p>
          Costs were treated as a first-class metric. For many citizens, affordability matters more 
          than carbon neutrality. Ignoring costs would have made the tool feel like advocacy.
        </p>
        <ProjectImage
          src="/images/projects/reenact/reenact-compare.png"
          alt="Scenario comparison view of the ReEnAct scenario planning tool"
          caption="Costs as part of the scenario comparison view."
          width={1367}
          height={1147}
        />
        <p>
          The scenario comparison view was the hardest problem. I landed on line charts with goal 
          lines, clickable scenario names that highlighted one at a time, and a cap on simultaneous 
          comparisons.
        </p>
        <ProjectImage
          src="/images/projects/reenact/reenact-compare-3.png"
          alt="Scenario comparison view of the ReEnAct scenario planning tool"
          caption="The user can highlight a specific scenario by clicking on its name, which makes it easier to compare scenarios one at a time."
          width={1367}
          height={1463}
        />
        <ProjectImage
          src="/images/projects/reenact/reenact-compare-4.png"
          alt="Scenario comparison view of the ReEnAct scenario planning tool"
          caption="A cap on simultaneous comparisons was necessary to prevent the view from becoming overwhelming. An option was also displaying a medal next to the best-performing scenario for each metric, but that felt too much like advocacy and was ultimately left out."
          width={1367}
          height={1625}
        />
        <p>
          The data shown is real and unbiased but the tool isn't entirely without a point of view. 
          By making climate-neutral scenarios easy to build, and showing that reaching CO₂ targets 
          often has no negative side effects for the region, the design tries to gently demonstrate 
          that a good outcome is achievable. But that only works if people trust the tool enough to 
          engage with it. For those who don't, the social researchers and facilitators in the room 
          were the more important factor.
        </p>
        <p>
          I built the initial prototype myself using Next.js and Tailwind UI components before the 
          project moved to its final implementation.
        </p>
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title="When the brief changed">
        <p>
          Late in the project, partners revised the workshop format. Everything needed to be visible 
          at once because facilitators couldn't afford the friction of navigating between pages during 
          live sessions. This meant moving from a step-by-step flow to a tab-based layout, with the 
          dashboard, scenario builder, and comparison view all accessible without leaving the screen. 
          A real trade-off: the original flow was better for independent discovery, the new layout 
          was better for workshop use.
        </p>
        <ProjectImage
          src="/images/projects/reenact/reenact-second-version-1.png"
          alt="Second version of the ReEnAct scenario planning tool, with a tab-based layout"
          caption="The second version of the tool, with a tab-based layout to accommodate a change in the workshop format. The dashboard, scenario builder, and comparison view are all accessible without leaving the screen."
          width={1280}
          height={832}
        />
        <ProjectImage
          src="/images/projects/reenact/reenact-second-version-2.png"
          alt="Second version of the ReEnAct scenario planning tool, with a tab-based layout"
          caption="Here it is possible to compare scenarios in a more compact way."
          width={1280}
          height={832}
        />
        <ProjectImage
          src="/images/projects/reenact/reenact-second-version-3.png"
          alt="Second version of the ReEnAct scenario planning tool, with a tab-based layout"
          caption="With the sliders and charts visible at the same time, users can see the impact of their changes in real time, which makes the connection between decision and consequence more immediate."
          width={1280}
          height={832}
        />
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title="How it landed">
        <p>
          The tool was used in a “Planungszelle” — a structured citizen deliberation process — in the 
          Peenetal region, which was very successful.
        </p>
        <p>
          I didn't have direct contact with citizens during the project. Design decisions were based on 
          domain knowledge, design judgment, and close collaboration with the project team, not on 
          firsthand user research. That's a real limitation, and a common one in publicly funded 
          research projects.
        </p>
      </ProjectSection>
      <ProjectDivider />
      <ProjectSection title="What I took away">
        <p>
          Designing for a skeptical public audience means every choice is also a trust decision: what to 
          show first, how to label a chart, whether to include costs.
        </p>
        <p>
          The late pivot to the one-screen layout was a useful reminder that a tool gets used by a real 
          person, in a real room, under time pressure. That context has to be part of the design from the start.
        </p>
      </ProjectSection>
    </div>
  );
}
