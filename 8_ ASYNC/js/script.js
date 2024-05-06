// 1 - SetTimeOut

console.log("Ainda não executou!");

setTimeout(function () {
    console.log("Requisição assíncrona!");
}, 2000)

console.log("Ainda não executou 2");

// 2 set Interval
// Cuidado, forma um loop Infinito

//console.log("Ainda não começou!");

//setInterval (function() {
   // console.log("Intervalo assíncrono!");
//}, 3000)

// 3 - Promise

const promessa = Promise.resolve(5 + 5);

console.log("Algum código.");

// Exibe o valor acima
promessa
    .then((value) => {
        console.log(`A soma é ${value}`);
        return value;
    })
    // retrabalha o código com problema diferente.
    .then((value) => value - 1)
    .then((value) => console.log(`Agora é: ${value}`));

// 4 - Falha na promisse:

Promise.resolve (4 * "asd")
    .then((n) => {
        if (Number.isNaN(n)) {
        throw new Error (`Ocorreu um erro! Valores inválidos.`)
        }
    })

    .catch ((err) => console.log (`Um erro ocorreu: ${err}`))

// 5 - Rejeição

// Promisse
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 10) {
            resolve(`O número é maior que 10!`)
        } else {
            reject (new Error ("Número muito baixo!"))
        }
    });
}

const a = checkNumber(20);

const b = checkNumber(1);

console.log(a, b)

a.then ((v) => console.log(`O resultado é: ${v}`))
.catch((err) => console.log(`Um erro ocorreu ${err}`));

b.then((v) => console.log(`O resultado é: ${v}`))
.catch((err) => console.log(`Um erro ocorreu: ${err}`));



