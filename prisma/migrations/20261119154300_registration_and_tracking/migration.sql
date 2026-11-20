-- Open registration (no access requests) + study tracking. Step 1 of 2: only adds things, so the site
-- version from before keeps working until the new one is deployed. Step 2 removes the old columns.

-- New registration fields; the old ones become optional here and are removed in step 2.
ALTER TABLE "profiles"
ADD COLUMN     "area" TEXT,
ADD COLUMN     "date_of_birth" DATE,
ADD COLUMN     "last_active_at" TIMESTAMPTZ(3),
ALTER COLUMN "postal_code" DROP NOT NULL,
ALTER COLUMN "region" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "address_line1" DROP NOT NULL,
ALTER COLUMN "occupation" DROP NOT NULL;

-- CreateTable
CREATE TABLE "activity_days" (
    "user_id" UUID NOT NULL,
    "day" DATE NOT NULL,
    "seconds" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "activity_days_pkey" PRIMARY KEY ("user_id","day")
);

-- CreateTable
CREATE TABLE "learned_items" (
    "user_id" UUID NOT NULL,
    "set_id" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "learned_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "learned_items_pkey" PRIMARY KEY ("user_id","set_id","item")
);

-- CreateIndex
CREATE INDEX "activity_days_day_idx" ON "activity_days"("day");

-- AddForeignKey
ALTER TABLE "activity_days" ADD CONSTRAINT "activity_days_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "learned_items" ADD CONSTRAINT "learned_items_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Row Level Security on, no policies: Supabase's public Data API can't touch these tables (see the first migration).
ALTER TABLE "activity_days" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "learned_items" ENABLE ROW LEVEL SECURITY;
