export class Personagem {
    constructor(protected nome: string) {}

    atacar(): void{
        console.log(`${this.nome} está atacando!`)
    }
}