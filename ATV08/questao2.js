function somaInversosRecursiva(n) {
   
    if (n === 1) {
        return 1;
    } else {
    
        return 1 / n + somaInversosRecursiva(n - 1);
    }
}


let numero = 5;
let resultado = somaInversosRecursiva(numero);
console.log("A soma dos inversos dos números de 1 a", numero, "é:", resultado);
