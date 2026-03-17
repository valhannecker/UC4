class mago {

    private nome: string
    private energia: number

    constructor(nome: string) {
        this.nome = nome
        this.energia = 100
    }

    public conjurarMagia() {
        if (this.energia >= 30) {
            console.log(`${this.nome} conjurou uma poderosa magia!`)
            this.energia -= 30
        } else {
            console.log(`${this.nome} não tem energia o suficiente para conjurar uma magia.`)
        }
    }

    public descansar() {
        console.log (`${this.nome} recuperou suas energias após um descanso.`)
    }

    public exibirEnergia() {
        console.log(`${this.nome} atualmente está com ${this.energia}% de energia.`)
    }
}

const Gandalf = new mago("Gandalf, The Grey")
const Saruman = new mago("Saruman, The White")

Gandalf.exibirEnergia()
Saruman.exibirEnergia()

