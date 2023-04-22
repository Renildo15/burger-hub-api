-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "pedidos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pendente',
    "cliente_username" TEXT NOT NULL,
    CONSTRAINT "pedidos_cliente_username_fkey" FOREIGN KEY ("cliente_username") REFERENCES "clientes" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "itens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_username_key" ON "clientes"("username");

-- CreateIndex
CREATE UNIQUE INDEX "pedidos_id_key" ON "pedidos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "itens_id_key" ON "itens"("id");
