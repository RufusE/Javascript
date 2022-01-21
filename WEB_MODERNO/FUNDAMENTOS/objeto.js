const prod1 = {}; //objeto literal {} 
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Descont legal'] = 0.40 //evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj: {
        blabla: 1,
            obj: {
                blabla2: 2
            }
    }
}

console.log(prod2);


//json
'{"nome": "Camisa Polo", "preco": 79.90}';
