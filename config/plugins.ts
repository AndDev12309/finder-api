export default ({ env }) => ({
  "users-permissions": {
    config: {
      providers: {
        google: {
          clientId: env("GOOGLE_CLIENT_ID"),
          clientSecret: env("GOOGLE_CLIENT_SECRET"),
          redirectUri: env("STRAPI_URL") + "/api/auth/callback/google",
        },
      },
    },
  },
});
