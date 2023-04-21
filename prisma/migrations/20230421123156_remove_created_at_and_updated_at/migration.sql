/*
  Warnings:

  - You are about to drop the column `created_at` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `clientes` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clientes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco_id" TEXT NOT NULL,
    CONSTRAINT "clientes_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "enderecos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_clientes" ("email", "endereco_id", "id", "nome", "telefone") SELECT "email", "endereco_id", "id", "nome", "telefone" FROM "clientes";
DROP TABLE "clientes";
ALTER TABLE "new_clientes" RENAME TO "clientes";
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");
CREATE UNIQUE INDEX "clientes_endereco_id_key" ON "clientes"("endereco_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
