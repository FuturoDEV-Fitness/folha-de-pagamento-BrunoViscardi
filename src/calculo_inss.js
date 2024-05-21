function calcularContribuicao(salarioBruto, alicota) {
    return contibuicaoINSS = salarioBruto * alicota
}


function calcularInss(salarioBruto) {
    let TETO_INSS = 908.85;
    let alicota = 0;
    let contibuicaoINSS = 0;
    if (salarioBruto <= 1412.00) {
        alicota = 7.5 / 100
        contibuicaoINSS = calcularContribuicao(salarioBruto, alicota)
    } else if (salarioBruto > 1412.00 && salarioBruto <= 2666.68) {
        alicota = 9 / 100
        contibuicaoINSS = calcularContribuicao(salarioBruto, alicota)
    } else if (salarioBruto > 2666.68 && salarioBruto <= 4000.03) {
        alicota = 12 / 100
        contibuicaoINSS = calcularContribuicao(salarioBruto, alicota)
    } else {
        alicota = 14 / 100
        contibuicaoINSS = calcularContribuicao(salarioBruto, alicota)
        if (contibuicaoINSS > TETO_INSS) {
            contibuicaoINSS = TETO_INSS
        }
    }

    return contibuicaoINSS
}


module.exports = calcularInss