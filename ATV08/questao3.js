function potenciaRecursiva(x, k) {
   
    if (k === 0) {
        return 1;
    }
   
    else if (k === 1) {
        return x;
    }
 
    else if (k < 0) {
        return 1 / potenciaRecursiva(x, -k);
    }
   
    else {
        let meio = Math.floor(k / 2);
        let parcial = potenciaRecursiva(x, meio);
        if (k % 2 === 0) {
            return parcial * parcial;
        } else {
            return x * parcial * parcial;
        }
    }
}


let base = 2;
let expoente = 5;
let resultado = potenciaRecursiva(base, expoente);
console.log(base + " elevado a " + expoente + " é igual a:", resultado);
