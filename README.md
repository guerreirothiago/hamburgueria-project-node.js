# hamburgueria-project-node.js

<p>Criei uma aplicação que fará o cadastro dos pedidos de uma hamburgueria, e para isso utilizei Node e Express.</p>
<p>Foi utilizadas rotas do tipo GET, POST, PUT, DELETE, PATCH.</p>

 - GET: Rota que lista todos os pedidos já feitos.
 - POST: A rota recebe o pedido do cliente, o nome do cliente e o valor do pedido, e com essas informações é registrado o novo pedido dentro de uma array.
 - PUT: Essa rota altera um pedido já feito. Pode alterar, um ou todos os dados do pedido.
 - DELETE: Essa rota deleta um pedido já feito com o id enviado nos parâmetros da rota.
 - PATCH: Essa rota recebe o id nos parâmetros e assim que ela for chamada, altera o status do pedido recebido pelo id para "Pronto".
 
### Middleware
 - Criei um middleware que será utilizado nas rotas PUT, DELETE e PATCH, então ele verifica se o ID do pedido passado existe. Se caso ele não existir retorno com um erro, e a requisição continua normalmente;
 
### Exemplos
 
 <p>Chamando a rota POST:</p>
 
```js
[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Em preparação"
  }
];
```

<p>Chamando a rota PATCH:</p>

```js
[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Pronto"
  }
];
```
