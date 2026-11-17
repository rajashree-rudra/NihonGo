// Prisma CLI settings (migrations, generate). The app itself connects through src/lib/db.ts.
import { defineConfig } from "prisma/config";

// Locally the connection strings live in .env.local; in CI they come from the environment.
try {
  process.loadEnvFile(".env.local");
} catch {
  // no .env.local — fine in CI
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  // Migrations use the session pooler (DIRECT_URL); the app uses the transaction pooler (DATABASE_URL).
  datasource: { url: process.env.DIRECT_URL },
});
