-- CreateTable
CREATE TABLE "pedidos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pendente',
    "cliente_username" TEXT NOT NULL,
    CONSTRAINT "pedidos_cliente_username_fkey" FOREIGN KEY ("cliente_username") REFERENCES "clientes" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "pedidos_id_key" ON "pedidos"("id");
