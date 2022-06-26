// retorna os multplos de 5 menores que 1000
let numero = 1000;
let multiplos = [];

for (let i = 0; i < numero; i++) {
    if (i % 5 === 0) {
        multiplos.push(i);
    }
}

console.log(multiplos);
