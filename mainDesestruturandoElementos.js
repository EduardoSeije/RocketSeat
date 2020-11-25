// Desestruturação de objetos
const usuário = {
    nome:'Eduardo',
    idade: 31,
    endereco: {
        cidade: 'São paulo',
        estado: 'SP',
    },

};

const { nome, idade, endereço: { cidade}} = usuário;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome( {nome, idade}) {
    console.log(nome, idade);
}

mostraNome(usuário);
