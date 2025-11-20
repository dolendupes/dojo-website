# Formspree Configuration

This project uses Formspree for form submissions, with separate forms for DEV and PROD environments.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Development Environment Form IDs
PUBLIC_FORMSPREE_INQUIRY_DEV=your-dev-inquiry-form-id
PUBLIC_FORMSPREE_EVENTS_DEV=your-dev-events-form-id
PUBLIC_FORMSPREE_RESIDENCY_DEV=your-dev-residency-form-id

# Production Environment Form IDs
PUBLIC_FORMSPREE_INQUIRY_PROD=your-prod-inquiry-form-id
PUBLIC_FORMSPREE_EVENTS_PROD=your-prod-events-form-id
PUBLIC_FORMSPREE_RESIDENCY_PROD=your-prod-residency-form-id
```

## Form Types

1. **Inquiry Form** (`InquiryForm.astro`) - Main membership inquiry form
   - Used on: Homepage, Mission page
   - Environment variable: `PUBLIC_FORMSPREE_INQUIRY_DEV` / `PUBLIC_FORMSPREE_INQUIRY_PROD`

2. **Events Form** (`VenueRentalForm.astro`) - Event booking and inquiries
   - Used on: Events page
   - Environment variable: `PUBLIC_FORMSPREE_EVENTS_DEV` / `PUBLIC_FORMSPREE_EVENTS_PROD`

3. **Residency Form** (`ResidencyInquiryForm.astro`) - DOJO Labs residency inquiries
   - Used on: Labs page
   - Environment variable: `PUBLIC_FORMSPREE_RESIDENCY_DEV` / `PUBLIC_FORMSPREE_RESIDENCY_PROD`

## How It Works

- The system automatically detects the environment:
  - **Development**: When running `npm run dev` or `import.meta.env.MODE === 'development'`
  - **Production**: When building for production (`npm run build`)

- Forms use the appropriate Formspree endpoint based on the current environment
- All forms include error handling and user feedback

## Setting Up Formspree Forms

1. Go to [Formspree.io](https://formspree.io) and create an account
2. Create separate forms for DEV and PROD environments
3. Copy the form IDs (the part after `/f/` in the form URL)
4. Add them to your `.env` file
5. Make sure `.env` is in your `.gitignore` (it should already be)

## Default Values

If environment variables are not set, the system will use default values:
- Inquiry form defaults to `xeonpwja` (current production form)
- Events and Residency forms will show placeholder values until configured

