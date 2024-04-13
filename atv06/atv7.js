const prompt = require('prompt-sync')();


function encontrarMaiorNumero(numeros) {
    let maior = numeros[0]; 

  
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }

    return maior;
}


function encontrarMaior() {
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


    let maiorNumero = encontrarMaiorNumero(numeros);

    // Exibe o resultado
    console.log("O maior número é: " + maiorNumero);
}


encontrarMaior();
