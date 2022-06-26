// retorna os multiplos de três menores que 1000
let numero = 1000;
let multiplos = [];

for (let i = 0; i < numero; i++) {
    if (i % 3 === 0) {
        multiplos.push(i);
    }
}

console.log(multiplos);
