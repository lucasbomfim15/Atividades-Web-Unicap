const ps = require("prompt-sync");
const prompt = ps();



do{
    nota = parseFloat(prompt("DIGITE UMA NOTA DE ZERO A DEZ:"))
    if(nota < 0 || nota > 10){
        alert("NOTA INVÁLIDA, DIGITE UM NUMERO ENTRE 0 E 10")
    }
} while(nota < 0 ||  nota > 10);

alert(`NOTA VÁLIDA, SUA NOTA É ${nota}`)
