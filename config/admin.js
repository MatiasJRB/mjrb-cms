module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '50f91e96477673e639b33138d9b3f904'),
  },
});
