function calcularPotencia(base, expoente) {
    let resultado = 1;
    for (let i = 0; i < expoente; i++) {
        resultado *= base;
    }
    return resultado;
}

function main() {
    const base = parseFloat(prompt("Digite a base: "));
    const expoente = parseInt(prompt("Digite o expoente: "));

    const resultado = calcularPotencia(base, expoente);
    console.log(`${base} elevado a ${expoente} é igual a ${resultado}`);
}

main();