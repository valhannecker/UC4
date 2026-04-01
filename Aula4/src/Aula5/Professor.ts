import { Pessoa } from "./pessoa";

 export class Professor extends Pessoa {
    darAula (): void {
        console.log (`${this.nome} está dando aula.`)
    }
}