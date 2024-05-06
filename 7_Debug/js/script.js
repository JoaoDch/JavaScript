// strict

"use strict";

//opa = "teste";

const opa = "teste";

// 2 - console.log
let a = 1;
let b = 2;

if (a == 1) {
  a = b + 2;
}

console.log(a, b);

for (let i = 0; i < b; i++) {
  a = a + 2;
  console.log(a);
}

if (a > 5) {
  a = 25;
}

console.log(a);

// 3 - debugger
let c = 1;
let d = 2;

if (c == 1) {
  c = d + 2;
}

// debugger;

for (let i = 0; i < d; i++) {
  c = c + 2;
}

// debugger;

if (c > 5) {
  c = 25;
}

// debugger;

// 4- tratamento de dados

function checkNumber (n) {

    const result = Number(n);

    if(Number.isNaN(result)){
        console.log("Valor incorreto!")
    return;
    }

    console.log("Sucesso!")
    return result;
}

checkNumber (7);
checkNumber ("25")
checkNumber ({})
checkNumber ("teste")

// 5 - Throw NewError

//let x = 10;

//if(x != 11) {
    //throw new Error("O valor de x não pode ser diferente de 11")  
//}


// 6 - try catch

try {
    const soma = x + y;
  } catch (error) {
    console.log(`Erro no programa: ${error}`);
  }

// 7 - Finally
// Finally é um bloco no final do catch e vai ser executado independente do resultado do try catch

try {
    const value = checkNumber ("1")

    if(!value) {
        throw new Error("Valores inválidos")
    }
} catch (error) {
    console.log(`Puxa! Aconteceu um problema :( ${error}`)
} finally {
    console.log("O código foi executado com sucesso!")
}

 
// Assertion 
// O desenvolver enfrentará e não irá aparecer ao usuário final
function checkArray (arr) {

    if (arr.length === 0 ) {
        throw new Error ("O array precisa ter elementos") 
    } else {
        console.log(`O array tem ${arr.length} elementos`)
    }
}

checkArray([1, 2, 3, 4]);