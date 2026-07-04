import { JogoGame } from "./JogoGame"
import { Cliente } from "./Cliente"

export class Locacao {
    jogo: JogoGame
    cliente: Cliente
    dataLocacao: string
    dataDevolucao: string

constructor (jogo: JogoGame, cliente: Cliente, dataLocacao: string, dataDevolucao: string) {
    this.jogo = jogo
    this.cliente = cliente
    this.dataLocacao = dataLocacao
    this.dataDevolucao = dataDevolucao
    }

    verificarAtraso(): boolean {
        const hoje = new Date();

        // Converte as strings para Date
        const dataDev = new Date(this.dataDevolucao);

        return hoje > dataDev;
        
    }

     exibirResumo(): void {
        console.log("===== LOCAÇÃO =====")
        console.log(`Jogo: ${this.jogo.nome}`)
        console.log(`Cliente: ${this.cliente.nome}`)
        console.log(`Data Locação: ${this.dataLocacao}`)
        console.log(`Data Devolução: ${this.dataDevolucao}`)
        console.log(`Status: ${this.verificarAtraso() ? "ATRASADO" : "NO PRAZO"}`)
        console.log("====================\n")
    }
}