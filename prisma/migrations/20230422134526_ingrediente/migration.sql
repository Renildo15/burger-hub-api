-- CreateTable
CREATE TABLE "ingredientes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "item_ingrediente" (
    "itemId" TEXT NOT NULL,
    "ingredienteId" TEXT NOT NULL,

    PRIMARY KEY ("itemId", "ingredienteId"),
    CONSTRAINT "item_ingrediente_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "itens" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "item_ingrediente_ingredienteId_fkey" FOREIGN KEY ("ingredienteId") REFERENCES "ingredientes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ingredientes_nome_key" ON "ingredientes"("nome");
