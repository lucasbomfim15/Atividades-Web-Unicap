const prompt = require('prompt-sync')();

function gerarNumerosESomar(intervaloInicial, intervaloFinal) {
    let soma = 0;

    if (intervaloInicial <= intervaloFinal) {
        for (let i = intervaloInicial + 1; i < intervaloFinal; i++) {
            console.log(i);
            soma += i;
        }
    } else {
        for (let i = intervaloFinal + 1; i < intervaloInicial; i++) {
            console.log(i);
            soma += i;
        }
    }

    return soma;
}

let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

if (!isNaN(numero1) && !isNaN(numero2)) {
    console.log("Números inteiros no intervalo entre " + numero1 + " e " + numero2 + ":");
    let somaTotal = gerarNumerosESomar(numero1, numero2);
    console.log("Soma dos números: " + somaTotal);
} else {
    console.log("Por favor, digite números inteiros válidos.");
}
