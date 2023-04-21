/*
  Warnings:

  - You are about to drop the `enderecos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `endereco_id` on the `clientes` table. All the data in the column will be lost.
  - Added the required column `endereco` to the `clientes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "enderecos_cliente_id_key";

-- DropIndex
DROP INDEX "enderecos_id_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "enderecos";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clientes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT NOT NULL
);
INSERT INTO "new_clientes" ("email", "id", "nome", "telefone") SELECT "email", "id", "nome", "telefone" FROM "clientes";
DROP TABLE "clientes";
ALTER TABLE "new_clientes" RENAME TO "clientes";
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
