/*
  Warnings:

  - You are about to drop the column `expires_at` on the `ResetTokens` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ResetTokens" DROP COLUMN "expires_at";
