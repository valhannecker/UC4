import { Pessoa } from "./pessoa";

class Professor extends Pessoa {
    darAula () {
        console.log (`${this.nome} está dando aula.`)
    }
}