# Local Development Guide

## 🔥 Hot Module Replacement (HMR)

Astro includes **automatic hot reload** out of the box. Here's how it works:

### Starting Development Server

```bash
npm run dev
```

This starts the server at `http://localhost:4321` with:
- **Instant updates** - Changes appear without page refresh
- **State preservation** - Form data and scroll position maintained
- **Error overlay** - Build errors shown in browser
- **Fast refresh** - Only changed components update

### What Gets Hot Reloaded

✅ **Instant Updates (no refresh needed)**:
- CSS/Tailwind changes
- Component text/content
- HTML structure
- Most Astro component changes

⚡ **Fast Refresh (component reload)**:
- JavaScript logic changes
- Component props changes
- New component imports

🔄 **Full Page Reload Required**:
- Config file changes (astro.config.mjs, tailwind.config.mjs)
- Package installations
- Environment variable changes

## 📝 Development Workflow

### 1. Install Flowbite Pro (if you have a license)

```bash
# Create .npmrc with your auth token
echo "@themesberg:registry=https://npm.flowbite.com" > .npmrc
echo "//npm.flowbite.com/:_authToken=YOUR_TOKEN" >> .npmrc

# Install Flowbite Pro
npm install @themesberg/flowbite-pro
```

### 2. Start Development

```bash
# Terminal 1: Run dev server
npm run dev

# Terminal 2 (optional): Watch for type errors
npm run astro check --watch
```

### 3. Make Changes

Edit any file and save - changes appear instantly:

```javascript
// Example: Edit src/pages/index.astro
// Change text, add components, modify styles
// Browser updates automatically!
```

### 4. View on Multiple Devices

```bash
# Start with network access
npm run dev -- --host

# Now accessible at:
# - http://localhost:4321 (your machine)
# - http://192.168.x.x:4321 (other devices on network)
```

## 🎨 Working with Images

### Local Development
Place images in `public/images/`:
```
public/
  images/
    gallery/
      training-1.jpg
      labs-1.jpg
    events/
      workshop.jpg
```

Reference in code:
```html
<img src="/images/gallery/training-1.jpg" alt="Training floor">
```

### GitHub Pages Deployment
Images in `public/` folder are automatically included in the build and work on GitHub Pages.

## 🐛 Troubleshooting

### Changes Not Appearing?

1. **Check terminal for errors** - Build errors prevent HMR
2. **Clear browser cache** - Cmd/Ctrl + Shift + R
3. **Restart dev server** - Sometimes needed after installing packages
4. **Check file saved** - Ensure your editor saved the file

### Port Already in Use?

```bash
# Use different port
npm run dev -- --port 3000
```

### Flowbite Styles Not Working?

Make sure Flowbite is in your content paths (`tailwind.config.mjs`):
```javascript
content: [
  './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  './node_modules/flowbite/**/*.js',
  './node_modules/@themesberg/flowbite-pro/**/*.js' // If using Pro
]
```

## 💡 Pro Tips

### Browser DevTools
- Keep DevTools open to see network requests
- Use React DevTools for component debugging
- Check Console for any client-side errors

### VS Code Extensions
Recommended for best experience:
- **Astro** - Official Astro language support
- **Tailwind CSS IntelliSense** - Autocomplete for classes
- **Prettier** - Auto-formatting

### Performance
- Images load lazily by default
- CSS is automatically optimized
- JavaScript is tree-shaken in production

## 🚀 Building for Production

### Test Production Build Locally
```bash
# Build the site
npm run build

# Preview production build
npm run preview
```

This runs the production build at `http://localhost:4322`

### Deploy to GitHub Pages
```bash
# Commit and push
git add .
git commit -m "Update site"
git push

# GitHub Actions automatically deploys
```

## 📱 Mobile Development Tips

### Responsive Testing
1. Open DevTools (F12)
2. Toggle device mode (Ctrl+Shift+M)
3. Select device or responsive mode
4. Edit and see changes instantly

### Real Device Testing
1. Connect phone to same network
2. Run `npm run dev -- --host`
3. Open `http://[your-ip]:4321` on phone
4. Changes sync to phone instantly!

## 🔄 Git Workflow

### Recommended Branches
```bash
main          → Production (auto-deploys to GitHub Pages)
development   → Testing features
feature/*     → Individual features
```

### Typical Workflow
```bash
# Create feature branch
git checkout -b feature/gallery-updates

# Make changes with hot reload
npm run dev
# ... edit files, see changes instantly ...

# Commit when ready
git add .
git commit -m "Add advanced gallery"

# Merge to main for deployment
git checkout main
git merge feature/gallery-updates
git push
```

## 🎯 Summary

**Local Development = Instant Updates**
- Just run `npm run dev`
- Edit files
- See changes immediately
- No manual refresh needed

**GitHub Pages = Automatic Deployment**
- Push to main branch
- GitHub Actions builds
- Site updates in ~2 minutes

The workflow is optimized for rapid development with immediate feedback!
