import { Funcionario } from "./Funcionario";

export class Estagiario extends Funcionario {

    receberAjudaDeCusto(valor: number): number {
        return this.salario += valor
        console.log(`${this.nome} recebeu ajuda de custo, seu salário agora é ${this.salario}`)
    }
}