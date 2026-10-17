import { OGImageRoute } from 'astro-og-canvas';

const pages = {
  'index': 'Fellowship Church MD',
  'beliefs': 'Beliefs',
  'values': 'Values',
  'leadership': 'Leadership',
  'connect': 'Connect',
  'contact': 'Contact',
  'prayer': 'Prayer',
};

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (path, title) => ({
    title,
    logo: {
      path: './public/images/logo.webp',
      size: [140],
    },
    bgGradient: [[18, 18, 18]],
    border: {
      color: [18, 18, 18],
      width: 10,
      side: 'inline-start',
    },
  }),
});
