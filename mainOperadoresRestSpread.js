// Operadores rest/spread
// REST - pegar o resto das propriedades
const usuário = {
    nome : 'Edu',
    idade: 31,
    empresa :'none'
};

const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

conaole.log(a);
console.log(b);
console.log(c);

function soma(...params ) {
    return params.reduce((total, next) => total + next)
}

console.log(soma(1, 2, 3))

// SPREAD - propagar, repassar as informações para outra estrutura de dados

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);


const usuario1 = {
    nome : 'eduardo',
    idade: 31,
    empresa: 'none',
}

const usuario2 = {...usuario1, nome : 'gabriel'};

console.log(usuario2);
