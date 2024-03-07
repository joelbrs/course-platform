/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Classes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Classes_id_key" ON "Classes"("id");
