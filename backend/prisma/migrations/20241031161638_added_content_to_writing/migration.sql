/*
  Warnings:

  - Added the required column `content` to the `Writings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Writings" ADD COLUMN     "content" TEXT NOT NULL;
