export class Cliente {
    nome: string
    idade: number
    telefone: string
    email: string

    constructor(nome: string, idade: number, telefone: string, email: string) {
        this.nome = nome
        this.idade = idade
        this.telefone = telefone
        this.email = email
    }
}