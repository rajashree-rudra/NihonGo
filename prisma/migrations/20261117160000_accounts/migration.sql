-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "access_status" AS ENUM ('pending', 'approved', 'rejected');

-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('user', 'admin');

-- CreateEnum
CREATE TYPE "jlpt_level" AS ENUM ('N5', 'N4', 'N3', 'N2', 'N1');

-- CreateTable
CREATE TABLE "profiles" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address_line1" TEXT NOT NULL,
    "address_line2" TEXT,
    "occupation" TEXT NOT NULL,
    "passed_level" "jlpt_level",
    "target_level" "jlpt_level" NOT NULL,
    "status" "access_status" NOT NULL DEFAULT 'pending',
    "role" "user_role" NOT NULL DEFAULT 'user',
    "reviewed_at" TIMESTAMPTZ(3),
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_email_key" ON "profiles"("email");

-- CreateIndex
CREATE INDEX "profiles_status_created_at_idx" ON "profiles"("status", "created_at");

-- Row Level Security on, with no policies: Supabase's public Data API (which uses the publishable key that
-- every browser has) can't read or change this table. The app reaches it only through Prisma on the server.
ALTER TABLE "profiles" ENABLE ROW LEVEL SECURITY;
