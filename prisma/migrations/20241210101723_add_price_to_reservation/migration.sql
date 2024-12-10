/*
  Warnings:

  - You are about to drop the column `price` on the `Car` table. All the data in the column will be lost.
  - Added the required column `price` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "price";

-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN     "price" INTEGER NOT NULL;