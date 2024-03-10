const prompt = require('prompt-sync')();


let numeroSecreto = 60;

let chute = prompt("CHUTE UM NUMERO : ");

if(chute == numeroSecreto){
    console.log("PARABÉNS, VOCÊ DESCOBRIU O NÚMERO SECRETO");
}
else if (chute < numeroSecreto){
    console.log("O NÚMERO SECRETO É MAIOR QUE SEU CHUTE!");
}
else if ( chute > numeroSecreto){
    console.log("O NUMERO SECRETO É MENOR QUE SEU CHUTE");
}