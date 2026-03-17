class guardiaoAnel {

    private portador: string;

    constructor(nome: string) {
        this.portador = nome
    }

    public mostrarPortador() {
        console.log (`O atual porador do anel é ${this.portador}`)
    }

    public passarAnel(novoPortador: string) {
        this.portador = novoPortador
        this.mostrarPortador()
    }

}

const portador1 = new guardiaoAnel("Bilbo Bolseiro")

portador1.mostrarPortador()
console.log ('---------------------')
portador1.passarAnel("Frodo Bolseiro")