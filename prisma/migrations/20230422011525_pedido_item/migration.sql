-- CreateTable
CREATE TABLE "pedidoItens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pedido_id" TEXT NOT NULL,
    "item_id" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    CONSTRAINT "pedidoItens_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "pedidos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "pedidoItens_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "itens" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "pedidoItens_id_key" ON "pedidoItens"("id");
