document.getElementById("form").addEventListener("submit", gravarDadosLS);

window.onload = function () {
  let dadosRecuperados = recuperarLocalStorage("Usuário");
  criarTabela(dadosRecuperados);
};

function criarTabela(dados) {
  let obj = Object.assign(dados);
  let corpoTable = document.getElementById("corpoTable");
  let linha = document.createElement("tr");
  let colunaNome = document.createElement("td");
  let colunaEmail = document.createElement("td");

  colunaNome.innerHTML = obj.nome;
  colunaEmail.innerHTML = obj.email;
  linha.appendChild(colunaNome);
  linha.appendChild(colunaEmail);
  corpoTable.appendChild(linha);
}

let listaGeral = [];

function gravarDadosLS() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const senhaConfirmada = document.getElementById("confirmaSenha").value;

  let dadosUsuario = {
    nome: nome,
    email: email,
    senha: senha,
    senhaConfirmada: senhaConfirmada,
  };

  let dadosRecuperadosLS = recuperarLocalStorage("Usuário");
  listaGeral.push(dadosRecuperadosLS);

  if (senhaConfirmada == senha) {
    listaGeral.push(dadosUsuario);
    gravarLocalStorage("Usuário", dadosUsuario);
  } else {
    alert("A senha deve ser igual no campo (Confirmar senha)");
  }
}

function gravarLocalStorage(nome, valor) {
  if (window.localStorage) {
    localStorage.setItem(nome, JSON.stringify(valor));
  } else console.log("LocalStorage não permitido");
}

function recuperarLocalStorage(nome) {
  if (window.localStorage) {
    return JSON.parse(localStorage.getItem(nome));
  } else console.log("LocalStorage não permitido");
}
