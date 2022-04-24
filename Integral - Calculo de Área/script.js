// FUNÇÃO PARA CALCULAR A ÁREA
const calcArea = () => {
  let x1 = Number(document.getElementById('x1').value)
  let x2 = Number(document.getElementById('x2').value)
  let x3 = Number(document.getElementById('x3').value)
  let x4 = Number(document.getElementById('x4').value)
  let x5 = Number(document.getElementById('x5').value)
  let x6 = Number(document.getElementById('x6').value)
  let x7 = Number(document.getElementById('x7').value)
  let x8 = Number(document.getElementById('x8').value)
  let x9 = Number(document.getElementById('x9').value)
  let x10 = Number(document.getElementById('x10').value)
  let y1 = Number(document.getElementById('y1').value)
  let y2 = Number(document.getElementById('y2').value)
  let y3 = Number(document.getElementById('y3').value)
  let y4 = Number(document.getElementById('y4').value)
  let y5 = Number(document.getElementById('y5').value)
  let y6 = Number(document.getElementById('y6').value)
  let y7 = Number(document.getElementById('y7').value)
  let y8 = Number(document.getElementById('y8').value)
  let y9 = Number(document.getElementById('y9').value)
  let y10 = Number(document.getElementById('y10').value)

  const area1 = ((y1 + y2) / 2) * (x2 - x1)
  const area2 = ((y2 + y3) / 2) * (x3 - x2)
  const area3 = ((y3 + y4) / 2) * (x4 - x3)
  const area4 = ((y4 + y5) / 2) * (x5 - x4)
  const area5 = ((y5 + y6) / 2) * (x6 - x5)
  const area6 = ((y6 + y7) / 2) * (x7 - x6)
  const area7 = ((y7 + y8) / 2) * (x8 - x7)
  const area8 = ((y8 + y9) / 2) * (x9 - x8)
  const area9 = ((y9 + y10) / 2) * (x10 - x9)

  document.getElementById('a1').value = area1
  document.getElementById('a2').value = area2
  document.getElementById('a3').value = area3
  document.getElementById('a4').value = area4
  document.getElementById('a5').value = area5
  document.getElementById('a6').value = area6
  document.getElementById('a7').value = area7
  document.getElementById('a8').value = area8
  document.getElementById('a9').value = area9
}

// FUNÇÃO PARA CALCULAR A ÁREA TOTAL
const calcAreaTotal = () => {
  const area1 = Number(document.getElementById('a1').value)
  const area2 = Number(document.getElementById('a2').value)
  const area3 = Number(document.getElementById('a3').value)
  const area4 = Number(document.getElementById('a4').value)
  const area5 = Number(document.getElementById('a5').value)
  const area6 = Number(document.getElementById('a6').value)
  const area7 = Number(document.getElementById('a7').value)
  const area8 = Number(document.getElementById('a8').value)
  const area9 = Number(document.getElementById('a9').value)

  const areaTotal =
    area1 + area2 + area3 + area4 + area5 + area6 + area7 + area8 + area9

  document.getElementById('areaTotal').value = areaTotal
}

// FUNÇÃO PARA LIMPAR OS DADOS
const limparDados = () => {
  document.getElementById('x1').value = ''
  document.getElementById('x2').value = ''
  document.getElementById('x3').value = ''
  document.getElementById('x4').value = ''
  document.getElementById('x5').value = ''
  document.getElementById('x6').value = ''
  document.getElementById('x7').value = ''
  document.getElementById('x8').value = ''
  document.getElementById('x9').value = ''
  document.getElementById('x10').value = ''
  document.getElementById('y1').value = ''
  document.getElementById('y2').value = ''
  document.getElementById('y3').value = ''
  document.getElementById('y4').value = ''
  document.getElementById('y5').value = ''
  document.getElementById('y6').value = ''
  document.getElementById('y7').value = ''
  document.getElementById('y8').value = ''
  document.getElementById('y9').value = ''
  document.getElementById('y10').value = ''
  document.getElementById('a1').value = ''
  document.getElementById('a2').value = ''
  document.getElementById('a3').value = ''
  document.getElementById('a4').value = ''
  document.getElementById('a5').value = ''
  document.getElementById('a6').value = ''
  document.getElementById('a7').value = ''
  document.getElementById('a8').value = ''
  document.getElementById('a9').value = ''
  document.getElementById('areaTotal').value = ''
}
