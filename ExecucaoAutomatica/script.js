const opcaoData = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    timeZoneName: "long"
}

// const opcaoData = {
//     dateStyle: "full",
//     timeStyle: "full"
// }

/**
 * @description Conversão do objeto Date para pt-BR
 */
const formatBR = new Intl.DateTimeFormat('pt-BR', opcaoData)


/**
 * @description Função mostra um relógio atualizado a cada 1 segundo no carregamento da página
 */
window.onload = () => { // Evento onload é usado quando a página é carregado
    showClock('relogio')

    setInterval(() => showClock('relogio'), 1000 ) // Atualiza a página a cada 1 segundo
    
    //setTimeout(fimdeTempo, 5000) - Apresenta uma mensagem após 5 segundos
}

/**
 * @description Função alerta com uma mensagem a cada 5 segundos
 */
const fimdeTempo = () => {
    alert('Passou-se 5 segundos'); 
    setTimeout(fimdeTempo, 5000)
}

/**
 * 
 * @description Função recebe o id do elemento que irá receber o objeto Date
 */
const showClock = (whereId) => {
    const date = new Date()
    document.getElementById(whereId).innerHTML = formatBR.format(date)
}