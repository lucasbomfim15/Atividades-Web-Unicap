
let listaDeAlunos = [];


function adicionarAluno(id, nome, nota) {
    let aluno = {
        id: id,
        nome: nome,
        nota: nota
    };
    listaDeAlunos.push(aluno);
}


function buscarAlunoPorId(id) {
    for (let aluno of listaDeAlunos) {
        if (aluno.id === id) {
            return aluno;
        }
    }
    return null; 
}


function calcularMediaNotas() {
    if (listaDeAlunos.length === 0) {
        return 0; 
    }
    let soma = 0;
    for (let aluno of listaDeAlunos) {
        soma += aluno.nota;
    }
    return soma / listaDeAlunos.length;
}




adicionarAluno(1, "Rogério", 8);
adicionarAluno(2, "Robson", 7);
adicionarAluno(3, "Wesley", 6);


let alunoEncontrado = buscarAlunoPorId(2);
if (alunoEncontrado) {
    console.log("Aluno encontrado:", alunoEncontrado.nome);
} else {
    console.log("Aluno não encontrado.");
}


let mediaNotas = calcularMediaNotas();
console.log("A média das notas dos alunos é:", mediaNotas);
