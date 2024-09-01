/*
  Warnings:

  - A unique constraint covering the columns `[base_currency,target_currency]` on the table `Rate` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Rate_base_currency_target_currency_key" ON "Rate"("base_currency", "target_currency");
