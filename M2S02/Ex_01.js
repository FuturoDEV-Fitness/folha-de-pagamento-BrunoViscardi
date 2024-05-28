
//Crie uma função que retorne um novo array, contendo apenas os números pares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


let NumerosPares = numeros.filter((n) => {
    return n % 2 == 0;
})

console.log(NumerosPares)