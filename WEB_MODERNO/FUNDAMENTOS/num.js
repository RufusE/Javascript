// null undefined

const a = {name: 'Teste'};
console.log(a);

const b = a;
console.log(b);

b.name = 'Opa';
console.log(b);
console.log(a);


let valor; // não inicializada
console.log(valor);

valor = null; //ausência de valor
console.log(valor);
// console.log(valor.toString());  //erro!

const produto = {};
console.log(produto.preco); // Não definido preço
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //evite atribuir undefined
console.log(!!produto.preco); //false
//delete produto.preco
console.log(produto);


produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);








