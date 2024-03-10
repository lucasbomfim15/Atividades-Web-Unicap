const prompt = require('prompt-sync')();


let valor = parseInt(prompt("DIGITE O VALOR QUE VOCÊ DESEJA SACAR: "));
if (valor % 10 == 0){
    console.log("SAQUE REALIZADO COM SUCESSO");
}
else {
    console.log("VALOR INVÁLIDO, DIGITE UM NÚMERO MULTIPLO DE 10");
}