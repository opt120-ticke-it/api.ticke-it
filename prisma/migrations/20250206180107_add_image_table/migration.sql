-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "base64" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
