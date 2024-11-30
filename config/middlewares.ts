export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://market-assets.strapi.io",
          ],
          "media-src": ["'self'", "data:", "blob:"],
          "script-src": ["'self'"],
          "style-src": ["'self'", "https:", "'unsafe-inline'"],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:3000", // Cambia esto por tu URL de frontend local
        "https://finder-api-production.up.railway.app", // Cambia esto por tu URL de frontend en producción
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      credentials: true, // Permitir cookies en solicitudes cruzadas
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  {
    name: "strapi::session",
    config: {
      cookie: {
        secure: process.env.NODE_ENV === "production", // Cookies seguras solo en producción
        sameSite: "none", // Necesario para solicitudes cruzadas entre frontend y backend
        httpOnly: true, // Las cookies solo se pueden usar en el servidor
      },
    },
  },
  "strapi::favicon",
  "strapi::public",
];
