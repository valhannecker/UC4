import { Cliente } from "./Cliente";
import { JogoGame } from "./JogoGame";
import { Locacao } from "./Locacao";

//criando clientes
const cliente1 = new Cliente("Ana Souza", 22, "99999-1111", "ana@email.com");
const cliente2 = new Cliente("Bruno Lima", 30, "99999-2222", "bruno@email.com")

//criando jogos
const jogo1 = new JogoGame("FIFA 24", "PS5", "Esporte", 12, true);
const jogo2 = new JogoGame("Red Dead Redemption 2", "PC", "RPG", 10, true);


const locacao1 = new Locacao(jogo1, cliente1, "2026-06-20", "2026-06-25");
locacao1.exibirResumo()
const locacao2 = new Locacao(jogo2, cliente2, "2026-07-01", "2026-07-10");
locacao2.exibirResumo()