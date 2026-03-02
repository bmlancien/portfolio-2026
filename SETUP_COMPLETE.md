# 🗂️ COMPLETE SETUP GUIDE

Everything you need to get your portfolio live in 30 minutes.

---

## 📋 Your Image Files Location

Save files to these exact locations:

```
portfolio_2026/
└── public/
    └── images/
        ├── logo.png                           ← Your logo file (required)
        └── projects/
            ├── empowerplan.png                ← Project 1 (required)
            ├── wwf-energy-dashboard.png       ← Project 2 (required)
            ├── open-energy-platform.png       ← Project 3 (required)
            └── agora-calculator.png           ← Project 4 (required)
```

### Recommended Image Specifications

| Image | Type | Size | Aspect Ratio |
|-------|------|------|--------------|
| Logo | PNG/SVG | 36×40px | Square |
| Projects | PNG/JPG | < 200KB | 16:9 or 21:9 |

---

## 🔴 REQUIRED TODO ITEMS (Must Do)

### 1️⃣ Add Logo to Navbar

**File:** `src/components/Navbar.jsx`

**Lines 14-19:** Currently shows placeholder box with "BL"

```jsx
// BEFORE
{/* TODO: Add logo image here */}
{/* <img src="/path/to/logo.png" alt="Logo" className="w-9 h-10" /> */}
<div className="w-9 h-10 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">
  BL
</div>

// AFTER
<img src="/images/logo.png" alt="Logo" className="w-9 h-10" />
```

**The single change:** Replace the placeholder `<div>` with the uncommented `<img>` tag.

---

### 2️⃣ Add Logo to Footer

**File:** `src/components/Footer.jsx`

**Lines 18-23:** Same as Navbar

```jsx
// BEFORE
{/* TODO: Add logo image here */}
{/* <img src="/path/to/logo.png" alt="Logo" className="w-6 h-6" /> */}
<div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">
  BL
</div>

// AFTER
<img src="/images/logo.png" alt="Logo" className="w-6 h-6" />
```

Note: Footer logo is smaller (w-6 h-6 instead of w-9 h-10) - same image file, different size.

---

### 3️⃣ Add Project Images to ProjectCard

**File:** `src/components/ProjectCard.jsx`

**Lines 15-23:** Currently shows gray placeholder

```jsx
// BEFORE
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

// AFTER
<img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" />
```

**The single change:** Delete the gray placeholder `<div>`, uncomment the `<img>` tag.

---

## 🟡 OPTIONAL TODO ITEMS (Nice to Have)

### Add Social Links

**Navbar:** `src/components/Navbar.jsx` - Line 29-31
```jsx
<a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noopener noreferrer">
```

**Footer:** `src/components/Footer.jsx` - Lines 30 & 34
```jsx
<a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noopener noreferrer">
```

### Update Contact Button

**Contact Section:** `src/components/Contact.jsx` - Line 12
```jsx
// Add click handler or link
<button onClick={() => window.location.href = 'mailto:your@email.com'}>
  Contact me
</button>
```

### Update Legal Links

**Footer:** `src/components/Footer.jsx` - Update links to your actual pages
```jsx
<a href="/imprint">Imprint</a>
<a href="/privacy">Data Privacy</a>
```

---

## 🚀 Quick 5-Step Setup

### Step 1: Install Dependencies
```bash
cd /Volumes/T7/Code/portfolio_2026
npm install
```
⏱️ Takes ~1-2 minutes

### Step 2: Add Your Logo
1. Save logo to `public/images/logo.png`
2. Open `src/components/Navbar.jsx`, go to line 16
3. Replace placeholder `<div>` with: `<img src="/images/logo.png" alt="Logo" className="w-9 h-10" />`
4. Do same for `src/components/Footer.jsx` line 19 (use `className="w-6 h-6"`)

⏱️ Takes ~2 minutes

