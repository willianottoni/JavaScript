let botao = document.getElementById('botaoValida')
botao.addEventListener('click', testar)

function testar () {
    isVazio("idNome","erroNome","Precisa ter mais que 3 letras e nenhum espaço em branco!",3)    

    isVazio("idData","erroData","Por favor, preencher o campo data!",1)

    isVazio("idCidade","erroCidade","Por favor, preencher o campo cidade!",1)

    // //Inicio validação nome
    // let texto = document.getElementById('idNome').value
    // let spanErroNome = document.getElementById('erroNome')
    // texto = texto.trim(); // Retira espaços em branco
    // texto = texto.replaceAll("  "," ")
    
    // if (texto.length <= 3){
    //     spanErroNome.innerHTML = 'Precisa ter mais que 3 letras e nenhum espaço em branco!'
    // } else {
    //     spanErroNome.innerHTML = ''
    // }

    //Inicio validação data
    // let data = document.getElementById('idData').value
    // let spanErroData = document.getElementById('erroData')

    // if (data.length === 0) {
    //     spanErroData.innerHTML = 'Por favor, preencher o campo data!'
    // } else {
    //     spanErroData.innerHTML = ''
    // }

    //Inicio validação cidade
    // let cidade = document.getElementById('idCidade').value
    // let spanErroCidade = document.getElementById('erroCidade')
    // cidade = cidade.trim()

    // if (cidade.length === 0) {
    //     spanErroCidade.innerHTML = 'Por favor, preencher o campo cidade!'
    // } else {
    //     spanErroCidade.innerHTML = ''
    // }
}


function isVazio (campo, spanErro, mensagem, tamanhoMin) {
    let campoForm = document.getElementById(campo).value
    let spanErroForm = document.getElementById(spanErro)
    campo = campo.trim()

    if (campoForm.length < tamanhoMin) {
        spanErroForm.innerHTML = mensagem
    } else {
        spanErroForm.innerHTML = ''
    }
}


let botaoDois = document.getElementById('botaoTroca')
botaoDois.addEventListener('click', substituir)

function substituir () {
    let textoOriginal = document.getElementById('meuTexto').value
    let procura = document.getElementById('procurar').value
    let substitui = document.getElementById('substitua').value
    let resultado = document.getElementById('novoTexto')

    if (procura.length > 0 && substitui.length > 0) {
        textoOriginal = textoOriginal.replaceAll(procura, substitui)
        resultado.innerHTML = textoOriginal
    }
}

