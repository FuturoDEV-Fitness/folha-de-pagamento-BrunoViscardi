const calcularImpostoDeRenda = require("./calculo_imposto_renda");
const calcularInss = require("./calculo_inss");
const calcularSalarioLiquido = require("./calculo_salario_liquido");
const readline = require('readline')
const fs = require('fs')
const PDFDocument = require('pdfkit')

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
        CpfFuncionario = formatarCPF(CpfFuncionarioDigitado)

        input.question("Mês do pagamento (numérico): ", (mesPagamentoDigitado) => {
            mesPagamento = mesPagamentoDigitado

            input.question("Salário bruto: ", (salarioBrutoDigitado) => {
                salarioBruto = Number(salarioBrutoDigitado)

                input.question("Descontos em folha: ", (OutrosDescontosDigitado) => {
                    OutrosDescontos = Number(OutrosDescontosDigitado)

                    input.question("Número de dependentes: ", (numeroDependetesDigitado) => {
                        numeroDependetes = Number(numeroDependetesDigitado)

                        input.question("Valor de pensão alimentícia paga: ", (pensaoAlimenticiaDigitado) => {
                            pensaoAlimenticia = Number(pensaoAlimenticiaDigitado)

                            input.question("Deseja imprimir uma versão em PDF? (s ou n)", (resposta) => {
                                
                                input.close()
                                calcularSalarioLiquidoEApresentar(resposta)

                                

                            })
                        })
                    })
                })
            })
        })
    })
})



function calcularSalarioLiquidoEApresentar(SimOuNao) {
    contibuicaoINSS = calcularInss(salarioBruto)
    ImpostoDeRenda = calcularImpostoDeRenda(salarioBruto, numeroDependetes, pensaoAlimenticia)
    SalarioLiquido = calcularSalarioLiquido(salarioBruto, OutrosDescontos, numeroDependetes, pensaoAlimenticia)



    console.log(`
----------------- Folha de Pagamento -----------------
Nome: ${NomeFuncionario}
CPF: ${CpfFuncionario}
Salário Bruto: R$${salarioBruto.toFixed(2)}
INSS: R$${contibuicaoINSS.toFixed(2)}
Imposto de renda: R$${ImpostoDeRenda.toFixed(2)}
Salário líquido: R$${SalarioLiquido.toFixed(2)}

`)


    if (SimOuNao.toLowerCase() === 's') {


        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream('folha_pagamento.pdf'))
        doc.fontSize(12);

        doc.text('----------- Folha de Pagamento ----------- ');
        doc.text(`Data de geração: ${new Date().toLocaleDateString()}`);
        doc.text(`Nome: ${NomeFuncionario}`)
        doc.text(`CPF: ${CpfFuncionario}`);
        doc.text('-------- - - - --------')
        doc.text(`Salário bruto: R$${salarioBruto.toFixed(2)}`);
        doc.text('-------- - - - --------')
        doc.text(`INSS: R$${contibuicaoINSS.toFixed(2)}`);
        doc.text(`Imposto de renda: R$${ImpostoDeRenda.toFixed(2)}`);
        doc.text(`Outros descontos: R$${OutrosDescontos.toFixed(2)}`);
        doc.text('-------- - - - --------')
        doc.text(`Salário Liquido: R$${SalarioLiquido.toFixed(2)}`);
        doc.end();

        console.log('Folha de pagamento salva em folha_pagamento.pdf')

    }

}





function formatarCPF(cpf) {
    // Remove qualquer caractere que não seja dígito
    const cleanedCpf = cpf.replace(/\D/g, '');
    // Aplica a formatação xxx.xxx.xxx-xx
    return cleanedCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
















