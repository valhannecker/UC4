export class Animal {
    protected nome: string

    constructor (nome: string) {
        this.nome = nome
    }

    comer () {
        console.log (`${this.nome} está comendo!`)
    }

    dormir () {
        console.log (`${this.nome} está dormindo!`)
    }

    emitirSom () {
        console.log(`${this.nome} está emitindo som!`)
    }
}
