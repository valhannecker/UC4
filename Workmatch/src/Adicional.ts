import { Servico } from "./Servico"

export abstract class Adicional implements Servico {
    nome: string
    valorBase: number

    constructor (protected servico: Servico, nome: string, valorBase: number) {
        this.nome = nome
        this.valorBase = valorBase
    }
   
    getValor(): number {
        return this.servico.getValor()
    }

    getDescricao(): string {
        return this.servico.getDescricao()
    }
}