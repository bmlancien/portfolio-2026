export const en = {
  // ─── Navigation ────────────────────────────────────────────────────────────
  nav: {
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },

  // ─── Footer ────────────────────────────────────────────────────────────────
  footer: {
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    imprint: 'Imprint',
    privacy: 'Data Privacy',
    copyright: 'All rights reserved',
  },

  // ─── Homepage — Hero ───────────────────────────────────────────────────────
  hero: {
    heading: 'Data-Heavy Interfaces for Climate Tech',
    subheading:
      '7+ years designing and building dashboards, scenario tools, and map-based interfaces for the renewable energy sector. I help interdisciplinary teams communicate complex energy insights through clear, accessible design.',
  },

  // ─── Homepage — Projects section ───────────────────────────────────────────
  projectsSection: {
    heading: 'Selected Projects',
    subheading: 'A showcase of data-driven interfaces and tools built for the renewable energy sector',
    cards: {
      empowerplan: {
        description:
          'Web app visualizing the regional energy system of a german region and aims at creating a trans-disciplinary dialogue between decision-makers.',
      },
      wwf: {
        description:
          'Dashboard displaying data visualizations such as the daily updated electricity mix or CO₂ trends for a climate-neutral Germany.',
      },
      reenact: {
        description: "A scenario planning tool for citizens shaping their region's energy future.",
      },
      localiser: {
        description: 'A digital platform for EV charging and hydrogen infrastructure planning.',
      },
    },
  },

  // ─── Homepage — Contact section ────────────────────────────────────────────
  contactSection: {
    heading: "Let's connect",
    body: "I'm always excited to explore new opportunities and collaborations, so if you have a project in mind or just want to brainstorm possibilities, don't hesitate to reach out!",
    cta: 'Contact me',
  },

  // ─── About page ────────────────────────────────────────────────────────────
  about: {
    heading: 'About',
    paragraphs: [
      "I'm a UX/UI designer specialising in the energy transition — the tools, web interfaces, and data visualisations that help researchers, planners, policymakers, and common citizens make sense of complex systems.",
      "For the past eight years I've worked with research institutes, think tanks, and startups, designing web applications and interactive tools for problems like regional energy planning, charging infrastructure, sustainable transportation, and off-grid microgrid solutions. I handle both the design and the visual frontend implementation, which means fewer handoff gaps and more considered detail in the final product.",
      "My background spans applied arts training, a science degree, and eight years of hands-on work in the energy sector, reinforced more recently by TU Delft's certificate programme in Intelligent and Integrated Energy Systems.",
      "Outside client projects, I make illustrations and have shown work in exhibitions. I'm based in Lisbon, work remotely across Europe, and have a high interest in how complex systems, such as energy or cities, organise themselves.",
    ],
  },

  // ─── Contact page ──────────────────────────────────────────────────────────
  contactPage: {
    heading: 'Contact',
    intro: 'Feel free to reach out by email:',
  },

  // ─── Imprint page ──────────────────────────────────────────────────────────
  imprint: {
    heading: 'Imprint',
    infoHeading: 'Information',
    copyright: 'All rights reserved.',
  },

  // ─── Privacy page ──────────────────────────────────────────────────────────
  // Paragraphs that contain a hyperlink use { pre, linkText, post } so the
  // component can render the <a> tag in the right place. linkText is the
  // visible anchor text. URLs never change between languages.
  privacy: {
    heading: 'Data Privacy',
    sections: [
      {
        heading: '1. Who is responsible for this website',
        paragraphs: [
          'The data controller for this website is:',
        ],
        // The address block (name, address, email) is not translated
      },
      {
        heading: '2. Hosting',
        paragraphs: [
          'This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. When you visit this website, Vercel automatically records technical server log data in its infrastructure. This includes:',
          'This data is processed on the basis of Art. 6(1)(f) GDPR — the legitimate interest in providing a technically functional and secure website. This data is not merged with any other data sources and is not used to identify individual visitors.',
          {
            pre: 'Data processing by Vercel is governed by a Data Processing Addendum in accordance with Art. 28 GDPR. Vercel is certified under the EU–US Data Privacy Framework, which provides a valid legal basis for data transfers to the United States. For more information, see ',
            linkText: "Vercel's Privacy Policy",
            post: '.',
          },
        ],
        listItems: [
          'IP address',
          'Browser type and version',
          'Operating system',
          'Referring URL',
          'Date and time of the request',
        ],
      },
      {
        heading: '3. Analytics',
        paragraphs: [
          'This website uses Vercel Web Analytics to understand how visitors use the site. This tool does not use cookies, does not collect or store IP addresses, and does not track individual users across sessions or websites. All data is anonymised and used only in aggregate form (page views, referrers, device type, approximate geolocation at country level).',
          {
            pre: 'Because no personal data is collected or stored, this analytics tool does not require your consent. For more information, see ',
            linkText: 'Vercel Analytics Privacy & Compliance',
            post: '.',
          },
        ],
      },
      {
        heading: '4. Contact by email',
        paragraphs: [
          'If you contact me by email, I will store and process your name, email address, and the content of your message for the purpose of responding to your enquiry. This is done on the basis of Art. 6(1)(f) GDPR (legitimate interest in handling communications) or Art. 6(1)(b) GDPR where the enquiry relates to a potential contract.',
          'This data is not shared with third parties and is deleted once it is no longer needed, unless statutory retention obligations require otherwise.',
        ],
      },
      {
        heading: '5. Your rights',
        paragraphs: [
          'Under GDPR, you have the right to:',
          'To exercise any of these rights, contact me at bryanlancien.ui@gmail.com.',
        ],
        listItems: [
          'Request access to any personal data held about you (Art. 15)',
          'Request correction of inaccurate data (Art. 16)',
          'Request deletion of your data (Art. 17)',
          'Request restriction of processing (Art. 18)',
          'Object to processing based on legitimate interests (Art. 21)',
          'Request data portability where applicable (Art. 20)',
        ],
      },
      {
        heading: '6. Right to lodge a complaint',
        paragraphs: [
          {
            pre: 'You have the right to lodge a complaint with a data protection supervisory authority, in particular in the EU member state where you reside, work, or where an alleged infringement occurred. In Portugal, the competent authority is the ',
            linkText: 'Comissão Nacional de Proteção de Dados (CNPD)',
            post: '.',
          },
        ],
      },
    ],
  },

  // ─── Project pages ─────────────────────────────────────────────────────────
  // header.title      — displayed as the large <h1> on each project page
  // header.funding    — optional; omit the key or set to '' to hide it
  // header.skills     — displayed as chips; keep as an array of strings
  // sections          — ordered array matching the JSX top-to-bottom
  //   title           — section heading
  //   body            — ordered array of paragraphs (strings)
  //   images          — ordered array of images within this section
  //     alt           — screen-reader alt text
  //     caption       — visible caption below the image
  projects: {
    empowerplan: {
      header: {
        title: 'Making the energy transition understandable for the people who have to plan it',
        funding: 'Funded by BMWK (7th Energy Research Program)',
        skills: ['UX/UI design', 'Data visualisation & map design', 'UI development'],
      },
      sections: [
        {
          title: 'The missing tool for non-expert decision-makers',
          body: [
            'Regional planners, municipal administrators, and county officials across Germany are expected to make land-use decisions for the future. The problem: as of 2022, there was no tool available that was easy enough to use without a data scientist in the room and rich enough in valuable data and information at the same time.',
            'EmPowerPlan filled the gap. As the lead designer working with Reiner Lemoine Institut, together partners including Öko-Institut and IZT, and tested with stakeholders in the Oderland-Spree region of Brandenburg, my task was to make a complex simulation tool usable by non-expert decision-makers.',
          ],
          images: [
            {
              alt: 'Challenges as first page in the EmPowerPlan prototype',
              caption: 'Users start with the Challenges step',
            },
          ],
        },
        {
          title: "From 'here is data' to 'here is where you stand'",
          body: [
            'The scenario comparison view went through a significant evolution across the project. Early versions displayed scenario data clearly, e.g., wind capacity, PV targets and land requirements, but without a reference point, users still couldn\'t evaluate what they were seeing. The solution was to include state and national goals directly into the same view, so that a planner looking at Oderland-Spree\'s numbers could immediately see how their region compared to Brandenburg and to Germany\'s national targets. That change turned the scenario screen from an information UI into a decision support tool.',
            'A wizard-style flow (Herausforderungen → Region heute → Szenarien → Einstellungen → Ergebnisse) kept the overall experience navigable as requirements grew in complexity across project iterations. Predefined policy scenarios like the Energiestrategie Brandenburg 2030 could be selected as a baseline with a single click, guiding users who didn\'t know where to start.',
          ],
          images: [
            {
              alt: 'After seeing the challenges and regional data in the first two steps, users can compare scenarios to state and national targets in the third step',
              caption: 'After seeing the challenges and regional data in the first two steps, users can compare scenarios to state and national targets in the third step',
            },
            {
              alt: 'Layout overview: Top navigation bar, with side panels for parameters and content, next to the map and charts.',
              caption: 'Layout overview: Top navigation bar, with side panels for parameters and content, next to the map and charts.',
            },
          ],
        },
        {
          title: 'On the technical side, the design had to carry real complexity',
          body: [
            'The underlying model coupled regional energy scenarios with national climate targets, which was quite a challenging data environment. 26 map layers needed to coexist legibly, which I addressed through category-based color grouping and sequential palettes for differentiation within each group. ECharts handled the plotting, Bootstrap kept the frontend simple and maintainable, and accessibility, i.e., keyboard navigation, ARIA structures, contrast compliance, was built in from the start.',
          ],
          images: [
            {
              alt: 'Color palettes used in the EmPowerPlan prototype',
              caption: 'Color palettes for a high number of layers, designed to work together on the same map',
            },
            {
              alt: 'Map view',
              caption: 'Map view with different layers of information, including land use, protected areas, and renewable energy potential',
            },
          ],
        },
        {
          title: 'Several workshop cycles in one region led to measurable change',
          body: [
            'The tool was tested and iterated through workshops with actual stakeholders in Oderland-Spree. I worked from the feedback the research team gathered in each session to iterate on prototypes, then implemented the changes directly in frontend code, which were tested again in the next workshop cycle. Because I handled both design and implementation, changes moved directly from workshop feedback into the interface.',
            'By the final iteration, participants were navigating the tool independently and using scenario comparisons to discuss real planning trade-offs, which was the point.',
          ],
          images: [
            {
              alt: 'Iteration process in the EmPowerPlan prototype',
              caption: 'Iteration process in the EmPowerPlan prototype, with workshops leading to design changes that were implemented directly in the frontend code and tested again in the next workshop cycle',
            },
            {
              alt: 'Results view',
              caption: 'Results view with different layers of information, includind charts and a map view',
            },
          ],
        },
      ],
    },

    wwf: {
      header: {
        title: 'Data visualization dashboard for a climate-neutral Germany',
        funding: 'WWF Germany',
        skills: ['UI design', 'Data visualisation design', 'UI development'],
      },
      sections: [
        {
          title: "Let's bring energy data to life",
          body: [
            'WWF Germany needed a way to display energy data to everyday visitors to their website. The challenge was making that data feel meaningful and legible to someone with no background in energy systems. The brief called for a set of dynamic, interactive visualizations that could be included as an iframe while keeping WWF\'s visual identity.',
          ],
          images: [],
        },
        {
          title: 'The starting point',
          body: [
            'The project began with rough sketches from the partner team: a set of chart concepts that captured what they wanted to communicate. My first task was to turn those sketches into workable mockups and, in doing so, ask the more fundamental question: what is each visualization actually trying to say? That question drove every design decision that followed.',
            'Responsiveness was part of the conversation from the start. Because the visualizations would be embedded across different pages and screen sizes, I had to think about mobile layouts early — before the designs were locked in — rather than retrofitting them at the end. This shaped how I approached the grid structure and how much information each chart could carry at smaller sizes.',
          ],
          images: [
            {
              alt: 'Different mobile sizes for the same visualization',
              caption: 'Different mobile sizes for the same visualization in order to understand what the user would see on different screen sizes',
            },
            {
              alt: 'Desktop view of the visualization layout',
              caption: 'Desktop view of the visualization layout in order to understand what the user would see on the WWF website',
            },
          ],
        },
        {
          title: 'Simplifying without losing meaning',
          body: [
            'Early sketches had too much information competing for attention within a single chart. Several concepts used pie charts that work poorly when comparing more than two values. Position on a common scale is generally the easiest to compare, whereas circles and angles are less precise. I therefore went for column and line charts, which are easier to decode.',
            'The goal was to remove anything that made the reader work harder than necessary. Visual cues like icons, consistent brand colors, and clear typographic hierarchy were added not as decoration but as navigation so that users could orient themselves quickly within each visualization.',
          ],
          images: [
            {
              alt: 'Visualization sketches',
              caption: 'First attempts to reduce the amount of information in each visualization',
            },
          ],
        },
        {
          title: 'Interactivity as storytelling',
          body: [
            'One of the more effective design decisions was the use of a time slider, letting users scrub through historical data at their own pace. Rather than presenting a static snapshot, it turned each chart into a small narrative: you could watch Germany\'s electricity mix shift year by year, or trace the relationship between CO₂ concentration and temperature across decades. The data told its own story once the interface got out of the way.',
          ],
          images: [
            {
              alt: 'WWF visualization mockups',
              caption: 'The user can scrub through the data with a time slider, which turns each chart into a small narrative over time',
            },
          ],
        },
        {
          title: 'Results',
          body: [
            'The final dashboard comprised 11 dynamic visualizations, covering topics from transport emissions to the growth of renewable energy sources to daily electricity production. Each was responsive and designed for iframe integration, so it could be embedded flexibly across the WWF Germany site without layout friction on any screen size.',
          ],
          images: [
            {
              alt: 'WWF visualization mockups',
              caption: 'The final dashboard comprised 11 dynamic visualizations, covering topics from transport emissions to the growth of renewable energy sources to daily electricity production.',
            },
          ],
        },
        {
          title: 'What I took from it',
          body: [
            'Data visualization design always starts with the same question: what do we want the reader to understand? Everything else, like chart type, color or interaction, follows from that. Simple charts are often more effective than complex ones precisely because the reader can focus on the data instead of decoding the format. The harder skill is knowing when a custom chart adds real value and when it just adds noise.',
          ],
          images: [],
        },
      ],
    },

    reenact: {
      header: {
        title: "A scenario planning tool for citizens shaping their region's energy future",
        funding: 'Funded by Bundesministerium für Wirtschaft und Energie and PtJ',
        skills: ['UX/UI design', 'UI development'],
      },
      sections: [
        {
          title: 'A complex topic and a skeptical audience',
          body: [
            "The energy transition in rural eastern Germany isn't just a technical question. It's a political one. In some german regions, renewable energy projects might meet real skepticism from residents who distrust political decisions and feel changes are happening around them rather than with them.",
            'ReEnAct was a direct response to that tension. The goal: give citizens and local stakeholders an active role in exploring their region\'s energy future. My role was to design and build the tool that made this possible.',
            'The tool had to work for anyone, such as citizens with no energy background, people potentially skeptical of the project, workshop facilitators switching views quickly on an iPad. The underlying system was genuinely complex: wind, multiple PV technologies, biomass, hydrogen, storage, land use, costs, CO₂ targets for 2030 and 2040.',
            "Some users wouldn't trust the tool or the people behind it. No interface can fully close that gap, which is why the project included social researchers and facilitators who were closer to the communities. The tool's job was narrower: present real data honestly, and let people explore without feeling pushed.",
          ],
          images: [],
        },
        {
          title: 'Design decisions',
          body: [
            "Every significant decision came from one question: what does this audience need to understand and trust what they're seeing?",
            'One solution was including a map. Some residents might fear renewable installations would dominate the landscape. Showing the actual footprint layered against settlement areas and moorland sites made the reality visible in a way numbers alone couldn\'t.',
            'Bar charts were used throughout the tool, because even if they can look boring, they are familiar, easy to read and perceptually accurate. Progressive disclosure structured the experience. The most important information came first, in the simplest form. More detailed charts were available for curious users, but hidden by default.',
            'Context was built into every interaction. Sliders showed markers for current values and targets. Charts included goal lines. Changing a slider updated the results immediately, making the link between decision and consequence visible in real time. Scenarios and technologies could be compared side by side, because isolated numbers are hard to evaluate.',
            'Costs were treated as a first-class metric. For many citizens, affordability matters more than carbon neutrality. Ignoring costs would have made the tool feel like advocacy.',
            'The scenario comparison view was the hardest problem. I landed on line charts with goal lines, clickable scenario names that highlighted one at a time, and a cap on simultaneous comparisons.',
            "The data shown is real and unbiased but the tool isn't entirely without a point of view. By making climate-neutral scenarios easy to build, and showing that reaching CO₂ targets often has no negative side effects for the region, the design tries to gently demonstrate that a good outcome is achievable. But that only works if people trust the tool enough to engage with it. For those who don't, the social researchers and facilitators in the room were the more important factor.",
            'I built the initial prototype myself using Next.js and Tailwind UI components before the project moved to its final implementation.',
          ],
          images: [
            {
              alt: 'Map view of the ReEnAct scenario planning tool',
              caption: 'The map view was designed to make the spatial implications of different energy scenarios legible to different types of users, including those who might be skeptical of the project. I used bar charts were used throughout the tool, because they are familiar, easy to read and perceptually accurate.',
            },
            {
              alt: 'Scenario comparison view of the ReEnAct scenario planning tool',
              caption: 'Bar charts were used throughout the tool, because they are familiar, easy to read and perceptually accurate.',
            },
            {
              alt: 'Scenario creation view of the ReEnAct scenario planning tool',
              caption: 'The scenario creation view was designed to allow users to easily define and compare different energy scenarios.',
            },
            {
              alt: 'Scenario comparison view of the ReEnAct scenario planning tool',
              caption: 'Costs as part of the scenario comparison view.',
            },
            {
              alt: 'Scenario comparison view of the ReEnAct scenario planning tool',
              caption: 'The user can highlight a specific scenario by clicking on its name, which makes it easier to compare scenarios one at a time.',
            },
            {
              alt: 'Scenario comparison view of the ReEnAct scenario planning tool',
              caption: 'A cap on simultaneous comparisons was necessary to prevent the view from becoming overwhelming. An option was also displaying a medal next to the best-performing scenario for each metric, but that felt too much like advocacy and was ultimately left out.',
            },
          ],
        },
        {
          title: 'When the brief changed',
          body: [
            "Late in the project, partners revised the workshop format. Everything needed to be visible at once because facilitators couldn't afford the friction of navigating between pages during live sessions. This meant moving from a step-by-step flow to a tab-based layout, with the dashboard, scenario builder, and comparison view all accessible without leaving the screen. A real trade-off: the original flow was better for independent discovery, the new layout was better for workshop use.",
          ],
          images: [
            {
              alt: 'Second version of the ReEnAct scenario planning tool, with a tab-based layout',
              caption: 'The second version of the tool, with a tab-based layout to accommodate a change in the workshop format. The dashboard, scenario builder, and comparison view are all accessible without leaving the screen.',
            },
            {
              alt: 'Second version of the ReEnAct scenario planning tool, with a tab-based layout',
              caption: 'Here it is possible to compare scenarios in a more compact way.',
            },
            {
              alt: 'Second version of the ReEnAct scenario planning tool, with a tab-based layout',
              caption: 'With the sliders and charts visible at the same time, users can see the impact of their changes in real time, which makes the connection between decision and consequence more immediate.',
            },
          ],
        },
        {
          title: 'How it landed',
          body: [
            'The tool was used in a "Planungszelle" — a structured citizen deliberation process — in the Peenetal region, which was very successful.',
            "I didn't have direct contact with citizens during the project. Design decisions were based on domain knowledge, design judgment, and close collaboration with the project team, not on firsthand user research. That's a real limitation, and a common one in publicly funded research projects.",
          ],
          images: [],
        },
        {
          title: 'What I took away',
          body: [
            'Designing for a skeptical public audience means every choice is also a trust decision: what to show first, how to label a chart, whether to include costs.',
            'The late pivot to the one-screen layout was a useful reminder that a tool gets used by a real person, in a real room, under time pressure. That context has to be part of the design from the start.',
          ],
          images: [],
        },
      ],
    },

    localiser: {
      header: {
        title: 'Lead Designer for a Charging Infrastructure Planning Platform',
        funding: '',
        skills: ['UX/UI design', 'UI development', 'Map design', 'Visual design'],
      },
      sections: [
        {
          title: 'A tool for both site planning and hydrogen along the value chain',
          body: [
            'Localiser is a web application for EV charging infrastructure planning. It helps planners, investors, and municipalities identify viable locations by combining a geographical data with planning and assessment tools. The platform has since expanded into a marketplace for hydrogen infrastructure, adding a second domain with its own data layers and user flows.',
            "I've been the de facto design lead since the early stages of the product, working with full design autonomy across the app, the website, and supporting visual work.",
          ],
          images: [],
        },
        {
          title: 'The charging point view grew beyond what a modal could hold',
          body: [
            'Users can view and add potential charging points to the map. It is possible to add information and, most importantly, evaluate the viability of the potential charging point. Early on, this was done on a modal to keep the interface clean. But as the feature matured, so did its content: location data, technical parameters, files, accessibility information, and an assessment of the site\'s viability. The modal was running out of room.',
            'More importantly, hiding the map while users reviewed a location was working against them. The whole point of the tool is understanding a site in the context of its surroundings. Choosing to keep both visible at the same time was the right decision to take. Therefore the modal became a persistent side panel, allowing the map to always stay in view.',
          ],
          images: [
            {
              alt: 'From a modal to a persistent side panel.',
              caption: 'From a modal to a persistent side panel. The feature grew to be an information hub for the site, and keeping the map in view was crucial to the user flow.',
            },
          ],
        },
        {
          title: 'The assessment section needed a different kind of structure',
          body: [
            'Within the charging point view, the viability assessment presented its own readability problem. The original design used a table for key values and a flat list for additional indicators, which is functional, but cognitively flat. Everything had the same visual weight, which made it hard to quickly identify what mattered.',
            'The list became categorized boxes, grouping related indicators together under clear headings. The table stayed. The result was a section that users could scan rather than read, with structure that reflected how the information was actually organized, not just how it arrived as raw data.',
          ],
          images: [
            {
              alt: 'Change between the original table and list design and the new categorized boxes design.',
              caption: 'Change between the original table and list design and the new categorized boxes design. The new design has a clear hierarchy, with key indicators grouped in boxes.',
            },
          ],
        },
        {
          title: '40+ layers, two domains, one coherent visual system',
          body: [
            'The Digitalatlas, a main feature of the web app, aggregates over 40 data layers: existing charging infrastructure, grid capacity, demand potential, points of interest, land use, and more. The H2 Marketplace, on the other hand, has a separate set of hydrogen-specific layers. Each layer needs to be visually distinct, immediately recognizable, and consistent with the others.',
            "I designed icon sets for both domains. This kind of work sits between data visualization and visual identity. The icons aren't decoration, they're part of how users navigate and interpret the map.",
          ],
          images: [
            {
              alt: 'Different map layers',
              caption: 'Different map layers for better planning.',
            },
            {
              alt: 'Overview of the Digitalatlas.',
              caption: 'Overview of the Digitalatlas. The map has over 40 layers, divided into different categories.',
            },
            {
              alt: 'Hydrogen-specific icons for the H2 Marketplace.',
              caption: 'Hydrogen-specific icons for the H2 Marketplace. These icons help users quickly identify and understand the different types of hydrogen infrastructure.',
            },
          ],
        },
        {
          title: 'Owning the full product surface',
          body: [
            "Six years of recurring work means the scope has grown well beyond the app. I designed and implemented the public website, and it will be migrated to a open-source Python CMS, in order to improve it visually and reducing the difficulties of a multilingual website. I've handled French localization for the platform, and produced graphic design work for presentations and the icon systems mentioned above.",
          ],
          images: [],
        },
      ],
    },
  },
};
