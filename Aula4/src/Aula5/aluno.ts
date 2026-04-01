import { Pessoa } from "./pessoa";

export class Aluno extends Pessoa {
    estudar () {
        console.log (`${this.nome} está estudando.`)
    }
}