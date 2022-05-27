window.addEventListener("load", iniciar);
let nomeArquivo, listaArquivos
let registros = []
google.charts.load('current', {packages: ['corechart']});
let data;

/**
 * @description Função para atribuir a cada botão uma ação e a execução de uma função
 */
function iniciar () {
    arquivo = document.getElementById("arquivo")
    arquivo.addEventListener("change", defineArquivo)
    document.getElementById("carregar").addEventListener("click", carregar)
    document.getElementById("processar").addEventListener("click", function() {processar(nomeArquivo)})
    document.getElementById("exibir").addEventListener("click", exibir)

    data = google.visualization.arrayToDataTable([])
}

function defineArquivo () {
    listaArquivos = document.getElementById("arquivo")
    nomeArquivo = listaArquivos.files[0]
}

function carregar () {
    let ler = new FileReader()
    ler.onload = function(progressEvent) {
        let linhas = this.result.split(/\r\n|\n/)
        for (let linha = 0; linha < linhas.length-1; linha++){
            let dados = linhas[linha].split(/,/)
            registros.push(dados)
        }
    }
    ler.readAsText(nomeArquivo)
}

function processar (meuArquivo) {
    let conjuntoDados = []
    for (let linha = 0; linha < registros.length-1; linha++) {
        let dados = registros[linha]
        if (linha === 0) {
            for (let coluna = 0; coluna < dados.length; coluna++) {
                if (coluna === 0) {
                    data.addColumn("string", dados[coluna])
                } else {
                    data.addColumn("number", dados[coluna])
                }
            }
        } else {
            if (dados[dados.length-1] !== "") {
                let vetor = []
                for (let campo = 0; campo < dados.length; campo++) {
                    if (campo === 0) {
                        vetor.push(dados[campo])
                    } else {
                        vetor.push(parseFloat(dados[campo]))
                    }
                }
                data.addRow(vetor)
            }
        }
    }
}

function exibir () {
    let local = document.getElementById("grafico")
    let chart = new google.visualization.LineChart(local)
    let options = { 
        title: "Test de Gráfico",
        curveType: "line",
        legend: {position: "right"},
        width: 1200,
        height: 800,
        hAxis: {slantedTextAngle:90}
    }
    chart.draw(data,options)
}