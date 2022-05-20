if(window.localStorage){
    console.log("Este navegador aceita LocalStorage")
} else console.log("LocalStorage não permitido")

document.getElementById("form").addEventListener("submit", gravarDadosFormLS)

function recuperarLocalStorage (nome) {
    let objeto = JSON.parse(localStorage.getItem(nome))

    let corpoTable = document.getElementById("corpoTable")
    let linha = document.createElement("tr")
    let colunaNome = document.createElement("td")
    let colunaTelefone = document.createElement("td")

    colunaNome.innerHTML = objeto.nome
    colunaTelefone.innerHTML = objeto.telefone
    linha.appendChild(colunaNome)
    linha.appendChild(colunaTelefone)
    corpoTable.appendChild(linha)
}

window.onload = function () {
    if(localStorage.length > 0){
        recuperarLocalStorage("Pessoa")
    }
}

function gravarDadosFormLS (valor) {
    let nome = document.getElementById('nome').value
    let telefone = document.getElementById('telefone').value

    if (nome === "" || telefone === ""){
        alert("Preencha os campos")
    } else {
        valor = {
            nome: nome,
            telefone: telefone
        }    
        gravarLocalStorage("Pessoa", valor)
    } 
}

function gravarLocalStorage (nome, valor) {
    localStorage.setItem(nome, JSON.stringify(valor))
}

