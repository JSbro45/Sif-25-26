
export default {
  datasource: {
    provider: 'postgresql',
    url: process.env.DATABASE_URL, // Make sure DATABASE_URL is set in your environment
  },
};