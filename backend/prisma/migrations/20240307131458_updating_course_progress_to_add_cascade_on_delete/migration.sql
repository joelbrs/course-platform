-- DropForeignKey
ALTER TABLE "CourseProgress" DROP CONSTRAINT "CourseProgress_course_id_fkey";

-- DropForeignKey
ALTER TABLE "CourseProgress" DROP CONSTRAINT "CourseProgress_user_id_fkey";

-- AddForeignKey
ALTER TABLE "CourseProgress" ADD CONSTRAINT "CourseProgress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseProgress" ADD CONSTRAINT "CourseProgress_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
