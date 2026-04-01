export class Animal {
    
    protected nome: string

    constructor (nome: string) {
        this.nome = nome
    }

    falar (): void {
        console.log(`${this.nome} falou.`)
    }
}