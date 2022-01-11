const peso1 = 1.0;
const peso2 = Number('2.0');
const peso3 = 1.1;

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso3));


const avaliacao = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(total);
console.log(media);

console.log(media.toFixed(2));  // fixa as casas 
console.log(media.toString(2)); // em binário

console.log(typeof media);
console.log(typeof Number);


