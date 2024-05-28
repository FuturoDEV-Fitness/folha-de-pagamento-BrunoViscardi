

//Dado um array de objetos representando pessoas com propriedades nome e idade, crie uma função que retorne um array contendo apenas os nomes das pessoas com idade maior ou igual a 18 anos.

function filtrarAdultos(pessoas) {
    let Adultos = pessoas.filter((p)=>{
       return p.idade == 18 || p.idade > 18
    })
    let NomeAdultos = Adultos.map((p)=>{
        return p.nome
    })
    
    return NomeAdultos
}

let pessoas = [
    { nome: 'Alice', idade: 17 },
    { nome: 'Bob', idade: 22 },
    { nome: 'Charlie', idade: 16 },
    { nome: 'David', idade: 19 }
];
console.log(filtrarAdultos(pessoas)); // ['Bob', 'David']