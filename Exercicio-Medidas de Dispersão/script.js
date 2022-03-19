const calcMedia = () => {
  //Função para calcular a Média
  const a1 = parseFloat(document.getElementById('a1').value); //Captura do valor e conversão de string para Float number
  const a2 = parseFloat(document.getElementById('a2').value);
  const a3 = parseFloat(document.getElementById('a3').value);
  const a4 = parseFloat(document.getElementById('a4').value);
  const a5 = parseFloat(document.getElementById('a5').value);

  const media = (a1 + a2 + a3 + a4 + a5) / 5; //Calculo da Média

  document.getElementById('media').value = media; //Mostrar valor no campo
};

const calcDesvio = () => {
  //Função para calcular o Desvio
  const a1 = parseFloat(document.getElementById('a1').value); //Captura do valor e conversão de string para Float number
  const a2 = parseFloat(document.getElementById('a2').value);
  const a3 = parseFloat(document.getElementById('a3').value);
  const a4 = parseFloat(document.getElementById('a4').value);
  const a5 = parseFloat(document.getElementById('a5').value);
  const media = parseFloat(document.getElementById('media').value); //Trazendo o valor do campo media

  const desvio1 = a1 - media; //Cálculo do Desvio
  const desvio2 = a2 - media;
  const desvio3 = a3 - media;
  const desvio4 = a4 - media;
  const desvio5 = a5 - media;

  document.getElementById('desvio1').value = desvio1.toFixed(2); //Mostrando o valor e limitando a duas casas decimais
  document.getElementById('desvio2').value = desvio2.toFixed(2);
  document.getElementById('desvio3').value = desvio3.toFixed(2);
  document.getElementById('desvio4').value = desvio4.toFixed(2);
  document.getElementById('desvio5').value = desvio5.toFixed(2);
};

const calcVariancia = () => {
  //Função para calcular a Variância
  const desvio1 = parseFloat(document.getElementById('desvio1').value); //Trazendo o valor do campo desvio
  const desvio2 = parseFloat(document.getElementById('desvio2').value);
  const desvio3 = parseFloat(document.getElementById('desvio3').value);
  const desvio4 = parseFloat(document.getElementById('desvio4').value);
  const desvio5 = parseFloat(document.getElementById('desvio5').value);

  const variancia =
    (desvio1 * desvio1 +
      desvio2 * desvio2 +
      desvio3 * desvio3 +
      desvio4 * desvio4 +
      desvio5 * desvio5) /
    5; //Cálculo da variância

  document.getElementById('variancia').value = variancia.toFixed(2); //Mostrando o valor e limitando a duas casas decimais
};

const calcDesvioPadrao = () => {
  //Função para calcular o Desvio Padrão
  const variancia = parseFloat(document.getElementById('variancia').value); //Trazendo o valor do campo variancia

  const desvioPadrao = Math.sqrt(variancia); //Cálculo do Desvio Padrão

  document.getElementById('desviopadrao').value = desvioPadrao.toFixed(2); //Mostrando o valor e limitando a duas casas decimais
};
