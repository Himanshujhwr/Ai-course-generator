/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_ByAReOd7fI4M@ep-twilight-bush-ad25pu8i-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'",
  },
};
