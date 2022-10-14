// usando var
var clima = `quente` // atribuindo valor a variavel clima, valor = quente
clima = `frio` // re-atribuindo valor a variavel clima, valor = frio
console.log(clima)

// usando let
let clima = `quente` // atribuindo valor a variavel clima, valor = quente, usando let
clima = `frio` // re-atribuindo valor a variavel clima, valor = frio, usando let
console.log(clima)

//usando const, constante.
const clima= `quente` // atribui valor do mesmo jeito que var e let
clima = `frio` // porrem variavel const, precisa ser constante, ou seja, nao aceita re-atribuicao de valores, entao vai dar erro se tentar.
console.log(clima)


// JavaScript e uma linguagem fracamente tipada e dinamica
// variaveis nao precisam ter um tipo proviamente definido
// podemos mudar o conteudo da variavel

// JavaScript, por ser uma linguagem fracamente tipada, ela é dinâmica, ou seja eu posso mudar o valor de uma variavel, não de todas, mas de algumas, ex; de String para Boolean:
let clima = true // era boolean 
let clima = "frio" // virou string String, com uma linha de código.
console.log(typeof clima)

// lembrando que variavel const/constante não pode sofrer mudança, como let e var.
