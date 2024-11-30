export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::cors",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:3000", // Tu frontend local
        "https://finder-rosy.vercel.app", // Tu frontend en producción
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      credentials: true, // Permitir cookies
    },
  },
  "strapi::security",
  "strapi::session",
  {
    name: "strapi::session",
    config: {
      cookie: {
        secure: true, // Permitir solo en HTTPS
        sameSite: "none", // Necesario para aplicaciones cruzadas (frontend-backend en dominios distintos)
      },
    },
  },
  "strapi::favicon",
  "strapi::public",
];
