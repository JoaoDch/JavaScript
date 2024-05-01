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
}

console.log(obj)