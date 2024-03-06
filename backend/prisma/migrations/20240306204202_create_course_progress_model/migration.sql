-- CreateEnum
CREATE TYPE "ProgressStatus" AS ENUM ('COMPLETE', 'INCOMPLETE');

-- CreateTable
CREATE TABLE "CourseProgress" (
    "user_id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "conclusion_date" TIMESTAMP(3),
    "status" "ProgressStatus" NOT NULL DEFAULT 'INCOMPLETE',

    CONSTRAINT "CourseProgress_pkey" PRIMARY KEY ("user_id","course_id")
);

-- AddForeignKey
ALTER TABLE "CourseProgress" ADD CONSTRAINT "CourseProgress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseProgress" ADD CONSTRAINT "CourseProgress_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
