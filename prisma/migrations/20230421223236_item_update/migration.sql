/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `itens` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "itens_nome_key" ON "itens"("nome");
