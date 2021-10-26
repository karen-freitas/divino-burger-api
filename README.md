# Divino Burger - API com Node.js

Uma API Rest para gerenciamento de pedidos de um restaturante. A documentação poderá ser acessada pelo link [Divino Burger API](https://divino-burger-api.herokuapp.com/api-docs/) e os testes feitos com os seguintes dados de usuário:

📧  *e-mail* - salao@divinoburger.com 

🔑  *senha* - 123456

## Índice


* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Endpoints](#2-endpoints)
* [3. Entidades e relacionamentos](#3-entidades-e-relacionamentos)
* [4. Tecnologias utilizadas](#4-tecnologias-utilizadas)

## 1. Resumo do projeto

A proposta deste projeto foi desenvolver uma API que permitisse manejar os dados de pedidos de um restaurante, com o intuito de integrá-la à aplicação front-end criada anteriormente e disponível [neste link](https://github.com/karen-freitas/SAP006-burger-queen-api-client). 

Em conjunto, essas aplicações possibilitam à equipe do restaurante a criação e autenticação de usuários, cadastro e atualização de produtos, registro pelos atendentes dos pedidos realizados, visualização dos pedidos pelo setor da cozinha e atualização do status de cada pedido.

O principal objetivo de aprendizagem foi adquirir experiência com o **Node.js** para desenvolvimento de _aplicações de servidor_, junto com uma série
de outras ferramentas comumente utilizadas nesse contexto.


## 2. Endpoints

### 2.1 `/auth` (Hacker Edition)

* `POST /auth`

### 2.2 `/users`

* `GET /users`
* `GET /users/:uid`
* `POST /users`
* `PUT /users/:uid`
* `DELETE /users/:uid`

### 2.3 `/products`

* `GET /products`
* `GET /products/:productid`
* `POST /products`
* `PUT /products/:productid`
* `DELETE /products/:productid`

### 2.4 `/orders`

* `GET /orders`
* `GET /orders/:orderId`
* `POST /orders`
* `PUT /orders/:orderId`
* `DELETE /orders/:orderId`

## 3. Entidades e relacionamentos

O Diagrama Entidade Relacionamento que representa gráficamente como as entidades se relacionam entre si dentro do sistema pode ser conferido abaixo:

<div align="center">
 <img align="center" src="https://user-images.githubusercontent.com/74933033/138796902-75c65fbf-4336-4911-8545-740e3acb46ea.png"/>
</div>


## 4. Tecnologias utilizadas

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Sequelize](https://sequelize.org)
* [PostgreSQL](https://www.postgresql.org/)
* [Postman](https://www.getpostman.com)
* [DBeaver](https://dbeaver.com/)
* [JSON web Token](https://jwt.io/)
* [bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [Swagger](https://swagger.io/docs/specification/about/)
* [ESLint](https://eslint.org/)

##

<p align="center">
Projeto desenvolvido para o <a href="https://www.laboratoria.la/br">Bootcamp da Laboratória Brasil</a> por <a href="https://github.com/karen-freitas">Karen Freitas 👩‍💻</a> 
</p>

