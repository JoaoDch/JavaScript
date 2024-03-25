// 1- Criando uma função

function minhaFuncao () {
  console.log("Testando");
}

minhaFuncao();

const minhaFuncaoEmVariavel = function () {
  console.log ("Função em variável");
};

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
  console.log (`Imprimindo: ${txt}`);
}

funcaoComParametro("Opa")

// 2 - Return

const a = 10;
const b = 20;
const c = 30;
const d = 40;

//Parametros n1, n2 que recebem valores para somar "+"
function soma (n1, n2) {
  return n1 + n2;
}

const resultado = soma(a ,b);

console.log(resultado);

console.log (soma(c, d));

// 3 - Escopo na função
// Variáveis dentro da "function" não afetam as externas.
let y = 10;

function testandoEscopo () {
  let y = 20
  console.log(`Y dentro da função: ${y}`);
}

console.log (`Y fora da função: ${y}`);

testandoEscopo ()


// 4 - Escopo Aninhado
// Variável Global
let m = 10;

function escopoAninhado () {
  //Variável limitada a função
  let m = 20;

  if (true) {
    //Variável limitada somente ao bloco "if"
    let m = 30
    
    //Imrpime o valor da variável limitada ao bloco "if"
    console.log (m);
 }

 //Imprime o valor da variável limitada a função
 console.log(m);
}

// Chama a função escopoAninhado
escopoAninhado ();

// Imprime o valor da variável global
console.log (m);

// 5 -Arrow Function
// Função Anonima, precisa estar numa variável
const testeArrow = () => {
  console.log ("Esta é uma arrow function!");
}

testeArrow();

const parOuImpar = (n) => {
  if (n % 2 === 0) {
    console.log ("Par");
    return
  }

  console.log ("Impar");
};

parOuImpar(5);
parOuImpar(10);

// 6 - Mais sobre Arrow Function
// Método mais rápido e resumida

const raizQuadrada = (x) => {
  return x * x;
}

// Não precisa do "return" pois o retorno é especificado na função.
const raizQuadrada2 = (n) => n * n;

console.log (raizQuadrada(22));
console.log (raizQuadrada2(9));

