# Quick Start Guide

Get your portfolio homepage up and running in 5 minutes.

## 1. Install Dependencies
```bash
npm install
```

## 2. Start Development Server
```bash
npm run dev
```

Your site will open at `http://localhost:3000`

## 3. Add Your Logo

### Step 1: Save Your Logo
Save your logo image to: `public/images/logo.png`

### Step 2: Enable the Logo in Navbar
Open [src/components/Navbar.jsx](src/components/Navbar.jsx#L14-L19)

Find this code:
```jsx
{/* TODO: Add logo image here */}
{/* <img src="/path/to/logo.png" alt="Logo" className="w-9 h-10" /> */}
<div className="w-9 h-10 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">
  BL
</div>
```

Replace with:
```jsx
<img src="/images/logo.png" alt="Logo" className="w-9 h-10" />
```

### Step 3: Enable the Logo in Footer
Open [src/components/Footer.jsx](src/components/Footer.jsx#L18-L23) and do the same thing.

## 4. Add Your Project Images

### Step 1: Create Images Directory
```bash
mkdir -p public/images/projects
```

### Step 2: Add Your Images
Copy these files to `public/images/projects/`:
- `empowerplan.png`
- `wwf-energy-dashboard.png`
- `open-energy-platform.png`
- `agora-calculator.png`

### Step 3: Enable Images in ProjectCard
Open [src/components/ProjectCard.jsx](src/components/ProjectCard.jsx#L15-L23)

Find this code:
```jsx
{/* TODO: Replace with actual project image */}
{/* <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" /> */}
<div className="w-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg aspect-video flex items-center justify-center">
  {/* ... placeholder ... */}
</div>
```

Replace with:
```jsx
<img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" />
```

## 5. Update Your Links

### Social Links
- **Navbar.jsx** - Update GitHub and LinkedIn URLs (lines 29-31)
- **Footer.jsx** - Update GitHub and LinkedIn URLs (lines 29-34)

### Contact Link
- **Contact.jsx** - Update the button click handler to link to your email or form

### Footer Links
- **Footer.jsx** - Update Imprint and Data Privacy links

---

## File Structure

```
src/
├── components/
│   ├── Navbar.jsx          ← Add logo + social links here
│   ├── Footer.jsx          ← Add logo + social links + legal links here
│   ├── Hero.jsx            ← Homepage hero
│   ├── Projects.jsx        ← Manages all 4 projects
│   └── ProjectCard.jsx     ← Individual project display
├── pages/
│   └── HomePage.jsx        ← Assembles all sections
├── App.jsx
└── index.css
```

---

## Component Purpose Reference

| Component | File | Purpose | On All Pages? |
|-----------|------|---------|---------------|
| Navbar | `components/Navbar.jsx` | Top navigation with logo & links | ✅ Yes |
| Footer | `components/Footer.jsx` | Bottom footer with links | ✅ Yes |
| Hero | `components/Hero.jsx` | Large intro section | ❌ Homepage only |
| Projects | `components/Projects.jsx` | Container for all projects | ❌ Homepage only |
| ProjectCard | `components/ProjectCard.jsx` | Single project display | ❌ Homepage only (×4) |
| Contact | `components/Contact.jsx` | CTA section | ❌ Homepage only |

---

## Customization

### Change Colors
Edit `tailwind.config.js` to customize the color scheme, or edit the `bg-`, `text-`, and `border-` classes directly in components.

### Change Hero Title
Edit [src/components/Hero.jsx](src/components/Hero.jsx#L14)

### Change Project Data
Edit [src/components/Projects.jsx](src/components/Projects.jsx#L4-L28) `projectsData` array

### Add New Projects
Add a new object to `projectsData` in [Projects.jsx](src/components/Projects.jsx):
```javascript
{
  projectNumber: 5,
  title: 'Your Project Title',
  description: 'Your project description...',
  imageUrl: '/images/projects/your-image.png'
}
```

---

## Troubleshooting

**Images not showing?**
- Check image file names match exactly (case-sensitive)
- Ensure images are in `public/` folder, not `src/`
- Check browser console for 404 errors

**Styling looks off?**
- Clear browser cache (Cmd+Shift+R on Mac)
- Restart dev server (`npm run dev`)

**Need help?**
- Check [README.md](README.md) for full documentation
- Check [IMAGE_PLACEMENT_GUIDE.md](IMAGE_PLACEMENT_GUIDE.md) for image setup
- Check [ARCHITECTURE.md](ARCHITECTURE.md) for component details

---

## 🚀 You're Ready!

Your custom portfolio is now set up. Start by adding your logo and images, then customize the content.

Happy building! 🎉
