// par nome / valor

const saudacao = 'Opa'; //Contexto léxico


function exec(){
    const saudacao = 'Falaaaa'; //Contexto léxico 2
    return saudacao;
}


//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome:'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito legal',
        numero: 123
    }
}



console.log(saudacao);
console.log(exec());
console.log(cliente);


