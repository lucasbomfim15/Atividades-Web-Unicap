const prompt = require('prompt-sync')();

function calcularSomaEMedia() {
    let numeros = []; 

   
    for (let i = 0; i < 5; i++) {
        let numero = parseFloat(prompt("Digite o " + (i + 1) + "º número:"));

       
        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            console.log("Por favor, digite um número válido.");
            i--; 
        }
    }

  
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

  
    let media = soma / numeros.length;

   
    console.log("A soma dos números é: " + soma.toFixed(2) + "\nA média dos números é: " + media.toFixed(2));
}


calcularSomaEMedia();
