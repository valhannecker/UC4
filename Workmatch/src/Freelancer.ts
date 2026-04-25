import { Feedback } from "./Feedback";
import { Servico } from "./Servico";

export class Freelancer {
  private servicos: Servico[] = [];
  private feedbacks: Feedback[] = [];
    static adicionarFeedback: any;

  constructor(public nome: string) {}

  adicionarServico(servico: Servico) {
    this.servicos.push(servico);
  }

  adicionarFeedback(feedback: Feedback) {
    this.feedbacks.push(feedback);
  }

  listarServicos() {
    this.servicos.forEach(p => console.log (this.servicos))
  }

  listarFeedbacks() {
    this.feedbacks.forEach(p => console.log(this.feedbacks))
  }

}
