const prompt = require('prompt-sync')();

function gerarTabuada(numero) {
    console.log("Tabuada de " + numero + ":");


    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(numero + " X " + i + " = " + resultado);
    }
}


let numeroTabuada = parseInt(prompt("Digite um número inteiro de 1 a 10 para gerar a tabuada:"));


if (!isNaN(numeroTabuada) && numeroTabuada >= 1 && numeroTabuada <= 10) {
    gerarTabuada(numeroTabuada);
} else {
    console.log("Por favor, digite um número inteiro válido entre 1 e 10.");
}
