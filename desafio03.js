class Heroi{
    constructor(nome, idade, tipo, arma){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.arma = arma;
    }

    ataqueDoHeroi(){
        console.log(`O ${this.tipo} chamado ${this.nome} de ${this.idade} anos, atacou usando ${this.arma}!`);
    }
}


let heroi1 = new Heroi("Maltazar", 68, "mago negro", "magia negra");

heroi1.ataqueDoHeroi();
