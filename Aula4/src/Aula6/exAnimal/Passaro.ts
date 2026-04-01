import { Animal } from "./Animal";

export class Passaro extends Animal {
    falar(): void {
        console.log (`${this.nome} se comunicou cantando`)
    }
}