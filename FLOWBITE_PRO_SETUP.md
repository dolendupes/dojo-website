# Flowbite Pro Integration Guide

## Setting Up Flowbite Pro

If you have a Flowbite Pro license, follow these steps to upgrade the website:

### 1. Configure NPM for Flowbite Pro

Create a `.npmrc` file in the project root:

```bash
@themesberg:registry=https://npm.flowbite.com
//npm.flowbite.com/:_authToken=YOUR_AUTH_TOKEN_HERE
```

Replace `YOUR_AUTH_TOKEN_HERE` with your actual Flowbite Pro auth token from your account.

### 2. Install Flowbite Pro

```bash
npm install @themesberg/flowbite-pro --save
```

### 3. Update Tailwind Configuration

In `tailwind.config.mjs`, update the content paths:

```javascript
content: [
  './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  './node_modules/flowbite/**/*.js',
  './node_modules/@themesberg/flowbite-pro/**/*.js'  // Add this line
]
```

## Recommended Pro Components for DOJO

Based on your website's needs, these Flowbite Pro components would be valuable:

### For the Homepage
- **Advanced Hero Sections** - More dynamic hero options with animations
- **Feature Sections** - Better showcase of DOJO Labs and facilities
- **Advanced CTAs** - More compelling call-to-action sections

### For DOJO Labs Page
- **Pricing Tables** - For residency tiers (if needed)
- **Application Forms** - Multi-step forms for Labs applications
- **Stats Components** - Showcase success metrics

### For Events Page
- **Event Cards Pro** - Advanced event display options
- **Calendar Components** - Interactive event calendar
- **RSVP Forms** - Event registration management

### For Gallery
- **Advanced Gallery** - Masonry layouts, lightbox features
- **Image Comparison** - Before/after transformation showcases
- **Video Integration** - Video galleries and backgrounds

### For Inquiry Form
- **Multi-step Forms** - More detailed member applications
- **Form Validation** - Advanced validation and error handling
- **Progress Indicators** - Show application progress

### Additional Pro Benefits
- **Dark Mode Support** - Automatic dark/light theme switching
- **Advanced Animations** - Smooth transitions and micro-interactions
- **Marketing Blocks** - Pre-built sections for campaigns
- **E-commerce Components** - If you add merchandise or paid events

## Components Currently Using Free Version

These components in your site could be upgraded to Pro versions:

1. **Navigation** - Could use advanced mega-menu
2. **Forms** - Could use multi-step forms with validation
3. **Cards** - Could use advanced card layouts with hover effects
4. **Carousel** - Could use advanced carousel with better controls
5. **Gallery** - Could use masonry layout with filtering

## Implementation Priority

1. **High Priority**: Inquiry form upgrade, Gallery enhancement
2. **Medium Priority**: Event cards, Navigation mega-menu
3. **Low Priority**: Stats components, Pricing tables

## Note on Licensing

Flowbite Pro requires:
- One license per developer
- Separate licenses for client projects (unless using Extended license)
- Cannot redistribute the Pro components

## Support

With Flowbite Pro, you get:
- Priority support
- Access to Figma files
- Regular updates
- Access to all templates

Contact Flowbite support with your license key for assistance.
