function erro (mensagem: string) : never {
    throw new Error(mensagem)
}

erro("Voce cometeu um erro")