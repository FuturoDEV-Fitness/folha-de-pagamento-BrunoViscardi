const calcularInss = require("./calculo_inss");
const calcularImpostoDeRenda = require("./calculo_imposto_renda");



function calcularSalarioLiquido(salarioBruto, OutrosDescontos, numeroDependetes, pensaoAlimenticia) {
    return SalarioLiquido = salarioBruto - calcularInss(salarioBruto) - calcularImpostoDeRenda(salarioBruto, numeroDependetes, pensaoAlimenticia) - OutrosDescontos
}

module.exports = calcularSalarioLiquido