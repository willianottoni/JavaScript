function estaVazio (conteudo) { //Verifica se o conteúdo está vazio
    let mensagem = ""
    if (conteudo === "") { 
        mensagem = 'O campo está vazio!'
    }

    return mensagem
}

function validPassword (password, passwordConfirmed) { //Verifica se a senha é diferente da senha da confirmação
    let mensagem = ""
    if (password !== passwordConfirmed){
        mensagem = "As senhas não conferem!"
    }

    return mensagem

}

function validEmail (conteudo) { //Verifica se o campo email está vazio
    let mensagem = estaVazio(conteudo)
    
    return mensagem
}