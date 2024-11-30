export default ({ env }) => ({
  "users-permissions": {
    config: {
      providers: {
        google: {
          clientId: env("GOOGLE_CLIENT_ID"),
          clientSecret: env("GOOGLE_CLIENT_SECRET"),
          redirectUri: `${env("BASE_URL")}/api/connect/google/callback`,
        },
        facebook: {
          clientId: env("FACEBOOK_CLIENT_ID"),
          clientSecret: env("FACEBOOK_CLIENT_SECRET"),
          redirectUri: `${env("BASE_URL")}/api/connect/facebook/callback`,
        },
      },
    },
  },
});
