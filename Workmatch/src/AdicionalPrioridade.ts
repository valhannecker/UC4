import { Adicional } from "./Adicional";

export class AdicionalPrioridade extends Adicional {
    getValor(): number {
        return super.getValor() + 100
    }

    getDescricao(): string {
        return super.getDescricao() + "com prioridade"
    }
}