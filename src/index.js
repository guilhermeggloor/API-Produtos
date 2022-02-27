const express = require('express');
const consultas = require('./database/consultas');

const app = express();

app.use(express.json());

//SALVAR
//ATUALIZAR
//REMOVER
//BUSCAR

//GET -> BUSCAS, POST -> SALVAR, PUT -> ATUALIZAR, DELETE -> DELETAR

//http://localhost:3000
//?home=cauadev&sobrenome=nunes QUERY PARANS
//http://localhost:3000/produtos/100 <- parans
//envar dados pelo body

app.get('/produtos', async (request, response) => {
    const produtos = await consultas.buscarProdutos()
    response.json({
        data: produtos
    })

});

app.post('/saveprodutos', async(request, response) => {
    const produto = request.body;

    await consultas.salvarProduto(produto);

    response.send(`Produto ${produto.nome} salvo.`);
});

app.delete('/deleteproduto/:id', async (request, response) => {
    const id = request.params.id;

    await consultas.deletarProduto(id);

    response.send(`produto com o id ${id} deletado.`);
});

app.put('/updateprodutos', async (request, response) => {
    const produto = request.body;

    await consultas.atualizarProduto(produto);

    response.json( {
        data: produto
    })
});

app.listen(3000, () => {
    console.log("servidor aberto na porta 3000 🤖");
});