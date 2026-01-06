export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Folder yang tidak ingin diindeks
    },
    sitemap: 'https://bestbabyindonesia.vercel.app/sitemap.xml',
  };
}