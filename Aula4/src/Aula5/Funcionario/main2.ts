import { Funcionario } from "./Funcionario";
import { Gerente } from "./Gerente";
import { Estagiario } from "./Estagiario";

const ValGerente = new Gerente ("Valentina", 99999999)
const Felipe = new Estagiario ("Felipe", 50000)

ValGerente.mostrarSalario()
ValGerente.aumentarSalario(100)
ValGerente.mostrarSalario()