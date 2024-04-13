function calcularAnos(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB) {
    let anos = 0;

    while (populacaoA < populacaoB) {
        populacaoA *= (1 + taxaCrescimentoA);
        populacaoB *= (1 + taxaCrescimentoB);
        anos++;
    }

    return anos;
}

function validarNumero(mensagem) {
    let numero;
    do {
        numero = parseFloat(prompt(mensagem));
    } while (isNaN(numero) || numero <= 0);
    return numero;
}

function validarTaxa(mensagem) {
    let taxa;
    do {
        taxa = parseFloat(prompt(mensagem));
    } while (isNaN(taxa) || taxa <= 0 || taxa >= 1);
    return taxa;
}

do {
    let populacaoA = validarNumero("Informe a população do país A:");
    let taxaCrescimentoA = validarTaxa("Informe a taxa de crescimento do país A (em decimal):");
    let populacaoB = validarNumero("Informe a população do país B:");
    let taxaCrescimentoB = validarTaxa("Informe a taxa de crescimento do país B (em decimal):");

    let anos = calcularAnos(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB);
    console.log("Número de anos necessários: " + anos);

    let repetir = prompt("Deseja calcular novamente? (s/n)").toLowerCase();
    if (repetir !== 's') {
        break;
    };
} while(true)
