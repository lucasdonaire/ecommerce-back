/*
  Warnings:

  - A unique constraint covering the columns `[orderId,productId]` on the table `ProductOrder` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `ProductOrder_orderId_productId_key` ON `ProductOrder`(`orderId`, `productId`);
