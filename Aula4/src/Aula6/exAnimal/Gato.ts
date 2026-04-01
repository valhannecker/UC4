import { Animal } from "./Animal";

export class Gato extends Animal {
    falar(): void {
        console.log (`${this.nome} se comunicou com miados`)
    }
}