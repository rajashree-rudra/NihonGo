import "server-only";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

// One Prisma client per server instance (kept across dev hot reloads). Created on first use, so building
// pages that never touch the database doesn't need DATABASE_URL.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createClient() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set (see .env.local)");
  // DATABASE_URL is Supabase's transaction pooler. `pgbouncer=true` is a flag for Prisma's old query engine;
  // node-postgres doesn't need it.
  const connectionString = url.replace(/([?&])pgbouncer=true(&|$)/, "$1").replace(/[?&]$/, "");
  const adapter = new PrismaPg({
    connectionString,
    // Encrypted. Supabase signs with its own CA, which Node doesn't know, so the certificate isn't verified.
    ssl: { rejectUnauthorized: false },
    max: 5,
    idleTimeoutMillis: 10_000,
  });
  return new PrismaClient({ adapter });
}

/** The database (server only). */
export function db(): PrismaClient {
  return (globalForPrisma.prisma ??= createClient());
}
