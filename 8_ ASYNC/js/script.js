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


// 6 - Resolvendo Promises

const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10);
    }, 1000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30);
    } else {
        reject("Error!");
    }
}); 

Promise.all([p1, p2, p3])
    .then((values) => console.log(values))
    .catch((error) => console.error(error));


// 7 - Async Functions

async function somarComDelay(a, b) {
    return a + b
}

somarComDelay (2, 4).then((value) => {
console.log(`O valor da soma é ${value}`)
});


// 8 - Await

function resolveComDelay (){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve ("Resolveu com a Promise");

        }, 2000);
    });
}

async function chamadaAsync() {
    console.log("Chamando a promise, e esperando o resultado");
    const result = await resolveComDelay();
    console.log(`O resultado chegou: ${result}`)
}

chamadaAsync ();

// 9 - Generator

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator ();

console.log(gen.next().value)
console.log(gen.next().value)

