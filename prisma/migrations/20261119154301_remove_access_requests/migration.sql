-- Step 2 of 2: remove what access requests and the old registration form used.

-- DropIndex
DROP INDEX "profiles_status_created_at_idx";

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "address_line1",
DROP COLUMN "address_line2",
DROP COLUMN "occupation",
DROP COLUMN "passed_level",
DROP COLUMN "reviewed_at",
DROP COLUMN "status";

-- DropEnum
DROP TYPE "access_status";

-- Countries are now stored as ISO codes (the old form saved names).
UPDATE "profiles" SET "country" = CASE "country"
  WHEN 'Japan' THEN 'JP' WHEN 'Bangladesh' THEN 'BD' WHEN 'India' THEN 'IN'
  WHEN 'Philippines' THEN 'PH' WHEN 'Vietnam' THEN 'VN' WHEN 'China' THEN 'CN'
  ELSE "country" END;
