/*
  Warnings:

  - Added the required column `created_at` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `clientes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clientes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "update_at" DATETIME NOT NULL,
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
