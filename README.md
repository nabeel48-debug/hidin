# HIDIN 3D — Custom 3D Printing Business Website

A complete, modern, premium website built for **HIDIN 3D**, a bespoke 3D-printing studio creating personalised products and custom creations based on customer requirements.

- **Instagram**: [@hidin_3d_art](https://instagram.com/hidin_3d_art)
- **WhatsApp**: [+91 9087055806](https://wa.me/919087055806)

---

## 💎 Features & Architecture

1. **Futuristic Brand Identity**
   - Unique 3D isometric cube logo featuring neon gradient layer lines and modern typographic badge.
   - Deep obsidian/charcoal dark theme (`#07080c`) with vibrant **Electric Purple** (`#8b5cf6`) and **Cyan** (`#00f2fe`) accents.
   - Typography: **Space Grotesk** for futuristic headings and **Inter** for crisp body readability.
   - Interactive Three.js 3D hero visualization simulating real-time additive manufacturing, slicing toolpaths, and particle sparks.

2. **Official 12 Product Categories**
   - Articulated Dragons and Flexi Toys
   - Figurines and Collectibles
   - Personalised Gifts
   - Custom Keychains and Name Tags
   - Home Decor and Decorative Vases
   - Desk Accessories and Organisers
   - Phone Stands and Tech Accessories
   - Mini Planters
   - Miniatures and Models
   - Cosplay Props
   - Functional Parts and Components
   - Custom 3D Printing

3. **Realistic 3D Printing Visuals & Layer Specs**
   - High-definition photography displaying actual 3D printed objects with layer lines, print-in-place joints, dual-color extrusion, and cured resin precision.
   - Layer specification tags on every card (`Print-In-Place • 0.12mm Layers`, `12K SLA Resin • 25µm Layers`, `Dual-Filament Extrusion`, etc.).
   - Full specification and material details in the modal.

4. **Optimized for Mobile App Browsers (Instagram Webview, iOS Safari, Android Chrome)**
   - Viewport configuration with `viewport-fit=cover` and dynamic viewport units (`100dvh`).
   - iPhone bottom home gesture bar safe-area padding (`env(safe-area-inset-bottom)`).
   - Bottom-sheet mobile modal behavior with smooth slide-up animation.
   - Touch-action optimization (`touch-action: manipulation`) with zero tap delay.
   - Sticky bottom action bar for Instagram visitors.

5. **WhatsApp Integration (+91 9087055806)**
   - All buttons format enquiries into the official click-to-chat format:
     `https://wa.me/919087055806?text=ENCODED_MESSAGE`
   - Dynamically appends the customer's selected finish/color, size, and custom notes.
   - Zero-commerce guarantee: Strictly no prices, shopping carts, checkout, or fake stock counters.

---

## 🚀 How to Run the Website

### Method 1: Double-Click (Zero Setup)
Simply double-click [`index.html`](file:///C:/Users/nabeel.s/.gemini/antigravity/scratch/hidin3d/index.html) to open the website in Chrome, Edge, Safari, or Firefox.

### Method 2: Local HTTP Server (Built-in PowerShell)
Open PowerShell in this directory and run:
```powershell
.\serve.ps1
```
This starts a local server on `http://localhost:3000/` and automatically launches your default web browser.

---

## ⚙️ Configuration

The WhatsApp number and Instagram handle are centralized in [`js/config.js`](file:///C:/Users/nabeel.s/.gemini/antigravity/scratch/hidin3d/js/config.js):

```javascript
const CONFIG = {
  brand: {
    name: "HIDIN 3D",
    instagram: "hidin_3d_art",
    instagramUrl: "https://instagram.com/hidin_3d_art",
    whatsappDisplay: "+91 9087055806",
    ...
  },
  whatsapp: {
    number: "919087055806", // Official business number
    ...
  }
};
```
