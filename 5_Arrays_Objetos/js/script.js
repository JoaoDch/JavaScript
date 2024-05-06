// 1 - Arrays

const lista = [1, 2, 3, 4, 5]

console.log(lista)

console.log (typeof lista);

const itens = ["João", true, 2, 4.12, []];

console.log (itens);

// 2 - Consultar valores dentro da lista.

const arr = ["a", "b", "c", "d", "e"]
console.log(arr[0])

console.log(arr[4])

// 3 - Propriedades

const numbers = [5, 3, 4]

console.log(numbers["length"]);

const myName = "João"

console.log(myName.length);

// 4 - Métodos

const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "Algum texto"

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// 5 - Objetos

const person = {
    name: "João",
    age: 20,
    job: "Support Analyst",
};

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

// 6 - Criando e deletando propriedades

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car)
// Adição
car.doors = 4

console.log(car)
// Deletando
delete car.km

console.log(car);

// 7 - Mais sobre objetos

const obj = {
    a: "teste",
    b: true
};

console.log(obj instanceof Object);

const obj2 = {
    c: []
};

Object.assign(obj2, obj)

console.log(obj2);

// Conhecendo melhor objetos

console.log(Object.keys(obj))
console.log(Object.keys(obj2))

console.log(Object.keys(car));

console.log(Object.entries(car))

// Mutação 

const a = {
    name: "João"
}

const b = a

console.log(a)
console.log(b)

console.log(a === b)

a.age = 31

console.log(a)
console.log(b)

delete b.age

console.log(a)
console.log(b)

// 10 - Loop em arrays

const users = ["João", "Roberta", "Maria", "Julia", "Ricardo"]

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`)
}

// 11 - Push e Pop

// Push - Adiciona no fim da array
// Pop - Remove no fim do array

const array = ["a", "b", "c"]

array.push("d");

console.log(array);

console.log(array.length);

array.pop()

console.log(array)

const itemRemovido = array.pop()

console.log(itemRemovido);

console.log(array)

array.push ("z", "y", "p");

console.log(array)

// 12 - Shift e Unshift
// Shift remove o primeiro elemento da Array
// Unshift adiciona  itens ao inicio da array

const letters = ["a", "b", "c"]

const letter = letters.shift()
console.log(letter);

console.log(letters)

letters.unshift("p", "f", "k");

letters.unshift("z")

console.log(letters);


// 13 - IndexOf lastIndexOf

const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]

console.log(myElements.indexOf("Maçã"))
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);

console.log(myElements[myElements.indexOf("Abacate")])

//14 - Slice 

const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4)

console.log (subArray)
console.log (testeSlice)

const subArray2 = testeSlice.slice (2, 4 + 1);
console.log(subArray);

const subArray3 = testeSlice.slice (10, 20)

console.log(subArray3);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);

// 15 - ForEach

const nums = [1, 2, 3, 4, 5]

nums.forEach((numero) => {
    console.log(`O número é ${numero}`)
});

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "Java"},
    {title: "Terceiro post", category: "React"},
]

posts.forEach((post) => {
    console.log(`Exibindo posts: ${post.title}, da categoria ${post.category}.`)
})


// 16 - Include

const  brands = ["Nike", "Adidas", "Puma"]

console.log(brands.includes("Adidas"));

console.log(brands.includes("Vans"));

if(brands.includes("Nike")) {
    console.log("Há tênis da marca Nike")
};


// 17 - Reverse
// inverte ordem dos valores da array

const reversetest = [1, 2, 3, 4, 5]

reversetest.reverse();

console.log(reversetest);

// 18 - Trim 

const trimTest = "    testando   \n   " 

console.log(trimTest)

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length);

// 19 - Pad Start
// Preenche antes do valor chegar ao número de caractéres definido.
const testePadStart = "1"

const newNumber = testePadStart.padStart(4, "0")

console.log(testePadStart)

console.log(newNumber);

// Pad End - Preenche após chegar ao número de caractéres definido.

const testePadEnd = newNumber.padEnd(10, 0)

console.log(testePadEnd);

// 20 - Split
// Separa as palavras em lista, como array.

const frase = "O rato roeu a roupa do rei de roma"

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 21 - Join

const fraseDeNovo = arrayDaFrase.join ("");

console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`

console.log(fraseDeCompra);


// 22 - Repeat 
const palavra = "Testando "

console.log(palavra.repeat(5));


// 23 - rest operator

const somaInfinita = (...args) => {

    let total = 0

    for(let i = 0; i < args.length; i++ ) {

        total += args[i]

    }

    return total;
};

console.log(somaInfinita(1, 2, 3))

console.log(somaInfinita(1, 20, 35, 100, 21, 28, 871, 101020303))

// 24 - for of

const somaInfinita2 = (...args) => {
    let total = 0

    for(num of args) {
        total += num
    }

    return total;
}

console.log(somaInfinita2(1, 2, 3, 4));

// 25 - Destructuring Objetos

const userDetails = {
    firstName: "João",
    lastName: "Victor",
    job: "Support Analyst"   
}

const {firstName, lastName, job} = userDetails

console.log(firstName, lastName, job);

// Renomear Variáveis

const {firstName: primeiroNome } = userDetails;

console.log(firstName);

// 26 - Destructuring com arrays

const myList = ["Avião", "Submarino", "Carro"]

const [veiculoA, veiculoB, veiculoC ] = myList

console.log(veiculoA, veiculoB, veiculoC);


// 27 - JSON

const myJson = '{"name": "João", "age": "31", "skills": ["PHP", "JavaScript", "HTML/CSS"]}';

console.log(myJson);

// 28 - Json para objeto e objeto para json

const myObj = JSON.parse(myJson)

console.log(myObj)

// Json invalido

//const badJson = '{"name": "João", "age": 20}'

//const myBadObj = JSON.parse(badJson);

myObj.isOpenToWork = true

console.log(myObj);

const myNewJSON = JSON.stringify(myObj)

console.log(myNewJSON)

console.log(typeof myNewJSON)


