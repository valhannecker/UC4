import { Servico } from "./Servico";
import { Freelancer } from "./Freelancer";
import { Feedback } from "./Feedback";
import { Adicional } from "./Adicional";
import { Design } from "./Design";
import rl from 'readline-sync'
import { AdicionalPrioridade } from "./AdicionalPrioridade";
import { AdicionalUrgencia } from "./AdicionalUrgencia";
import { AdicionalBonus } from "./AdicionalBonus";

const designUM : Design = new Design ("design", 50)
const f : Feedback = new Feedback("Muito bom", 10, "24/04/2026", designUM);
Freelancer.adicionarFeedback(f)

function menu() {
    const nome: string = rl.question("Qual o seu nome? ")
    console.log(`
        --- Workmatch ---
        
        Bem vindo, ${nome}!
        Escolha o serviço desejado:

        1- Design
    `);

    const opcao: number = rl.questionInt("Digite sua opção")

       let servico: Servico

    switch(opcao) {
        case 1:
            servico = new Design("design", 50)
            break
        default:
            console.log('opção inválida!')
            return
    }

    let adicionar: boolean = true

    while(adicionar) {
        console.log(`
            Deseja alguma opção extra?

            0- nenhuma
            1- Prioridade
            2- Urgencia
            3- Bonus
    
            `)
        const opAdicional: number = rl.questionInt('Escolha: ')

        switch (opAdicional) {
            case 1:
                servico = new AdicionalPrioridade(servico, 'prioridade', 40)
                break
            case 2:
                servico = new AdicionalUrgencia(servico, 'urgencia', 50)
                break
            case 3:
                servico = new AdicionalBonus(servico, 'bonus', 45)
            case 0:
                adicionar = false
                break
            default:
                console.log('Opção inválida!')
                break
        }
    }

    console.log (`
        --- Pedido ---

        Cliente: ${nome}
        Lanche: ${servico.getDescricao()}
        Preço: ${servico.getValor().toFixed(2)}

        Obrigada pela preferência, volte sempre! <3
        `)
}