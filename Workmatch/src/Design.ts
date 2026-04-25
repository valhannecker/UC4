import { Feedback } from "./Feedback"
import { Servico } from "./Servico"

export class Design implements Servico {
    nome: string
    valorBase: number

    constructor (nome:string, valorBase: number) {
        this.nome = nome
        this.valorBase = valorBase
    }

    getValor(): number {
        return 150
    }

    getDescricao(): string {
        return "serviço de design"
    }
}