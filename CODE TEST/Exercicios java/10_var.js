{
    {
        {
            {var sera = 'Será'}
            console.log(sera);//Dentro do bloco
        }
    }
}


console.log(sera); //Fora do bloco

function teste(){
    var local = 123;
    console.log(local);
}

teste();
//console.log(local); //Erro variável está fora de function