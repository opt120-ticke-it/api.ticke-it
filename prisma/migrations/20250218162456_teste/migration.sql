-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'DISPONÍVEL',
ALTER COLUMN "validated" SET DEFAULT false;
