const connection = require('./connection');

//SALVAR
async function salvarProduto(produto) {
    const conn = await connection.connect()

    const sql = 'INSERT INTO produtos(nome, preco, quantidade) VALUES (?, ?, ?)'
    const values = [produto.nome, produto.preco, produto.quantidade];

    return await conn.query(sql, values);
}

//CONSULTAR PRODUTOS
async function buscarProdutos() {
    const conn = await connection.connect()

    const result = await conn.query('SELECT * FROM produtos');
    return result[0]
}

//DELETAR POR ID
async function deletarProduto(id) {
    const conn = await connection.connect()

    const sql = 'DELETE FROM produtos WHERE id = ?'
    const values = id;

    await conn.query(sql, values);
}
//ATUALIZAR PRODUTO
async function atualizarProduto(produto) {
    const conn = await connection.connect();
    const sql = 'UPDATE produtos SET nome = ?, preco = ?, quantidade = ? WHERE id = ?'
    const values = [produto.nome, produto.preco, produto.quantidade, produto.id]
    
    await conn.query(sql, values);
}

module.exports = {salvarProduto, buscarProdutos, deletarProduto, atualizarProduto};