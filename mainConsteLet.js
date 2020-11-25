const usuario = { nome: 'Diego'};
usuario.nome = 'Cleiton';

console.log(usuario);
// mutação da constante.

function teste(x) {
    let y = 2;

    if (x > 5) {
        console.log(x, y);

    }
}
teste(10);
// escopo é o que está dentro de cada chave {}


