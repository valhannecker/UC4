import { Personagem } from "./Personagem";

export class Guerreiro extends Personagem {

    atacar(): void {
        console.log (`${this.nome} está atacando com sua espada!`)
    }
}