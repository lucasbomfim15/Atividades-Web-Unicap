const prompt = require('prompt-sync')();

let a = parseFloat(prompt("DIGITE O PRIMEIRO LADO DO TRIANGULO"));
let b = parseFloat(prompt("DIGITE O SEGUNDO LADO DO TRIANGULO"));
let c = parseFloat(prompt("DIGITE O TERCEIRO LADO DO TRIANGULO"));

if(a + b < c || a + c < b || c + b < a){
    console.log("NÃO É UM TRIÂNGULO");
}  
else if(a == b && b == c){
    console.log("O TRIÂNGULO É EQUILATERO");
}
else if (a == b || a == c || b == c){
    console.log("O TRIÂNGULO É ISOSCELES");
}
else{
    console.log("O TRIÂNGULO É ESCALENO");
}