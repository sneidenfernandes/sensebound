-- DropForeignKey
ALTER TABLE "Writings" DROP CONSTRAINT "Writings_user_id_fkey";

-- AddForeignKey
ALTER TABLE "Writings" ADD CONSTRAINT "Writings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
