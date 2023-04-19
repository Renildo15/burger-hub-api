-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco_id" TEXT NOT NULL,
    CONSTRAINT "clientes_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "enderecos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "enderecos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rua" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "cliente_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_endereco_id_key" ON "clientes"("endereco_id");

-- CreateIndex
CREATE UNIQUE INDEX "enderecos_id_key" ON "enderecos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "enderecos_cliente_id_key" ON "enderecos"("cliente_id");
