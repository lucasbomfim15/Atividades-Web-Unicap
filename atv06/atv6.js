const prompt = require('prompt-sync')();

console.log("Números de 1 a 20 um abaixo do outro:");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}




console.log("Números de 1 a 20 um ao lado do outro:");
let numerosLadoALado = "";
for (let i = 1; i <= 20; i++) {
    numerosLadoALado += i + " ";
}
console.log(numerosLadoALado);
