module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'connect-src': ["'self'", 'https://agon-nuxt.vercel.app', 'https://agon-nuxt.onrender.com'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://agon-cms-strapi.onrender.com', 'https://agon-nuxt.onrender.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://agon-cms-strapi.onrender.com', 'https://agon-nuxt.onrender.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors', // ✅ Remove `enabled: true`
    config: {
      origin: ['https://agon-nuxt.vercel.app'], // ✅ Add your frontend URL
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
