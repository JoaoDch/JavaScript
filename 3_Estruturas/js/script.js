// 1 - Váriaveis
let nome = "João";

console.log (nome);

nome = "João Victor";

console.log (nome);

const idade = 20;

console.log (idade);

//idade = 20;

console.log (typeof none);

console.log(typeof idade);

//2 - mais sobre variáveis
 //Let e Const

let a = 10,
 b = 20,
 c = 30;
  console.log (a, b, c)


const nomeCompleto = "João Victor Dalla Chiesa";
const nomecompleto = "João Victor";
  console.log (nomeCompleto, nomecompleto);


let _teste = "válido";
let $teste = "válido";

console.log (_teste, $teste);

// 3 - Prompt
const age = prompt ("Digite sua idade: ");

console.log (`Você tem ${age} anos!`);

// 4 - Alert
alert("Testando");

const z = 10;

alert( `O número é ${z}`)


// 5 - Math , Ceil - Arredonda para cima, Floor - Arredonda para baixo
console.log (Math.max(5, 2, 1, 10))

console.log (Math.floor(5.14))

console.log (Math.ceil(5.14))

//6 - Console
console.log ("Teste");

console.error("Erro!");

// 7 - If
const m = 10;

if(m > 5) {
  console.log (" M é maior que 5 ")
}

const user = "João"

if (user === "João") {
  console.log ("Olá João!")
}

if (user === "Maria") {
  console.log ("Olá Maria!")
}

console.log (user === "João", user === "Maria");

// 8 - Else
const loggedIn = false

if(loggedIn) {
  console.log("Está autenticado!")  
} else {
  console.log ("Não está autenticado")
}

const q = 10;
const w = 15;

if(q > 5 && w > 20) {
  console.log(" Números mais altos")
} else {
  console.log (" Os números não são mais altos ")
}

// 9 - Else If
if (1 > 2){
  console.log ("teste")
} else if (2 > 3){
  console.log ("Teste 2")
} else if (5 > 1) {
  console.log ("Agora sim!")
}

const userName = "João"
const userAge = 20

if (userName === "José") {
  console.log ("Bem vindo José");
} else if (userName === "João" && userAge === 20) {
  console.log ("Olá João! Você tem 20 anos");
} else {
  console.log ("Nenhuma condição aceita.");
}

// 10 - While
// LOOP INFINITO
//let p = 10;

//while ( p > 5) {
 //console.log (`Repetindo ${p}`);
  //p++;
//} 

// 11 - do while

//let o = 10

//do {
  //console.log (`Valor de o: ${o}`)
  //o--
//} while (o > 1)

// 12 - for 

for (let t = 0; t < 10; t++) {
  console.log ("Repetindo algo...");
}

let r = 10

for (r; r > 0; r = r-1) {
  console.log (`O R está diminuindo: ${r}`);
}

// Identação 

for (let u = 0; u < 10; u++) {
  if (u * 2 > 10){
    console.log (`Maior que 10! ${u}`)
  } else {
    if (u / 2 === 0) {
      console.log ("Deu 0")
    } 
  }
} 

// Break

for (let g = 3; g < 15; g++) {
  console.log (`o g é ${g}`)

  if (g === 10) {
    console.log ("Chegamos no 10!")
    break;
  }
}

// Continue 

for (s = 1; s < 10; s++) {
  if (s % 2 === 0) {
    console.log ("Número par!");
    continue;
  }
  console.log (s);
}

// 15 - Switch

const job = "Advogado";

switch (job) {
  case "Programador":
    console.log ("Você é um programador!");
    break;
  
  case "Advogado":
    console.log ("Você é um advogado!");
    break;
    
  case "Engenheiro":
    console.log ("Você é um engenheiro");
    break;
  
  default:
    console.log ("Profissão não encontrada");  
}