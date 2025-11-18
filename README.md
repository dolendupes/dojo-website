# DOJO Tampa Website

A clean, mission-focused website for DOJO Tampa - a private collective forging excellence through deliberate practice and shared purpose.

## 🎯 Purpose

This website serves as the digital presence for DOJO Tampa, focusing on:
- Mission and philosophy (Why, What, How)
- DOJO Labs startup studio and residency program
- Event capabilities and community building
- Friends of DOJO network companies
- Inquiry collection for potential members

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account for deployment

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dojo-tampa-website.git
cd dojo-tampa-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Your site will be available at `http://localhost:4321`

## 📁 Project Structure

```
dojo-tampa-website/
├── src/
│   ├── components/       
│   │   ├── PhilosophyCarousel.astro  # Japanese concepts carousel
│   │   ├── InquiryForm.astro         # Member inquiry form
│   │   └── [other components]
│   ├── layouts/          
│   │   └── Layout.astro               # Main site layout
│   └── pages/           
│       ├── index.astro                # Homepage with mission
│       ├── mission.astro              # Expanded why-what-how
│       ├── labs.astro                 # DOJO Labs information
│       ├── events.astro               # Event capabilities
│       ├── friends.astro              # Network companies
│       └── gallery.astro              # Image gallery
├── public/              
│   └── images/                        # Site images
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎨 Key Features

### Philosophy Carousel
The homepage features a rotating carousel of Japanese concepts that define DOJO:
- 変革 (Henkaku) - Transformation
- 強さ (Tsuyosa) - Strength  
- 均衡 (Kinkou) - Balance
- 共同体 (Kyoudoutai) - Community
- 闘志 (Toushi) - Fighting Spirit
- 卓越 (Takuetsu) - Excellence

### Inquiry System
Simple form to collect interested individuals' information:
- No promises of response
- Database building for future recruitment
- Minimal fields for easy completion

### Content Sections
- **Mission**: Comprehensive why-what-how breakdown
- **DOJO Labs**: Startup studio and company residency program
- **Events**: Showcases event capabilities without specific dates
- **Friends of DOJO**: Network companies and partnerships
- **Gallery**: Visual representation of spaces and community

## 📝 Content Management

### Adding Friends/Partners

Edit the `friends` array in `src/pages/friends.astro`:

```javascript
const friends = [
  {
    name: "Company Name",
    category: "Industry",
    description: "Brief description",
    connection: "Relationship to DOJO"
  }
];
```

### Updating Gallery

Add images to `public/images/gallery/` and update arrays in `src/pages/gallery.astro`.

### Modifying Philosophy Concepts

Edit the `concepts` array in `src/components/PhilosophyCarousel.astro`.

## 🔧 Configuration

### Inquiry Form

The form in `src/components/InquiryForm.astro` currently logs submissions to console. To connect to a database:

```javascript
// Replace console.log with your endpoint
const response = await fetch('YOUR_DATABASE_ENDPOINT', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

### Brand Colors

DOJO brand colors are configured in `tailwind.config.mjs`:
- Black: #1C1C1C
- Red: #BC002D
- White: #F6F8FA
- Light: #F6F6F2
- Gray: #6C6C6C

## 🚀 Deployment

### GitHub Pages

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Site deploys automatically via GitHub Actions

### Custom Domain

1. Add `CNAME` file to `public/` with your domain
2. Configure DNS with your provider
3. Update `astro.config.mjs` with your domain

### Alternative Hosting

Build for any static host:
```bash
npm run build
```
Deploy the `dist/` folder to:
- Vercel
- Netlify  
- Cloudflare Pages
- AWS S3

## 🎯 Design Philosophy

This website follows DOJO's communication principles:
- **Direct and confident** - No corporate fluff
- **Mission-focused** - Why, What, How clearly articulated
- **Community-oriented** - Emphasis on collective growth
- **Future-proof** - Broad descriptions that won't need constant updates

## 📄 License

© 2024 DOJO TAMPA LLC. All rights reserved.
