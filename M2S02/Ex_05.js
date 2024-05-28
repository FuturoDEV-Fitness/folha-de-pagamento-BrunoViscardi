//Dado um array de números, crie uma função que use reduce para calcular o produto de todos os números no array.

function calcularProduto(numeros) {
    let multiplica = numeros.reduce((produtorio, numero)=> {
        return produtorio * numero;
    }, 1);
    
    return multiplica
}

let numeros = [1, 2, 3, 4, 5];
console.log(calcularProduto(numeros)); // 120