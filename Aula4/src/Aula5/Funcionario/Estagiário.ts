import { Funcionario } from "./Funcionario";

class Estagiario extends Funcionario {

    receberAjudaDeCusto() {
        this.salario += 20
        console.log(`${this.nome} recebeu ajuda de custo, seu salário agora é ${this.salario}`)
    }
}