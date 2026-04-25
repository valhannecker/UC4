import { Adicional } from "./Adicional";

export class AdicionalUrgencia extends Adicional {
    getValor(): number {
        return super.getValor() + 50
    }

    getDescricao(): string {
        return super.getDescricao() + "com urgência"
    }
}