import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario {
    
    //aumenta em x%
    aumentarSalario (valor: number): number {
        return this.salario += (this.salario * (valor/100))
        // console.log (`O gerente ${this.nome} aumentou o próprio salário para ${this.salario}`)
    }
}