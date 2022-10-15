// 1. Declare uma variavel de nome weight.
var weight 
let weight 
// const weight;

// 2. Que tipo de dado é a variavel acima?
console.log(typeof weight)

/*
    3. Declare uma variavel e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/
let name = 'gustavo'
let age = 21
let stars = 5.5
let isSubscribed = false

/*
    4. A variavel studend abaixo é de que tipo de dados?
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.
        substitur name, age, weight pelos valores de cada propriedades do objeto.
*/ 
let student = {
    name: 'gustavo',
    age: 21,
    weight: 80.5,
    isSubscribed: false
}
console.log(`O ${student.name} tem ${student.age} anos de idade e pesa ${student.weight} kg.`)

/*
    5. Declare uma variavel do tipo array, de nome Students e atribua a ela nenhum valor, ou seja, um array vazio.
*/
const students = []

/*
    6. Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array.)
*/
studants = [
    student
]

/*
    7. Coloque no console o valor da posição zero do Array acima.
*/
console.log(studants[0])

/*
    8. Crie um novo student e coloque na posição do 1 Array students
*/
const john = {
    name: 'John',
    age: 34,
    weight: 100,
    isSubscribed: false
}
students = [ // primeira maneira.
    student,
    john
]
students[1] = john // segunda forma de fazer.
console.log(students)

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e porque? Após sua resposta rode o código e veja se você acertou.
    console.log(a)
    var a = 1
*/
undefined
