import { Animal } from "./Animal";

export class Cachorro extends Animal {
    falar(): void {
        console.log (`${this.nome} se comunicou com latidos`)
    }
}