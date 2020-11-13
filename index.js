// O Explorador - Neste Código vamos contar a história de um Explorador em busca da chave para abrir seu baú do tesouro. 

// Passo - 1 - Declaração de variáveis - Definindo os valores usados de base para nossa Aventura:
// Definindo valores usados de base para nossa aventura. 


const Explorador = 'Eduardo'
let bolsaDeItens = []
let moedas = 0
let energia = 5
let recompensas = ['Chave', 'Duck, o Pato de Borracha', 'Moeda', 'Moeda', 'Moeda', 'Moeda', 'Moeda']

// Passo 2 - A taverna.
// O explorador precida de algum lugar para descansar.
function taverna(){
    console.log('O Explorador entrou na Taverna')
    
    if (energia <5) {
        console.log('O ' + Explorador + ' está descansando.')
    } else {
        console.log('O ' + Explorador + ' está revitalizado.')
    }
} 


// Passo 3 - A recompensa. 
// Entregr uma recompensa para o Explorador não desanime.

function pegarItem(item) {
    if (item === 'moeda') {
        console.log('O ' + Explorador + ' ganhou uma moeda.')
        return 'moeda' + 1
    } else {
        console.log('O ' + Explorador + ' ganhou um item.')
        return bolsaDeItens.push(item)
    }
} 

// Passo 4 - A Exploração 
// A vida de um explorador é repleta de perigos, enquanto ele viaja pode avabar encontrando inimigos pelo caminho. 

function batalha(){
    console.log('O ' + Explorador + ' encontrou um monsto.')

if (energia < 1) {
    console.log('O ' + Explorador + ' fugio para a Taverna.')
    return false 

} else if (energia > 1) {
    console.log('O ' + Explorador + ' derrotou o monstro.')
    return true
    if (batalha === true) {
        return energia -1 
    }
}else {
    console.log('O ' + Explorador + ' derrotou o monstro.')
    return false
}
}

function explorar() {
    console.log('O ' + Explorador + ' saiu para explorar.')

        if (energy < 1) {
        console.log('O ' + Explorador + ' não pode explorar.')
        console.log(taverna)
        return false
        
    } else if (energia > 1) {
        console.log(batalha)
        if (batalha === true)
        return roletarRecompensas 
        
    } else {
        console.log(taverna)
        return false
    }
}

// Passo 5 - Fim da jornada 
// Finalmente chegamos no fim de nossa jornada... ou será que não?

function abrirBau() {
     i = bolsaDeItens
     for (i = 0; i == 'Chave'; i++) {
         console.log('Parabéns, você finalemnte abriu o baú, é perigoso lá fora, leve seu certificado!')
         return true 
     }
if (abrirBau === true) {
   
} else {
    return false
}

    
}