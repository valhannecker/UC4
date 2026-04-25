import { Adicional } from "./Adicional";

export class AdicionalBonus extends Adicional {
    getValor(): number {
        return super.getValor() + 75
    }
    getDescricao(): string {
        return super.getDescricao() + "com bonus"
    }
}