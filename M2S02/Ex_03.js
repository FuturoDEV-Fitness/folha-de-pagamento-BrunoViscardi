//Dado um array de objetos representando produtos com propriedades categoria e preco, crie uma função que agrupe os produtos por categoria e calcule o preço total de cada categoria.

function agruparPorCategoria(produtos) {

    let precosCategorias = [];



    produtos.forEach((produto) => {
        categoriaExistente = precosCategorias.find((p)=> p.categoria == produto.categoria)
        if (categoriaExistente) {
            categoriaExistente.preco += produto.preco;
        } else {
            precosCategorias.push(produto)
        }
    })



return precosCategorias
}








let produtos = [
    { categoria: 'eletrônicos', preco: 99.99 },
    { categoria: 'livros', preco: 19.99 },
    { categoria: 'eletrônicos', preco: 199.99 },
    { categoria: 'livros', preco: 29.99 },
    { categoria: 'roupas', preco: 49.99 }
];
console.log(agruparPorCategoria(produtos));
// /
// {
// eletrônicos: 299.98,
// livros: 49.98,
// roupas: 49.99
// }
// \/