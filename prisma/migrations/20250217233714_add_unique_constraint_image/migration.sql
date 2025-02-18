/*
  Warnings:

  - A unique constraint covering the columns `[eventId,type]` on the table `Image` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Image_eventId_type_key" ON "Image"("eventId", "type");
