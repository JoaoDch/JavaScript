// métodos

const animal = {
    raça: "Cachorro",
    nome: "Bobby",
    latir: function() {
        console.log("au au")
    }       
    
};

console.log(animal)

animal.latir ();

// 2 -aprofundando métodos

const pessoa = {
    nome: "João",

    getNome: function() {
        return this.nome;
    },

    setNome: function(novoNome) {
        this.nome = novoNome
    }
};

console.log(pessoa.nome);

console.log(pessoa.getNome())

pessoa.setNome("João Victor")

console.log(pessoa.getNome())

// Prototype

const text = "asd"

console.log(Object.getPrototypeOf(text));

const bool = true

console.log(Object.getPrototypeOf(bool));

const arr = []

console.log(Object.getPrototypeOf(arr))


// 4 - mais sobre prototype

const myObject = {
    a: "b"
}

console.log(Object.getPrototypeOf(myObject))

const mySecondObject = Object.create(myObject);

console.log(mySecondObject)

// 5 - classes básicas

const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao)

console.log(pastorAlemao.patas)

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog"

console.log(bulldog)


// 6 - função como classe construtora

function criarCachorro(nome, raca) {
    const cachorro = Object.create ({})

    cachorro.raca = raca
    cachorro.nome = nome

    return cachorro;
}

const bob = criarCachorro ("bob", "Vira-lata")

console.log (bob)

const mel = criarCachorro ("Mel", "Dalmata")

console.log (mel)

// 7 - Funcoes como classe

function Carro (marca, km) {
    this.marca = marca;
    this.km = km;
}

const bmw = new Carro ("BMW", "10.000 Km")

console.log(bmw)

// 8 - metodos na função construtora

Carro.prototype.somDoCarro = function() {
    console.log("Vruuuuummmmmm!!!!")
}

console.log(Carro.prototype)

bmw.somDoCarro();


// 9 - Classes es6

class CarroClasse {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
}

const Ferrari = new CarroClasse ("Ferrari", "2022");

console.log (Ferrari);

console.log(Object.getPrototypeOf(Ferrari));

// 10 - Mais sobre classes

class Geladeira {
    constructor(marca, tamanho, cor) {
        this.marca = marca;
        this.tamanho = tamanho;
        this.cor = cor;
    }

    descreverGeladeira () {
        console.log(`A geladeira é muito boa, é da marca: ${this.marca}, tem a cor: ${this.cor}, e tem um tamanho de: ${this.tamanho} `)
    }
}

const electrolux = new Geladeira("Electrolux", "2 metros de altura e 50cm de largura", "Cinza");

console.log(electrolux);

electrolux.descreverGeladeira();

// 11 - Override

class Humano {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
}

const joão = new Humano("João Victor", 20, "1.80");

console.log(joão);

Humano.prototype.idade = "Idade não definida";

console.log(joão.idade);

console.log(Humano.prototype.idade);

// 12 - Symbol

class Aviao {
    constructor (marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas
    }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;

Aviao.prototype[pilotos] = 3;

const boeing = new Aviao ("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);

// 13 - post e getter

class Post {
    constructor (titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `Você está lendo o ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ");
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post", "É um post sobre programação")

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação, Javascript, React"

console.log(myPost)

// 14 - Herança

class Nicole {
    constructor(raça, idade, corDoCabelo) {
        this.raça = raça;
        this.idade = idade;
        this.corDoCabelo = corDoCabelo;
    }

}

class João extends Nicole {
    constructor(raça, idade, corDoCabelo){
        super(raça, idade, corDoCabelo);

    }
}

const namorado = new João ("Humano", 20, "Castanho");

console.log(namorado);

// instance of

console.log(João instanceof Nicole);

console.log(namorado instanceof João);

console.log(new João (4, "teste") instanceof Nicole)