# Burger Hub

### Descrição do projeto:

Projeto de uma hamburgueria utilizando TypeScript, NodeJs e Prisma.

---
### Rotas

##### Clientes:
*https://burger-hub-api.onrender.com/clientes/create/ (POST)
*https://burger-hub-api.onrender.com/clientes/getall/ (GET)
*https://burger-hub-api.onrender.com/clientes/:username/ (GET)
*https://burger-hub-api.onrender.com/clientes/:username/ (DELETE)
*https://burger-hub-api.onrender.com/clientes/:username/ (PATCH)

##### body:
Para criar um cliente e atualizar também.
```json
{
    "nome": "", 
    "email": "", 
    "username": "", 
    "password": "",
    "telefone": "", 
    "endereco": ""
}
```
---


##### Pedidos:
*https://burger-hub-api.onrender.com/pedidos/create/ (POST)
*https://burger-hub-api.onrender.com/pedidos/getall/ (GET)
*https://burger-hub-api.onrender.com/pedidos/:username/ (GET)
*https://burger-hub-api.onrender.com/pedidos/pedido/:id (GET)
*https://burger-hub-api.onrender.com/pedidos/:username/:id (DELETE)
*https://burger-hub-api.onrender.com/pedidos/update/:id (PATCH)

##### body:
Para criar um Pedido e atualizar também. Total é do tipo float 
```json
{
    "cliente_username": "", 
    "total": , 
    "status": "" 
}
```
---

##### Itens:
*https://burger-hub-api.onrender.com/itens/create/ (POST)
*https://burger-hub-api.onrender.com/itens/getall/ (GET)
*https://burger-hub-api.onrender.com/itens/:nome/ (GET)
*https://burger-hub-api.onrender.com/itens/:nome/ (DELETE)
*https://burger-hub-api.onrender.com/itens/update/:nome/ (PATCH)

##### body:
Para criar um Item e atualizar também. Preco é do tipo float
```json
{
    "nome": "", 
    "descricao": "", 
    "preco":  
}
```
---

##### ItensPedidos:
*https://burger-hub-api.onrender.com/pedidos_itens/create/ (POST)
*https://burger-hub-api.onrender.com/pedidos_itens/getall/ (GET)
*https://burger-hub-api.onrender.com/pedidos_itens/:id/ (GET)
*https://burger-hub-api.onrender.com/pedidos_itens/:id/ (DELETE)
*https://burger-hub-api.onrender.com/pedidos_itens/update/:id/ (PATCH)

##### body:
Para criar um ItemPedido e atualizar também. Valor é do tipo float.
```json
{
   "pedido_id": "", 
   "item_id": "", 
   "valor": 
}
```
---


##### Autenticação:
*https://burger-hub-api.onrender.com/auth/login/ (POST)

##### body:
Para poder criar pedidos, itens e itensPedidos é necessário se autenticar. Ao se autenticar você vai receber um Token, onde deve ser definido no Headers:

Authorization = Bearer <strong>Token</strong>

```json
{
   "username": "", 
   "password": ""
}
```



### Instalação
Siga os passos abaixo para configurar e executar o projeto em sua máquina local.

1. Clonar o repositório

```console
git clone https://github.com/Renildo15/burger-hub-api.git
cd burger-hub-api
```

2. Crie um arquivo .env na raiz da pasta do seu projeto e defina o DATABASEURL da seguinte forma:
```console
DATABASE_URL="postgresql://user:password@localhost:5432/db?schema=public"
```

3. Criar uma network Docker:
Uma network Docker é usada para permitir a comunicação entre os containers do projeto. Você pode criar uma network usando o seguinte comando:

```console
docker network create -d bridge nome-network
```
4. Executar o container do PgAdmin:
```console
docker run --name pgadmin-server -p 15432:80 -e "PGADMIN_DEFAULT_EMAIL=admin@admin.com" -e "PGADMIN_DEFAULT_PASSWORD=pgadmin" --network=my-network -d dpage/pgadmin4:latest

```

5. Executar o container do PostgreSQL:
```console
docker run --name postgres-server -e "POSTGRES_PASSWORD=postgres" -p 5432:5432 -v $HOME/dev/docker/volumes/postgres/postgresql:/var/lib/postgresql -v $HOME/dev/docker/volumes/postgres/postgresql_data:/var/lib/postgresql/data --network=my-network -d postgres:latest

```

6. Executando os containers:
```console
docker start postgres-server pgadmin-server
```

7. Com o projeto aberto, execute os seguintes comandos no terminal:
```console
npm install
```
```console
npx prisma generate
```
```console
npx prisma migrate dev
```
```console
npm run dev
```
