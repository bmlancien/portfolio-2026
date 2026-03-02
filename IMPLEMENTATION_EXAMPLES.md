# Implementation Examples

Complete code examples showing how to implement the images and logos.

## Adding the Logo

### Example 1: Navbar Logo (Recommended Implementation)

**File:** `src/components/Navbar.jsx`  
**Lines:** 14-19

**Before (Placeholder):**
```jsx
const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-12 py-4 flex items-center justify-between h-18">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          {/* TODO: Add logo image here */}
          {/* <img src="/path/to/logo.png" alt="Logo" className="w-9 h-10" /> */}
          <div className="w-9 h-10 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">
            BL
          </div>
          <span className="text-lg font-semibold text-gray-900">Bryan Lancien</span>
        </div>
        {/* ... rest of navbar ... */}
      </div>
    </nav>
  );
};
```

**After (Logo Added):**
```jsx
const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-12 py-4 flex items-center justify-between h-18">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img src="/images/logo.png" alt="Logo" className="w-9 h-10" />
          <span className="text-lg font-semibold text-gray-900">Bryan Lancien</span>
        </div>
        {/* ... rest of navbar ... */}
      </div>
    </nav>
  );
};
```

---

## Adding Project Images

### Example 2: ProjectCard Implementation

**File:** `src/components/ProjectCard.jsx`

**Before (Placeholder):**
```jsx
const ProjectCard = ({ projectNumber, title, description, imageUrl }) => {
  return (
    <div className="mb-24">
      <div className="mb-8">
        <p className="text-sm font-semibold text-gray-600 mb-2">Project {projectNumber}</p>
        <h3 className="text-4xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-lg text-gray-700 max-w-2xl">{description}</p>
      </div>
      
      {/* Project Image */}
      <div className="relative">
        {/* TODO: Replace with actual project image */}
        {/* <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" /> */}
        <div className="w-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg aspect-video flex items-center justify-center">
          <div className="text-center">
            <span className="text-gray-500 font-medium">
              {title} Project Image<br />
              <span className="text-sm text-gray-400">(Add image: {imageUrl || 'path/to/image.png'})</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
```

**After (Images Added):**
```jsx
const ProjectCard = ({ projectNumber, title, description, imageUrl }) => {
  return (
    <div className="mb-24">
      <div className="mb-8">
        <p className="text-sm font-semibold text-gray-600 mb-2">Project {projectNumber}</p>
        <h3 className="text-4xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-lg text-gray-700 max-w-2xl">{description}</p>
      </div>
      
      {/* Project Image */}
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};
```

---

### Example 3: Projects Data with Images

**File:** `src/components/Projects.jsx`

```jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectsData = [
    {
      projectNumber: 1,
      title: 'EmpowerPlan',
      description: 'Web app visualizing the regional energy system of a german region and aims at creating a trans-disciplinary dialogue between decision-makers.',
      imageUrl: '/images/projects/empowerplan.png'  // ← Image path
    },
    {
      projectNumber: 2,
      title: 'WWF Energy Dashboard',
      description: 'Dashboard displaying data visualizations such as the daily updated electricity mix or CO2 trends for a climate-neutral Germany.',
      imageUrl: '/images/projects/wwf-energy-dashboard.png'  // ← Image path
    },
    {
      projectNumber: 3,
      title: 'Open Energy Platform',
      description: 'Database platform used for research data in energy system analysis.',
      imageUrl: '/images/projects/open-energy-platform.png'  // ← Image path
    },
    {
      projectNumber: 4,
      title: 'Agora Photovoltaics and Wind Area Calculator',
      description: 'Dashboard displaying when and where a chosen region is suitable as a wind potential area or for the installation of photovoltaic systems.',
      imageUrl: '/images/projects/agora-calculator.png'  // ← Image path
    }
  ];

  return (
    <section id="projects" className="bg-white">
      <div className="max-w-7xl mx-auto px-12 py-24">
        <div className="mb-24">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Selected Projects</h2>
          <p className="text-xl text-gray-700">
            A showcase of data-driven interfaces and tools built for the renewable energy sector
          </p>
        </div>

        <div>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.projectNumber}
              projectNumber={project.projectNumber}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
```

---

## Complete File Structure with Images

```
portfolio_2026/
├── public/
│   └── images/
│       ├── logo.png                          ← Add your logo here
│       └── projects/
│           ├── empowerplan.png               ← Project 1
│           ├── wwf-energy-dashboard.png      ← Project 2
│           ├── open-energy-platform.png      ← Project 3
│           └── agora-calculator.png          ← Project 4
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                        (Uncomment <img> tag)
│   │   ├── Footer.jsx                        (Uncomment <img> tag)
│   │   └── ProjectCard.jsx                   (Uncomment <img> tag)
│   │
│   └── ... rest of files ...
```

---

## Image Naming Convention

When adding images, make sure they match the `imageUrl` paths exactly:

| Image | File Name | Path |
|-------|-----------|------|
| Logo | `logo.png` | `/images/logo.png` |
| Project 1 | `empowerplan.png` | `/images/projects/empowerplan.png` |
| Project 2 | `wwf-energy-dashboard.png` | `/images/projects/wwf-energy-dashboard.png` |
| Project 3 | `open-energy-platform.png` | `/images/projects/open-energy-platform.png` |
| Project 4 | `agora-calculator.png` | `/images/projects/agora-calculator.png` |

🎯 **Pro Tip:** File names are case-sensitive. If a project image doesn't show, check that the image file name matches the path exactly.

---

## Testing Your Images

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Check the browser console** (F12 → Console tab) for any 404 errors

3. **If images don't show:**
   - Verify image files exist in `public/images/` or `public/images/projects/`
   - Check spelling matches exactly (case-sensitive)
   - Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
   - Restart `npm run dev`

---

## Optional Enhancements

### Add a Link to the Logo
```jsx
<a href="/">
  <img src="/images/logo.png" alt="Logo" className="w-9 h-10" />
</a>
```

### Make Project Images Clickable
In `ProjectCard.jsx`:
```jsx
<a href={`/project-${projectNumber}`}>
  <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg hover:opacity-90 transition" />
</a>
```

### Optimize Images for Web
Before adding, optimize images to reduce file size:
- Use TinyPNG (https://tinypng.com/)
- Or use ImageOptim (free macOS app)
- Target: 100-200KB per image

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Logo not showing | Check `public/images/logo.png` exists and `<img>` tag is uncommented |
| Project images missing | Verify `public/images/projects/` folder exists and file names match exactly |
| Wrong image styling | Make sure you're using the `className` attribute, not `style` |
| Images too large/small | Adjust `w-` (width) and `h-` (height) classes in Tailwind |
| Images distorted | Use `object-contain` or `object-cover` class if needed |

---

For more detailed setup instructions, see [QUICK_START.md](QUICK_START.md).
