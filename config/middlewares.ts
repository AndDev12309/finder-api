export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  {
    name: "strapi::session",
    config: {
      secure: true, // Asegura que las cookies solo se envíen a través de HTTPS
      sameSite: "none", // Compatible con navegadores modernos
    },
  },
  "strapi::favicon",
  "strapi::public",
];
