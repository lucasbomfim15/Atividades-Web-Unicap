function somaRecursiva(n) {
   
    if (n === 1) {
        return 1;
    }
  
    else {
        return n + somaRecursiva(n - 1);
    }
}


let numero = 5;
let resultado = somaRecursiva(numero);
console.log("A soma dos números de 1 a", numero, "é:", resultado);
