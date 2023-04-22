# Burger Hub

### Descrição do projeto:

Projeto de uma hamburgueria utilizando TypeScript, NodeJs e Prisma.

---
### Rotas

##### Clientes:
* http://localhost:3000/clientes/create/ (POST)
* http://localhost:3000/clientes/getall/ (GET)
* http://localhost:3000/clientes/:username/ (GET)
* http://localhost:3000/clientes/:username/ (DELETE)
* http://localhost:3000/clientes/:username/ (PATCH)

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
* http://localhost:3000/pedidos/create/ (POST)
* http://localhost:3000/pedidos/getall/ (GET)
* http://localhost:3000/pedidos/:username/ (GET)
* http://localhost:3000/pedidos/pedido/:id (GET)
* http://localhost:3000/pedidos/:username/:id (DELETE)
* http://localhost:3000/pedidos/update/:id (PATCH)

##### body:
Para criar um Pedido e atualizar também. 
```json
{
    "cliente_username": "", 
    "total": "", 
    "status": "", 
}
```
---

##### Itens:
* http://localhost:3000/itens/create/ (POST)
* http://localhost:3000/itens/getall/ (GET)
* http://localhost:3000/itens/:nome/ (GET)
* http://localhost:3000/itens/:nome/ (DELETE)
* http://localhost:3000/itens/update/:nome/ (PATCH)

##### body:
Para criar um Item e atualizar também. 
```json
{
    "nome": "", 
    "descricao": "", 
    "preco": "", 
}
```
---

##### ItensPedidos:
* http://localhost:3000/pedidos_itens/create/ (POST)
* http://localhost:3000/pedidos_itens/getall/ (GET)
* http://localhost:3000/pedidos_itens/:id/ (GET)
* http://localhost:3000/pedidos_itens/:id/ (DELETE)
* http://localhost:3000/pedidos_itens/update/:id/ (PATCH)

##### body:
Para criar um ItemPedido e atualizar também. 
```json
{
   "pedido_id": "", 
   "item_id": "", 
   "valor": ""
}
```
---


##### Autenticação:
* http://localhost:3000/auth/login/ (POST)

##### body:
Para poder criar pedidos, itens e itensPedidos é necessário se autenticar. Ao se autenticar você vai receber um Token, onde deve ser definido no Headers:

Authorization = Bearer <strong>Token</strong>

Algumas rotas não precisam de autenticação para serem acessadas. Como todas as getall e as rotas de detail. A rota de create de clientes é a única rota de criação que não necessita está logado para criar um dado.
```json
{
   "username": "", 
   "password": "", 
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
