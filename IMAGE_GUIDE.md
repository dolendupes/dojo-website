# Image Guide for "The Space" Section

## Directory Structure

Images for "The Space" section should be placed in:
```
public/images/space/
```

## Image Preparation

### 1. **Compression is Recommended**
High-resolution images from Adobe files are typically too large for web use. Here's what to do:

#### Option A: Use Online Tools (Easiest)
- **Squoosh** (https://squoosh.app/) - Google's free image compressor
- **TinyPNG** (https://tinypng.com/) - Compresses PNG and JPG
- **ImageOptim** (Mac app) - https://imageoptim.com/

#### Option B: Export from Adobe
- In Photoshop/Illustrator: File → Export → Export As → Web (Legacy)
- Choose format: **JPG** for photos, **PNG** for graphics with transparency
- Quality: 80-85% for JPG (good balance of quality and file size)
- Max width: 1200px is usually sufficient for web

### 2. **Recommended Image Specifications**
- **Format**: JPG for photos, PNG for graphics
- **Max width**: 1200px (will be displayed smaller in grid)
- **File size**: Aim for 100-300KB per image
- **Aspect ratio**: Images will be cropped to fit the grid (256px height on mobile, 320px on desktop)

## Configuration

The space images are configured in `src/pages/index.astro`. You can:

### Show/Hide Spaces
Set `visible: true` or `visible: false` to show or hide a space until you have images.

### Single Image vs Carousel
- **Single image**: Set `carousel: false` and provide one image in the `images` array
- **Carousel**: Set `carousel: true` and provide multiple images in the `images` array

### Example Configuration

```javascript
const spaceConfig = [
  { 
    name: 'Training Floor', 
    visible: true,              // Show this space
    carousel: true,              // Use carousel (multiple images)
    images: [
      { name: 'Training Floor', image: 'training-floor-1.jpg' },
      { name: 'Training Floor', image: 'training-floor-2.jpg' },
      { name: 'Training Floor', image: 'training-floor-3.jpg' }
    ]
  },
  { 
    name: 'DOJO Labs', 
    visible: true,              // Show this space
    carousel: false,             // Single static image
    images: [
      { name: 'DOJO Labs', image: 'dojo-labs.jpg' }
    ]
  },
  { 
    name: 'Recovery Zone', 
    visible: false,             // Hidden until you add images
    carousel: false,
    images: [
      { name: 'Recovery Zone', image: 'recovery-zone.jpg' }
    ]
  }
];
```

## File Naming

### Single Images
- `training-floor.jpg`
- `dojo-labs.jpg`
- `warriors-den.jpg` (Boxing, MMA, full range area with MMA ring, boxing/striking equipment, plyo, balls, ropes)
- `recovery-zone.jpg`
- `event-space.jpg`
- `community-space.jpg` (currently hidden)
- `meeting-rooms.jpg` (currently hidden)

### Carousel Images (multiple images for one space)
- `training-floor-1.jpg`
- `training-floor-2.jpg`
- `training-floor-3.jpg`
- `warriors-den-1.jpg`
- `warriors-den-2.jpg`
- etc.

## Adding Images

1. **Compress your images** using the tools above
2. **Save them** to `public/images/space/` with your chosen names
3. **Update the configuration** in `src/pages/index.astro`:
   - Set `visible: true` when you have images ready
   - Add multiple images to the `images` array for carousels
   - Set `carousel: true` if you have multiple images

## Features

- **Carousel support**: Spaces with multiple images automatically get a carousel with navigation arrows and indicators
- **Hide until ready**: Set `visible: false` to hide spaces until you have images
- **Automatic fallback**: If an image fails to load, a placeholder with the space name appears
- **Responsive grid**: Automatically adjusts from 1 column (mobile) to 2 columns (tablet) to 3 columns (desktop)

