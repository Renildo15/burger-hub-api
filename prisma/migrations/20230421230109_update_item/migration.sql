/*
  Warnings:

  - You are about to alter the column `preco` on the `itens` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_itens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" REAL NOT NULL
);
INSERT INTO "new_itens" ("descricao", "id", "nome", "preco") SELECT "descricao", "id", "nome", "preco" FROM "itens";
DROP TABLE "itens";
ALTER TABLE "new_itens" RENAME TO "itens";
CREATE UNIQUE INDEX "itens_nome_key" ON "itens"("nome");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
