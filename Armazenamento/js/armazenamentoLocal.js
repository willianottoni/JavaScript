// Verificar se o navegador aceita o LocalStorage
if(window.localStorage){
    console.log("Este navegador aceita LocalStorage")
} else console.log("LocalStorage não permitido")

// Como armazenar uma string no localStorage
let c = 'Fatec Bragança Paulista'
localStorage.setItem('Cliente', c);

// Recuperar string do localStorage
let d = localStorage.getItem('Cliente')
console.log(d)


// Armazenar um vetor no localStorage
let v = ["a","b"]
// usar JSON para garantir o formato do dado armazenado
let j = JSON.stringify(v)
localStorage.setItem('Vetor', j)

// Recuperar vetor do localStorage
let v2 = JSON.parse(localStorage.getItem('Vetor'))
console.log(v2)


// Armazenar objeto no localStorage
let o = {
    nome: "Fatec",
    endereco: "R. das Industrias, 130",
    cnpj: "11.111.111/0001-11"
}
localStorage.setItem("Objeto", JSON.stringify(o))

// Recuperar objeto do localStorage
let o2 = JSON.parse(localStorage.getItem("Objeto"))
console.log(o2)

let produtos = [
    {
        nome: "Iphone 10",
        preco: 3.000,
        quantidade: 1
    },
    {
        nome: "Iphone 11",
        preco: 3.900,
        quantidade: 1
    },
    {
        nome: "Iphone 12",
        preco: 5.000,
        quantidade: 1
    },
    {
        nome: "Iphone 13",
        preco: 8.000,
        quantidade: 1
    }
]

localStorage.setItem("Produtos", JSON.stringify(produtos))




