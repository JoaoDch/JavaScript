// 1 - Movendo-se pelo Dom

console.log(document.body)

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)

// 2 - Selecionando por tag

const listItens = document.getElementsByTagName("li");
console.log(listItens);

// 3 - selecionando por id

const listTitles = document.getElementById("title");

console.log(listTitles);

// 4 - Selecionando por class

const listClass = document.getElementsByClassName("product")

console.log(listClass);

// 5 - Selecionando por elementos CSS

const productsQuery = document.querySelectorAll(".product")
console.log(productsQuery)

const productsQuery2 = document.querySelector("#main-container");

console.log(productsQuery2);

// 6 - insert before

const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

header.insertBefore(p, title)

// 7 - Append Child

const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li)

// 8 - replaceChild

const h2 = document.createElement("h2")

h2.textContent = "Meu novo título"

header.replaceChild(h2, title)


// 9 - createTextNode

const myText = document.createTextNode("Mais um título")

console.log(myText);

const h3 = document.createElement("h3")

h3.appendChild(myText)

console.log(h3)

mainContainer.appendChild(h3)


// 10 - trabalhando com elementos
// Muda e consulta atributos

const firstLink = navLinks.querySelector("a")

console.log(firstLink)

firstLink.setAttribute("href", "https://www.google.com");

firstLink.setAttribute("target", "_blank");


// 11 - altura e largura
// consulta altura e largura de elementos

const footer = document.querySelector("footer")

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// 12 - posição do elemento

const product1 = productsQuery[0];

console.log(product1.getBoundingClientRect());

//13 - CSS com JS

mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "15px"

// 14 - Estilizando vários elementos d euma vez

for (const li of listItens) {
    li.style.backgroundColor = "red";
}

