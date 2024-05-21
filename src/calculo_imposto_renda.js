const calcularInss = require("./calculo_inss");


function calcularImpostoDeRenda(salarioBruto, numeroDependetes, pensaoAlimenticia) {
    let aliquota = 0;
    let deducao = 0;
    if (salarioBruto <= 2112.00) {
        aliquota = 0
        deducao = 0

    } else if (salarioBruto > 2112.00 && salarioBruto <= 2826.65) {
        aliquota = 7.5 / 100
        deducao = 158.40

    } else if (salarioBruto > 2826.65 && salarioBruto <= 3751.05) {
        aliquota = 15 / 100
        deducao = 370.40

    } else if (salarioBruto > 3751.05 && salarioBruto <= 4664.68) {
        aliquota = 22.5 / 100
        deducao = 651.73

    } else {
        aliquota = 27.5 / 100
        deducao = 884.96
    }

    ImpostoDeRenda = ((salarioBruto - (189.59 * numeroDependetes) - pensaoAlimenticia - calcularInss(salarioBruto)) * aliquota) - deducao

    return ImpostoDeRenda
}



module.exports = calcularImpostoDeRenda