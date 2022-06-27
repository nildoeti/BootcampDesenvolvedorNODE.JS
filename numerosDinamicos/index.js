// deixando uma variável dinâmica
console.log(process.argv);

// let numero = 1000;
let numero = parseInt(process.argv[2]);
let multiplos = [];

for (let i = 0; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        multiplos.push(i);
    }
}

console.log(multiplos);