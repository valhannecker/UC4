//1. expõe os detalhes internos de um objeto, permitindo que qualquer parte do sistema modifique seu estado diretamente
//2. private restringe o acesso estritamente à classe onde foi definido, enquanto protected permite que a classe e suas subclasses (herança) acessem o membro. Ambos impedem acesso externo de fora da hierarquia de classes
//3.

//Hobbit
class Hobbit {
    private idade: number
    nome: string

    constructor (idade: number, nome: string) {
        this.idade = idade
        this.nome = nome
    }

    public mostrarIdade () {
        console.log(`A idade do Hobbit ${this.nome} é: ${this.idade}`)
    }


    public fazerAniversario () {
        this.idade += 1
        console.log (`O Hobbit ${this.nome} fez aniversário! Agora sua idade é: ${this.idade}`)
    }
}

const bilbo = new Hobbit (30, "Bilbo Bolseiro")