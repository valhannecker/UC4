import { Pessoa } from "./pessoa";

class aluno extends Pessoa {
    estudar () {
        console.log (`${this.nome} está estudando.`)
    }
}