# Portfolio - Climate Tech Website

A modular React portfolio website built with Vite, Tailwind CSS, and Lucide icons.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Top navigation (reusable on all pages)
│   ├── Footer.jsx           # Footer (reusable on all pages)
│   ├── Hero.jsx             # Homepage hero section
│   ├── Projects.jsx         # Projects section container
│   └── ProjectCard.jsx      # Reusable project card component
├── pages/
│   └── HomePage.jsx         # Homepage layout
├── App.jsx                  # Main app component
├── App.css                  # App styles
├── index.css                # Global styles with Tailwind
└── main.jsx                 # Entry point

public/
├── images/
│   ├── logo.png             # TODO: Add logo here
│   └── projects/
│       ├── empowerplan.png
│       ├── wwf-energy-dashboard.png
│       ├── open-energy-platform.png
│       └── agora-calculator.png
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build

```bash
npm build
```

## Adding Your Logo

The logo placeholder appears in two places:

### 1. Navbar Logo
**File:** [src/components/Navbar.jsx](src/components/Navbar.jsx#L14-L19)

**Current placeholder:**
```jsx
{/* TODO: Add logo image here */}
{/* <img src="/path/to/logo.png" alt="Logo" className="w-9 h-10" /> */}
<div className="w-9 h-10 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">
  BL
</div>
```

**To replace:**
1. Add your logo as `public/images/logo.png`
2. Uncomment the `<img>` tag and comment out the placeholder `<div>`
3. Update the `src` path if your logo is named differently

### 2. Footer Logo
**File:** [src/components/Footer.jsx](src/components/Footer.jsx#L18-L23)

**Same process** - add the logo image and uncomment the `<img>` tag.

---

## Adding Project Images

Project images are managed in [src/components/Projects.jsx](src/components/Projects.jsx) in the `projectsData` array.

### Current Project Images Location

Each project has an `imageUrl` property:

```javascript
const projectsData = [
  {
    projectNumber: 1,
    title: 'EmpowerPlan',
    description: '...',
    imageUrl: '/images/projects/empowerplan.png'
  },
  // ... more projects
];
```

### To Add Project Images

1. **Create the images folder:**
   ```bash
   mkdir -p public/images/projects
   ```

2. **Add your images:**
   - Place `empowerplan.png` in `public/images/projects/`
   - Place `wwf-energy-dashboard.png` in `public/images/projects/`
   - Place `open-energy-platform.png` in `public/images/projects/`
   - Place `agora-calculator.png` in `public/images/projects/`

3. **Update the file paths** if your images have different names.

The images will automatically display in each project card via the `imageUrl` prop passed to the [ProjectCard component](src/components/ProjectCard.jsx#L1).

---

## Component Architecture

### Reusable Components

- **`Navbar`** - Top navigation, used on all pages
- **`Footer`** - Bottom footer, used on all pages
- **`ProjectCard`** - Single project display (receives props for content)
- **`Projects`** - Container for all project cards (maps over projectsData)

### Page-Specific Components

- **`Hero`** - Homepage hero section (only on homepage)
- **`Contact`** - Call-to-action section

### How to Add More Projects

Simply add a new object to the `projectsData` array in [Projects.jsx](src/components/Projects.jsx):

```javascript
{
  projectNumber: 5,
  title: 'Your New Project',
  description: 'Description of your project...',
  imageUrl: '/images/projects/your-project.png'
}
```

The `ProjectCard` component will automatically render it.

---

## Future Pages

The Navbar and Footer are already set up as reusable components. To create new pages (About, Projects detail, etc.):

1. Create new components in `src/pages/`
2. Import `Navbar`, `Footer`, and page-specific components
3. Assemble them in the page component the same way as [HomePage.jsx](src/pages/HomePage.jsx)

---

## Customization

- **Colors:** Edit `tailwind.config.js` to change the color scheme
- **Typography:** Adjust font sizes and weights in Tailwind classes
- **Spacing:** Modify padding/margin using Tailwind utilities
- **Icons:** Icons from [lucide-react](https://lucide.dev/) are already imported

---

## Dependencies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

---

## Notes

- All TODO comments show exactly where to add images and logos
- The design is fully responsive using Tailwind's responsive utilities
- Components follow React best practices with proper prop usage
