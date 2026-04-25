export interface Servico {
    nome: string
    valorBase: number

    getValor (): number
    getDescricao (): string
}