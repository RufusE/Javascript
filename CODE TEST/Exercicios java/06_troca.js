//Troca de valores das variáveis
let a = 7;
let b = 94;

console.log("Antes da troca\n");
console.log("valor de a : " + a);
console.log("Valor de b : " + b +"\n");

let temp = a; // recebe valor de a
a = b; // a recebe valor de b
b = temp; //b recebe o valor de temp que recebeu valor de a

console.log("Depois da troca\n");
console.log("Valor de a : " + a);
console.log("Valor de b : " + b);

//Outra forma de trocar valor
let c = 10;
let d = 35;

console.log("\n");
console.log("Antes da troca");
console.log(c);
console.log(d);

[c,d] = [d,c];

console.log("Depois da troca");
console.log(c);
console.log(d);




