export class JogoGame {
    public nome: string
    public plataforma: string
    public genero: string
    public valorDiaria: number
    public disponivel: boolean = true

    constructor (nome: string, plataforma: string, genero: string, valorDiaria: number, disponivel: boolean) {
        this.nome = nome;
        this.plataforma = plataforma;
        this.genero = genero;
        this.valorDiaria = valorDiaria;
        this.disponivel = disponivel
    }
}