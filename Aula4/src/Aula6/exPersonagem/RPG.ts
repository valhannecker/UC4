import { Personagem } from "./Personagem";
import { Mago } from "./Mago";
import { Guerreiro } from "./Guerrreiro";
import { Arqueiro } from "./Arqueiro";

const personagemGenerico = new Personagem ("Arnaldo César Coelho")

const mago = new Mago ("Gandalf")

const guerreiro = new Guerreiro ("Boromir")

const arqueiro = new Arqueiro ("Legolas")

personagemGenerico.atacar()
mago.atacar()
guerreiro.atacar()
arqueiro.atacar()