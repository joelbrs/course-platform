/*
  Warnings:

  - The required column `id` was added to the `Classes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `CourseProgress` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Classes" ADD COLUMN     "id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CourseProgress" ADD COLUMN     "id" TEXT NOT NULL;
