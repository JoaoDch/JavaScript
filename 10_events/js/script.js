// 1 - adicionando eventos

const btn = document.querySelector("#my-button")

btn.addEventListener("click", function(){
    console.log("Clicou aqui")
})

// 2 - removendo evento

const secondBtn = document.querySelector("#btn");

function imprimirMensagem () {
    console.log("teste")
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {

console.log("Evento removido")
secondBtn.removeEventListener("click", imprimirMensagem)

})

// 3 - Propagação 

const  containerBtn = document.querySelector("#btn-container");

const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener ("click", () => {
    console.log("Evento 1")
})

btnInsideContainer.addEventListener ("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2")
})

// 4 - ações padrão

const a = document.querySelector ("a")
a.addEventListener ("click", (e) => {
    e.preventDefault()

    console.log("Não alterou a página.")
})

// 6 - eventos do teclado

// Digitou
//document.addEventListener("keyup", (e) => {
//    console.log(`Apertou a tecla: ${e.key}`)
//})


// Apertou e soltou
//document.addEventListener("keydown", (e) => {
//    console.log(`Apertou a tecla: ${e.key}`)
//})

// 7 - Eventos de mouse

const mouseEvent = document.querySelector("#mouse")

mouseEvent.addEventListener("mousedown", () => {
    console.log("Pressionou botão")
})

mouseEvent.addEventListener("mouseup", () => {
    console.log("Soltou botão")
})

mouseEvent.addEventListener("dblclick", () => {
    console.log("Dois clicks")
})

// 8 - Movimento do mouse

//document.addEventListener("mousemove", (e) => {
//    console.log(`No eixo X: ${e.x}`)
//    console.log(`No eixo Y: ${e.y}`)
//})

//9 - evento de scroll
window.addEventListener("scroll", (e) => {
    if(window.pageYOffSet > 200) {
        console.log("Passamos de 200px")
    }
})

// 10 - Evento de foco/blur

const input = document.querySelector ("#my-input");

input.addEventListener("focus", (e) => {
    console.log("Entrou no input")
})

input.addEventListener("blur", (e) => {
    console.log("Saiu do input")
})

// 11 - evento de carregamento da página

window.addEventListener("load", () => {
    console.log("A página carregou")
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "";
})

// 12 - Debounce

const debounce = (f, delay) => {

    let timeout
    return (...arguments) => {
        if(timeout) {
            clearTimeout(timeout)
        }
        
        timeout = setTimeout(() => {
            f.apply(arguments)    
        }, delay);
    };

};

window.addEventListener("mousemove", debounce (() => {
    console.log("Executando a cada 400ms");
}, 400
));