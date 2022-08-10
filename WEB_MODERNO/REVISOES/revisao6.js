const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);

console.log(area);
console.log(typeof Math);

//String 

const escola ="Cod3r";
console.log(escola.charAt(4));
console.log(escola.charAt(5)); // retorna nenhum caractere

console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3'));
console.log(escola.substring(1));
console.log(escola.substring(0, 3));
console.log('Escola'.concat(escola).concat("!"));
console.log(escola.replace(/\w/g, 'e'));
console.log('Ana,Maria,Pedro'.split(','));






