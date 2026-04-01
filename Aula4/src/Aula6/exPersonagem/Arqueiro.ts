import { Personagem } from "./Personagem";

export class Arqueiro extends Personagem {
    
    atacar(): void {
        console.log(`${this.nome} está atacando com seu arco e flecha!`)
    }
}