document.getElementById("form").addEventListener("submit", teste)

function teste (evento) {
    let nameUser
    let passwordUser
    let confirmedPasswordUser
    let emailUser
    

    nameUser = document.getElementById("idName").value
    passwordUser = document.getElementById("idPassword").value
    confirmedPasswordUser = document.getElementById("idConfirmPassword").value
    emailUser = document.getElementById("idEmail").value

    let erro = false
    let mensagem = estaVazio(nameUser)
    if (mensagem !== "") {
        alert("Nome, " + mensagem)
        erro = true;
    }

    mensagem = validPassword(passwordUser, confirmedPasswordUser) + estaVazio(passwordUser)
    if (mensagem !== "") {
        alert("Senhas, " + mensagem)
        erro = true;
    }

    mensagem = validEmail(emailUser)
    if (mensagem !== "") {
        alert("E-mail, " + mensagem)
        erro = true;
    }

    if (erro === true) {
        evento.preventDefault()
    }
    return false
}