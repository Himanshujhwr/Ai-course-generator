// import { neon } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-http';

// const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
// export const db = drizzle(sql);

// import { neon } from "@neondatabase/serverless";
// import { drizzle } from "drizzle-orm/neon-http";
// import * as schema from "./configs/schema.js";

// const dbUrl = process.env.NEXT_PUBLIC_DRIZZLE_DB_URL;

// if (!dbUrl) {
//     throw new Error("Database URL is not provided in environment variables.");
// }

// const sql = neon(dbUrl);
// export const db = drizzle(sql, { schema });
import { neon } from "@neondatabase/serverless";

const databaseUrl =
  process.env.DATABASE_URL || process.env.NEXT_PUBLIC_DATABASE_URL;

if (!databaseUrl) {
  console.warn("⚠️ DATABASE_URL not found. DB disabled during build.");
}

export const db = databaseUrl ? neon(databaseUrl) : null;
