const calcularImpostoDeRenda = require("./calculo_imposto_renda");
const calcularInss = require("./calculo_inss");
const calcularSalarioLiquido = require("./calculo_salario_liquido");
const readline = require('readline')

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


NomeFuncionario = ""
CpfFuncionario = 0
mesPagamento = 1
salarioBruto = 0
OutrosDescontos = 0
numeroDependetes = 0
pensaoAlimenticia = 0

input.question("Nome do funcionário: ", (NomeFuncionarioDigitado) => {
    NomeFuncionario = NomeFuncionarioDigitado;

    input.question("CPF do funcionário: ", (CpfFuncionarioDigitado) => {
        CpfFuncionario = CpfFuncionarioDigitado

        input.question("Mês do pagamento (numérico): ", (mesPagamentoDigitado) => {
            mesPagamento = mesPagamentoDigitado

            input.question("Salário bruto: ", (salarioBrutoDigitado) => {
                salarioBruto = salarioBrutoDigitado

                input.question("Descontos em folha: ", (OutrosDescontosDigitado) => {
                    OutrosDescontos = OutrosDescontosDigitado

                    input.question("Número de dependentes: ", (numeroDependetesDigitado) => {
                        numeroDependetes = numeroDependetesDigitado

                        input.question("Valor de pensão alimentícia paga: ", (pensaoAlimenticiaDigitado) => {
                            pensaoAlimenticia = pensaoAlimenticiaDigitado

                            input.close()

                            calcularSalarioLiquidoEApresentar()

                        })
                    })
                })
            })
        })
    })
})



function calcularSalarioLiquidoEApresentar() {
    contibuicaoINSS = calcularInss(salarioBruto).toFixed(2)
    ImpostoDeRenda = calcularImpostoDeRenda(salarioBruto, numeroDependetes, pensaoAlimenticia).toFixed(2)
    SalarioLiquido = calcularSalarioLiquido(salarioBruto, OutrosDescontos, numeroDependetes, pensaoAlimenticia).toFixed(2)



    console.log(`
----------------- Folha de Pagamento -----------------
Nome: ${NomeFuncionario}
CPF: ${CpfFuncionario}
Salário Bruto: ${salarioBruto}
INSS: ${contibuicaoINSS}
Imposto de renda: ${ImpostoDeRenda}
Salário líquido: ${SalarioLiquido}

`)
}








