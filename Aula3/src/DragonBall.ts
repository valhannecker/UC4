class Personagem {
  nome: string;
  poder: number;

  constructor(nome: string, poder: number) {
    this.nome = nome;
    this.poder = poder;
  }

  atacar() { //funcao dentro de classe nao leva "function" no inicio
    console.log(`${this.nome} atacou com poder ${this.poder}!`);
  }
}

// Criando instâncias -> objeto
const goku = new Personagem("Goku", 9000);
const darthVader = new Personagem("Darth Vader", 8500);

goku.atacar();       // Goku atacou com poder 9000!
darthVader.atacar(); // Darth Vader atacou com poder 8500!
