export class Funcionario {
    protected nome: string
    protected salario: number

    constructor (nome: string, salario: number) {
        this.nome = nome
        this.salario = salario
    }

    mostrarSalario (): void {
        console.log (`O funcionário ${this.nome} recebe o salário: ${this.salario}`)
    }
}