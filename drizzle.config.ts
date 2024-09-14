import type { Config } from "drizzle-kit";
import { env } from "./src/env";

export default {
  schema: "./src/database/schema/index.ts",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: 'postgresql://postgres:postgres@localhost:5432/pizzashop',
  }
} satisfies Config;