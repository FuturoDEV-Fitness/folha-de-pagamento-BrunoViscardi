//Crie uma função transformarArray que recebe um array e uma função de transformação, e retorna um novo array, onde cada elemento é o resultado da aplicação da função de transformação ao elemento correspondente do array original.

function transformarArray(array, transformacao) {
    let transformar = array.map((n)=>{
        return transformacao(n)
    })

    return transformar
}

function dobrar(numero) {
return numero * 2;
}

let numeros = [1, 2, 3, 4, 5];
console.log(transformarArray(numeros, dobrar)); // [2, 4, 6, 8, 10]