import { Feedback } from "./Feedback";

export class Reputacao {
  constructor(private feedbacks: Feedback[]) {}

  calcularMedia(): number {
    if (this.feedbacks.length === 0) return 0;

    const soma = this.feedbacks.reduce((acc, f) => acc + f.nota, 0);
    return soma / this.feedbacks.length;
  }

  Destaque(): boolean {
    return this.calcularMedia() > 4.5;
  }

  gerarResumo(): string {
    const media = this.calcularMedia();

    let resultado = `Reputação: ${media.toFixed(2)}`;

    if (this.Destaque()) {
      resultado += "\n Freelancer destaque";
    }

    return resultado;
  }
}