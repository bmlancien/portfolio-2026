# TODO Summary - All Image & Logo Locations

## Quick Visual Map

### 🎨 LOGO (2 locations)

#### 1. Navbar Logo
**File:** `src/components/Navbar.jsx` | Lines 14-19  
**Preview:** Top-left of website  
**Current:** Gray placeholder box  
**TODO:** Replace with actual logo image
```jsx
// Change this:
<div className="w-9 h-10 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">
  BL
</div>

// To this:
<img src="/images/logo.png" alt="Logo" className="w-9 h-10" />
```

#### 2. Footer Logo
**File:** `src/components/Footer.jsx` | Lines 18-23  
**Preview:** Bottom-left of website  
**Current:** Gray placeholder box  
**TODO:** Replace with actual logo image (same logo as navbar)
```jsx
// Change this:
<div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">
  BL
</div>

// To this:
<img src="/images/logo.png" alt="Logo" className="w-6 h-6" />
```

---

### 📸 PROJECT IMAGES (4 locations)

#### 1. EmpowerPlan Project Image
**File:** `src/components/Projects.jsx` | Line 7  
**Preview:** First project in portfolio  
**Current:** `imageUrl: '/images/projects/empowerplan.png'`  
**Action:** 
- Add file: `public/images/projects/empowerplan.png`
- Uncomment `<img>` tag in `ProjectCard.jsx` (line 17)

#### 2. WWF Energy Dashboard Project Image
**File:** `src/components/Projects.jsx` | Line 14  
**Preview:** Second project in portfolio  
**Current:** `imageUrl: '/images/projects/wwf-energy-dashboard.png'`  
**Action:**
- Add file: `public/images/projects/wwf-energy-dashboard.png`
- Uncomment `<img>` tag in `ProjectCard.jsx` (line 17)

#### 3. Open Energy Platform Project Image
**File:** `src/components/Projects.jsx` | Line 21  
**Preview:** Third project in portfolio  
**Current:** `imageUrl: '/images/projects/open-energy-platform.png'`  
**Action:**
- Add file: `public/images/projects/open-energy-platform.png`
- Uncomment `<img>` tag in `ProjectCard.jsx` (line 17)

#### 4. Agora Photovoltaics and Wind Area Calculator Project Image
**File:** `src/components/Projects.jsx` | Line 28  
**Preview:** Fourth project in portfolio  
**Current:** `imageUrl: '/images/projects/agora-calculator.png'`  
**Action:**
- Add file: `public/images/projects/agora-calculator.png`
- Uncomment `<img>` tag in `ProjectCard.jsx` (line 17)

---

### 🖼️ PROJECT CARD IMAGE DISPLAY

**File:** `src/components/ProjectCard.jsx` | Lines 15-23  
**Current:** Shows gray placeholder with text  
**TODO:** Uncomment the image tag to display actual project images

```jsx
// Uncomment this (line 17):
<img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" />

// Comment out or delete this (lines 18-26):
<div className="w-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg aspect-video flex items-center justify-center">
  <div className="text-center">
    <span className="text-gray-500 font-medium">
      {title} Project Image<br />
      <span className="text-sm text-gray-400">(Add image: {imageUrl || 'path/to/image.png'})</span>
    </span>
  </div>
</div>
```

---

### 🎯 HERO SECTION IMAGE (1 location)

**File:** `src/components/Hero.jsx` | Lines 26-31  
**Preview:** Right side of hero section at top of page  
**Current:** Blue-to-green gradient placeholder  
**TODO:** Optional - add a hero illustration image
```jsx
// Uncomment this:
<img src="/path/to/hero-image.png" alt="Hero illustration" className="w-full h-auto" />

// Or leave as is for gradient background
```

---

## File Setup Commands

```bash
# Create required directories
mkdir -p public/images/projects

# Your logo file should be at:
public/images/logo.png

# Your project images should be at:
public/images/projects/empowerplan.png
public/images/projects/wwf-energy-dashboard.png
public/images/projects/open-energy-platform.png
public/images/projects/agora-calculator.png

# Optional hero image:
public/images/hero.png
```

---

## Completion Checklist

### Logo
- [ ] Save logo to `public/images/logo.png`
- [ ] Uncomment `<img>` in `src/components/Navbar.jsx` (line 16)
- [ ] Uncomment `<img>` in `src/components/Footer.jsx` (line 19)

### Project Images
- [ ] Create directory: `public/images/projects/`
- [ ] Add `empowerplan.png`
- [ ] Add `wwf-energy-dashboard.png`
- [ ] Add `open-energy-platform.png`
- [ ] Add `agora-calculator.png`
- [ ] Uncomment `<img>` in `src/components/ProjectCard.jsx` (line 17)

### Optional Hero Image
- [ ] Add `public/images/hero.png` (optional)
- [ ] Uncomment `<img>` in `src/components/Hero.jsx` (optional)

### Optional: Update Links
- [ ] Update GitHub URL in Navbar.jsx (line 29)
- [ ] Update LinkedIn URL in Navbar.jsx (line 31)
- [ ] Update GitHub URL in Footer.jsx (line 30)
- [ ] Update LinkedIn URL in Footer.jsx (line 34)
- [ ] Update Contact button in Contact.jsx (line 12)

---

## Reference

For detailed information, see:
- **Quick Setup:** [QUICK_START.md](QUICK_START.md)
- **Detailed Image Guide:** [IMAGE_PLACEMENT_GUIDE.md](IMAGE_PLACEMENT_GUIDE.md)  
- **Component Details:** [ARCHITECTURE.md](ARCHITECTURE.md)
- **Full README:** [README.md](README.md)