### Step 3: Add Your Project Images
1. Create folder: `mkdir -p public/images/projects`
2. Add 4 images: empowerplan.png, wwf-energy-dashboard.png, open-energy-platform.png, agora-calculator.png
3. Open `src/components/ProjectCard.jsx`, go to line 17
4. Delete gray placeholder `<div>` and uncomment: `<img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" />`

⏱️ Takes ~3 minutes

### Step 4: Start Dev Server
```bash
npm run dev
```

Your site opens at `http://localhost:3000`

⏱️ Takes <1 minute

### Step 5: (Optional) Update Links
- GitHub URLs in Navbar & Footer
- LinkedIn URLs in Navbar & Footer
- Contact button action in Contact.jsx
- Legal links in Footer

⏱️ Takes ~3 minutes

---

## 📊 Files You Need to Edit

| File | Action | Lines | Difficulty |
|------|--------|-------|-----------|
| `src/components/Navbar.jsx` | Uncomment `<img>` | 14-19 | 🟢 Easy |
| `src/components/Footer.jsx` | Uncomment `<img>` | 18-23 | 🟢 Easy |
| `src/components/ProjectCard.jsx` | Uncomment `<img>` | 15-23 | 🟢 Easy |
| `src/components/Navbar.jsx` | Update GitHub URL | 29 | 🟢 Easy |
| `src/components/Navbar.jsx` | Update LinkedIn URL | 31 | 🟢 Easy |
| `src/components/Footer.jsx` | Update GitHub URL | 30 | 🟢 Easy |
| `src/components/Footer.jsx` | Update LinkedIn URL | 34 | 🟢 Easy |
| `src/components/Contact.jsx` | Add contact action | 12 | 🟡 Medium |
| `src/components/Footer.jsx` | Add legal links | 40-42 | 🟡 Medium |

---

## ✅ Verification Checklist

- [ ] Logo shows in navbar (top-left)
- [ ] Logo shows in footer (bottom-left)
- [ ] All 4 project images display
- [ ] Project images have rounded corners
- [ ] Navbar text is visible and legible
- [ ] Footer layout looks good
- [ ] No console errors (F12 → Console)
- [ ] Website is responsive on mobile

---

## 🆘 Troubleshooting

**Logos not showing?**
- ✅ Is `public/images/logo.png` file created?
- ✅ Did you uncomment the `<img>` tag?
- ✅ Check browser console (F12) for 404 errors

**Project images missing?**
- ✅ Did you create `public/images/projects/` folder?
- ✅ File names match exactly (case-sensitive)?
- ✅ Did you uncomment the `<img>` tag in ProjectCard.jsx?

**Website won't run?**
- ✅ Run `npm install` first
- ✅ Make sure you're in `portfolio_2026` directory
- ✅ Run `npm run dev`, not just `npm dev`

**Styling looks broken?**
- ✅ Clear browser cache (Cmd+Shift+R on Mac)
- ✅ Restart `npm run dev`

---

## 📞 Need Help?

See these files in order:
1. **Quick questions?** → [QUICK_START.md](QUICK_START.md)
2. **Image placement?** → [IMAGE_PLACEMENT_GUIDE.md](IMAGE_PLACEMENT_GUIDE.md)
3. **All TODOs listed?** → [TODO_LOCATIONS.md](TODO_LOCATIONS.md)
4. **Code examples?** → [IMPLEMENTATION_EXAMPLES.md](IMPLEMENTATION_EXAMPLES.md)
5. **Full details?** → [README.md](README.md) or [ARCHITECTURE.md](ARCHITECTURE.md)

---

## 🎯 Success Looks Like

✨ Clean homepage with your logo
✨ 4 project cards with professional images
✨ Working navigation and footer on all sections
✨ Responsive design that works on mobile/tablet/desktop
✨ Ready for deployment to Vercel, Netlify, or any static host

---

**You're ready to go!** Start with [QUICK_START.md](QUICK_START.md) →
