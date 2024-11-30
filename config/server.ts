export default ({ env }) => ({
  proxy: true,
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("BASE_URL", "https://finder-api-production.up.railway.app"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
