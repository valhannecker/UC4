import { Funcionario } from "./Funcionario";

class gerente extends Funcionario {
    
    aumentarSalario () {
        this.salario += 9999
        console.log (`O gerente ${this.nome} aumentou o próprio salário para ${this.salario}`)
    }
}