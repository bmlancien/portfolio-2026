# Component Architecture & Structure

## Overview

The portfolio website is built with a modular, component-based architecture that allows for easy reuse and maintainability.

## Complete File Structure

```
portfolio_2026/
├── public/
│   └── images/
│       ├── logo.png                          [TODO: Add logo]
│       └── projects/
│           ├── empowerplan.png               [TODO: Add image]
│           ├── wwf-energy-dashboard.png      [TODO: Add image]
│           ├── open-energy-platform.png      [TODO: Add image]
│           └── agora-calculator.png          [TODO: Add image]
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                        (Reusable - all pages)
│   │   ├── Footer.jsx                        (Reusable - all pages)
│   │   ├── Hero.jsx                          (Homepage only)
│   │   ├── Projects.jsx                      (Homepage only - container)
│   │   └── ProjectCard.jsx                   (Reusable - rendered 4x via Projects)
│   │
│   ├── pages/
│   │   └── HomePage.jsx                      (Combines all sections)
│   │
│   ├── App.jsx                               (Main app wrapper)
│   ├── App.css                               (App styles)
│   ├── index.css                             (Global + Tailwind directives)
│   └── main.jsx                              (Entry point)
│
├── index.html                                (HTML template)
├── vite.config.js                            (Vite configuration)
├── tailwind.config.js                        (Tailwind CSS configuration)
├── postcss.config.js                         (PostCSS configuration)
├── package.json                              (Dependencies & scripts)
|
├── README.md                                 (Main documentation)
├── IMAGE_PLACEMENT_GUIDE.md                  (This file's sibling)
└── .gitignore
```

## Component Hierarchy

```
HomePage (page)
├── Navbar (reusable - on all pages)
│   ├── Logo [TODO: Add here]
│   ├── Navigation Links (Projects, About, Contact)
│   └── Social Icons (GitHub, LinkedIn)
│
├── Hero (homepage specific)
│   ├── Title
│   ├── Description
│   └── Hero Image [TODO: Add here]
│
├── Projects (homepage specific)
│   └── ProjectCard (reusable - rendered 4 times)
│       ├── Project Label (e.g., "Project 1")
│       ├── Project Title
│       ├── Project Description
│       └── Project Image [TODO: Add here]
│
├── Contact (homepage specific)
│   ├── Section Title
│   ├── Description
│   └── CTA Button
│
└── Footer (reusable - on all pages)
    ├── Logo [TODO: Add here]
    ├── Copyright
    ├── Navigation Links
    ├── Social Links
    └── Legal Links (Imprint, Data Privacy)
```

## Reusable vs Page-Specific

### Reusable Components (appear on all pages)
- **Navbar** - Top navigation with logo, nav links, and social icons
- **Footer** - Bottom section with logo, links, and legal info
- **ProjectCard** - Single project display (used 4x on homepage)

### Homepage-Specific Components
- **Hero** - Large hero section with title, description, and image
- **Projects** - Container managing the ProjectCard instances
- **Contact** - CTA section with newsletter signup or contact CTA

### Page Composition
All pages follow this pattern:
```jsx
const PageName = () => (
  <div>
    <Navbar />
    {/* Page-specific content here */}
    <Footer />
  </div>
);
```

## Data Flow

### Projects Component
The `Projects.jsx` component manages all project data:

```jsx
const projectsData = [
  { projectNumber: 1, title: '...', description: '...', imageUrl: '...' },
  { projectNumber: 2, title: '...', description: '...', imageUrl: '...' },
  { projectNumber: 3, title: '...', description: '...', imageUrl: '...' },
  { projectNumber: 4, title: '...', description: '...', imageUrl: '...' }
];

// Maps over data and renders ProjectCard for each
{projectsData.map((project) => (
  <ProjectCard key={project.projectNumber} {...project} />
))}
```

**Benefits:**
- Easy to add/remove/reorder projects
- Image URLs managed in one place
- ProjectCard stays a "dumb" reusable component

## Adding New Pages

To create a new page (e.g., About, Contact Details):

1. **Create the page file:** `src/pages/AboutPage.jsx`
```jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => (
  <div>
    <Navbar />
    {/* Your about-specific content */}
    <Footer />
  </div>
);

export default AboutPage;
```

2. **Update App.jsx** to use React Router (if adding routing):
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Styling Approach

- **Framework:** Tailwind CSS (utility-first)
- **Location:** Class names directly in JSX
- **Config:** `tailwind.config.js` for customization
- **Global Styles:** `src/index.css` for base styles

### Common Tailwind Classes Used
- Spacing: `px-12`, `py-24` (padding)
- Layout: `grid`, `flex`, `grid-cols-2`
- Typography: `text-5xl`, `font-bold`, `text-gray-900`
- Sizing: `w-full`, `aspect-square`, `aspect-video`
- Borders & Rounding: `border`, `rounded-lg`
- Hover States: `hover:text-gray-600`, `hover:bg-gray-800`

## Environment & Build

- **Dev Server:** `npm run dev` → http://localhost:3000
- **Build:** `npm run build` → optimized output in `dist/`
- **Build Tool:** Vite (fast HMR, optimized production builds)

## TODO Checklist

- [ ] Add logo image to `public/images/logo.png`
- [ ] Uncomment `<img>` tag in Navbar.jsx
- [ ] Uncomment `<img>` tag in Footer.jsx
- [ ] Create `public/images/projects/` directory
- [ ] Add all 4 project images:
  - [ ] `empowerplan.png`
  - [ ] `wwf-energy-dashboard.png`
  - [ ] `open-energy-platform.png`
  - [ ] `agora-calculator.png`
- [ ] Uncomment `<img>` tag in ProjectCard.jsx
- [ ] Update social links in Navbar.jsx (GitHub, LinkedIn URLs)
- [ ] Update social links in Footer.jsx
- [ ] Update contact button action in Contact.jsx
- [ ] Update imprint and privacy policy links in Footer.jsx
- [ ] Setup responsive breakpoints (if needed) in tailwind.config.js
