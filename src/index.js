const calcularImpostoDeRenda = require("./calculo_imposto_renda");
const calcularInss = require("./calculo_inss");
const calcularSalarioLiquido = require("./calculo_salario_liquido");


console.log(calcularInss(2700))
console.log(calcularImpostoDeRenda(4700,1,0))
console.log(calcularSalarioLiquido(4700, 200, 1, 0))