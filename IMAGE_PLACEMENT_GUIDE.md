# Image Placement Guide

This guide shows exactly where to add your logo and project images.

## Logo Placement

### Navbar Logo

**File:** `src/components/Navbar.jsx` (lines 14-19)

Current code with placeholder:
```jsx
{/* TODO: Add logo image here */}
{/* <img src="/path/to/logo.png" alt="Logo" className="w-9 h-10" /> */}
<div className="w-9 h-10 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">
  BL
</div>
```

**To add your logo:**
1. Save your logo to: `public/images/logo.png` (or `public/images/your-logo.{png|svg|jpg}`)
2. Uncomment the `<img>` tag:
```jsx
<img src="/images/logo.png" alt="Logo" className="w-9 h-10" />
```
3. Delete or comment out the placeholder `<div>`

### Footer Logo

**File:** `src/components/Footer.jsx` (lines 18-23)

Same process as the Navbar - uncomment the `<img>` tag and adjust the `src` path.

---

## Project Images Placement

### Image Folder Structure

```
public/
└── images/
    ├── logo.png
    └── projects/
        ├── empowerplan.png
        ├── wwf-energy-dashboard.png
        ├── open-energy-platform.png
        └── agora-calculator.png
```

### ProjectCard Component

**File:** `src/components/ProjectCard.jsx` (lines 15-23)

Current code with placeholder:
```jsx
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
```

**To add your project images:**
1. Create the folder: `mkdir -p public/images/projects`
2. Add your images with these exact names:
   - `empowerplan.png`
   - `wwf-energy-dashboard.png`
   - `open-energy-platform.png`
   - `agora-calculator.png`
3. Uncomment the `<img>` tag in ProjectCard.jsx:
```jsx
<img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" />
```
4. Delete or comment out the placeholder `<div>`

### Projects Data

**File:** `src/components/Projects.jsx` (lines 4-28)

The `projectsData` array controls which images are loaded:

```javascript
const projectsData = [
  {
    projectNumber: 1,
    title: 'EmpowerPlan',
    description: 'Web app visualizing...',
    imageUrl: '/images/projects/empowerplan.png'
  },
  {
    projectNumber: 2,
    title: 'WWF Energy Dashboard',
    description: 'Dashboard displaying...',
    imageUrl: '/images/projects/wwf-energy-dashboard.png'
  },
  {
    projectNumber: 3,
    title: 'Open Energy Platform',
    description: 'Database platform...',
    imageUrl: '/images/projects/open-energy-platform.png'
  },
  {
    projectNumber: 4,
    title: 'Agora Photovoltaics and Wind Area Calculator',
    description: 'Dashboard displaying...',
    imageUrl: '/images/projects/agora-calculator.png'
  }
];
```

**To change image paths:** Update the `imageUrl` property for any project. For example:
```javascript
imageUrl: '/images/projects/my-custom-name.png'
```

---

## Image Format Recommendations

- **Logo:** SVG (scalable) or PNG with transparency (transparent background recommended)
- **Project Images:** PNG or JPG, aspect ratio 16:9 or 21:9 for best fit
- **File Size:** Optimize to keep images below 200KB each

## Quick Setup Commands

```bash
# Create the images directory
mkdir -p public/images/projects

# Copy your images (from wherever you have them)
cp /path/to/your/logo.png public/images/
cp /path/to/your/empowerplan.png public/images/projects/
cp /path/to/your/wwf-energy-dashboard.png public/images/projects/
cp /path/to/your/open-energy-platform.png public/images/projects/
cp /path/to/your/agora-calculator.png public/images/projects/
```

Then uncomment the `<img>` tags in the respective components.
