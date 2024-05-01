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
