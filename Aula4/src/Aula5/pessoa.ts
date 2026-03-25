export class Pessoa {
    protected nome: string

    constructor (nome: string) {
        this.nome = nome
    }

    apresentar () {
        console.log (`${this.nome} apresentou-se`)
    }
}