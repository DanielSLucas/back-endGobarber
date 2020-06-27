export default {
  jwt: {
    secret: process.env.APP_SECRET || '7b5bede86f74d96841010a052c1d5d4a',
    expiresIn: '1d',
  },
};
