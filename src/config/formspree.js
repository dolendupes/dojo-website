// Formspree form endpoint configuration
// Set these environment variables in your .env file:
// PUBLIC_FORMSPREE_INQUIRY_DEV=xeonpwja
// PUBLIC_FORMSPREE_INQUIRY_PROD=movrypvz
// PUBLIC_FORMSPREE_EVENTS_DEV=xanvlgyl
// PUBLIC_FORMSPREE_EVENTS_PROD=xeonvrbb
// PUBLIC_FORMSPREE_RESIDENCY_DEV=xovrpgep
// PUBLIC_FORMSPREE_RESIDENCY_PROD=xeonvrdb

// Detect environment: development mode or explicit DEV flag
const isDev = import.meta.env.MODE === 'development' || import.meta.env.DEV;

export const formspreeUrls = {
  inquiry: isDev
    ? `https://formspree.io/f/${import.meta.env.PUBLIC_FORMSPREE_INQUIRY_DEV || 'xeonpwja'}`
    : `https://formspree.io/f/${import.meta.env.PUBLIC_FORMSPREE_INQUIRY_PROD || 'movrypvz'}`,
  
  events: isDev
    ? `https://formspree.io/f/${import.meta.env.PUBLIC_FORMSPREE_EVENTS_DEV || 'xanvlgyl'}`
    : `https://formspree.io/f/${import.meta.env.PUBLIC_FORMSPREE_EVENTS_PROD || 'xeonvrbb'}`,
  
  residency: isDev
    ? `https://formspree.io/f/${import.meta.env.PUBLIC_FORMSPREE_RESIDENCY_DEV || 'xovrpgep'}`
    : `https://formspree.io/f/${import.meta.env.PUBLIC_FORMSPREE_RESIDENCY_PROD || 'xeonvrdb'}`,
};

