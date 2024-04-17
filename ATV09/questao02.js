let alunos = {};

function adicionarAluno(id, nome, nota) {
    alunos[id] = { nome: nome, nota: nota };
}

function buscarAlunoPorId(id) {
    return alunos[id] || null;
}

function calcularMediaNotas() {
    let numAlunos = Object.keys(alunos).length;
    if (numAlunos === 0) {
        return 0;
    }
    let somaNotas = 0;
    for (let id in alunos) {
        somaNotas += alunos[id].nota;
    }
    return somaNotas / numAlunos;
}


adicionarAluno(1, "João", 8);
adicionarAluno(2, "Maria", 7);
adicionarAluno(3, "Pedro", 6);


let alunoEncontrado = buscarAlunoPorId(2);
if (alunoEncontrado) {
    console.log("Aluno encontrado:", alunoEncontrado.nome);
} else {
    console.log("Aluno não encontrado.");
}


let mediaNotas = calcularMediaNotas();
console.log("A média das notas dos alunos é:", mediaNotas);
