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

// 7 - Parametro opcional

const multiplication = function (n, m) {
  if (n === undefined) {
    return m * 2;
  } else {
    return n * 2;
  }
};

console.log (multiplication(4, 4));
console.log (multiplication(4));

const greeting = (name) => {
  if (!name) {
    console.log ("Olá!");
    return;
  }

  console.log (`Olá ${name}!`)
}

greeting ();
greeting ("João");

// 8 - Valor Default

// Parametro "greet" com valor padrão "Olá", caso chamarmos a função com outro valor, será subtituido, caso nenhum valor ser informado, seguirá com o valor padrão "Olá"
const customGreeting = (name, greet = "Olá") => {
  return `${name}, ${greet}!`;
};

console.log(customGreeting ("João", "Bom dia"));


// Outro exemplo
const repeatText = (text, repeat = 5) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text)
  }
};

repeatText("Testando")

repeatText("Repetindo 225 vezes", 225)

// 9 - Closure

function someFunction () {
  let txt = "Alguma Coisa";

  function display () {
    console.log (txt)
  }

  display ();
}

someFunction()

// 10 - Mais sobre Closure
// o código define uma função de fechamento para realizar multiplicação e demonstra como criar diferentes funções de multiplicação baseadas nessa função de fechamento.
const multiplicationClosure = (n) => {
  return (m) => {
    return n * m;
  };
};

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure (10);

console.log (c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));

// 11 - Recursion

const untilTen = (n, m) => {
  if (n < 10) {
    console.log ("A função parou de executar!")
  } else {
    const x = n - m;
    console.log (x);

    untilTen (x, m);
  }
};

untilTen(100, 7);


// Outro exemplo
function factorial (n) {
  if (n === 0) {
  return 1
  } else {
  return n * factorial (n - 1);
  };
}

const num = 9

const result = factorial (num)

console.log (`O factorial do número: ${num} é ${result}`)


