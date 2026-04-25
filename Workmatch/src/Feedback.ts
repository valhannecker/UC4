import { Servico } from "./Servico";

export class Feedback {
  constructor(
    public comentario: string,
    public nota: number,
    public data: string,
    public servico: Servico
  ) {}
}

// const f : Feedback = new Feedback("Muito bom", 10, null, design);
// Freelancer.adicionarFeedback(f);
