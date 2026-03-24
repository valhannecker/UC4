import { Animal } from "./Animal" 

export class Cachorro extends Animal {
    latir () {
        console.log (`${this.nome} está latindo! \n Au! Au!`)
    }
}