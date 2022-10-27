// par nome valor 

const saudacao = 'Bom dia'; //Contexto léxico

function exec(){
    const saudacao = 'Seja bem-vindo!'; //Contexto léxico 2
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome:'Pedro',
    idade:32,
    peso:90,
    endereço:{
        logradouro:'Rua noroeste',
        numero:123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);