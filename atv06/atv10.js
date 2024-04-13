const prompt = require('prompt-sync')();

function gerarNumerosInteiros(intervaloInicial, intervaloFinal) {

    if (intervaloInicial <= intervaloFinal) {
       
        for (let i = intervaloInicial + 1; i < intervaloFinal; i++) {
            console.log(i);
        }
    } else {
       
        for (let i = intervaloFinal + 1; i < intervaloInicial; i++) {
            console.log(i);
        }
    }
}


let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));


if (!isNaN(numero1) && !isNaN(numero2)) {
    console.log("Números inteiros no intervalo entre " + numero1 + " e " + numero2 + ":");
    gerarNumerosInteiros(numero1, numero2);
} else {
    console.log("Por favor, digite números inteiros válidos.");
}
