/*
  Warnings:

  - A unique constraint covering the columns `[qrCode]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "validated" SET DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_qrCode_key" ON "Ticket"("qrCode");
