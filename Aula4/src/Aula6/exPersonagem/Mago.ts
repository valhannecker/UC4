import { Personagem } from "./Personagem";

export class Mago extends Personagem {
    
    atacar(): void {
        console.log (`${this.nome} está atacando com um feitiço!`)
    }
}