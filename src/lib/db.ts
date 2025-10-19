// file: prisma/client.ts
import { PrismaClient } from "@/generated/prisma";

// Declare global type to prevent redeclaration during hot reload (for Next.js, etc.)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "error", "warn"], // optional for debugging
  });

// In development, store the client in the global object so it persists between reloads
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
