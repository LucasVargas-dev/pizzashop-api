import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/database/schema/index.ts",
  dialect: "postgresql",
  out: "./drizzle",
  dbCredentials: { 
    url: process.env.DATABASE_URL != undefined ? process.env.DATABASE_URL : "postgres://postgres:postgres@localhost:5432/pizzashop",
  }
});