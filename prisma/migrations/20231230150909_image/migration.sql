/*
  Warnings:

  - You are about to drop the column `imagePath` on the `scene` table. All the data in the column will be lost.
  - Added the required column `imageName` to the `Scene` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `scene` DROP COLUMN `imagePath`,
    ADD COLUMN `imageName` VARCHAR(191) NOT NULL;
