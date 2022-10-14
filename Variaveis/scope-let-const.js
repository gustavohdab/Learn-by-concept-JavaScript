// const e let são locais, e só funcionam no scope que foram criados.

// fazendo essa primeira requisição, acontece o mesmo erro da var, y is not undefined.
console.log('> existe y antes do bloco?', y) 

// {
// let y = 0
// }

// console.log('> existe y antes do bloco?', y)

/////////////////////////////

// já nesse exemplo, diferente do var, ainda consta o mesmo erro undefined, 
console.log('> existe y antes do bloco?', y) 

{
let y = 0
}

// console.log('> existe y antes do bloco?', y)

//////////////////////////////

// porque só funciona depois que declarar a variavel antes da requisição.
{
    let y = 0 // dessa maneira, funciona certo, variavel delcarada antes de fazer e a requisição E sendo local.
    console.log('> existe y', y) 
}

//////////////////////////////

{
    let y =  
    console.log('> existe y', y) ;
}
console.log('> existe y depois do bloco?', y)
// Bom, aqui que entra a ponta da questão. Existe o y depois do bloco? Teoricamente e visivelmente para nos humanos, sim. Estou vendo o bloco declarando variavel, fechando o bloco, então sim. Bom mas para o JavaScript, regra é regra, para variavel let caso, y só existe dentro do bloco. Então nenhuma requisição fora do bloco em que ele foi criado, funcionará, a não ser que ele seja chamado. Explicarei a abaixo.

//////////////////////////////

// Aí você fala, ok, entendi tudo ja estou fera em scope. Tem mais uma coisa que precisa tomar bastante cuidado e conhecer.
let y = 1 // var global y = 1.

{
    {
        {
            {
                y = 0 // var local dentro do scope do let transformando y = 0
                console.log('> existe y?', y)
            }
        }
    }
}

console.log('Qual o valor de y?', y) // console.log para descobrir qual o valor de y.

// e a resposta é 0. Pois mesmo que y tranformando em 0 está dentro de um scope, mas ele entrou ali fazendo uma requisição de uma var fora dele, nesse caso uma var global. Nesse caso então, o JavaScript faz a leitura de cima para baixo, percebe que y = 1 pelas var globais. entra nos scope que está dentro de outros scope, percebe que tem um y = 0 numa var local, então ele volta para procurar o y (nesse caso usamos y, mas poderia ser qualquer dado.) mais próximo dele e substitur o valor para 0. E vai para o final. Se eu não quero que o JavaScript substitua o meu y para 0 dentro do scope, devo passar uma palavra-chave reservada para JS saber que aquele Y é diferente do outro. 

//////////////////////////////

// Agora const não funciona como let. Const foi feita para ser uma variável constante, mas pode criar uma nova const dentro de um scope, com o mesmo nome e ta tudo bem, porque são scopes diferentes e o const não faz essa requisição de nomes para fora do scope dele. Fácil né?

const y = 1 

{
    {
        {
            {
                const y = 0 
                console.log('> existe y?', y)
            }
        }
    }
}

console.log('Qual o valor de y depois do bloco?', y) 
// a resposta vai ser: 
// Existe y?, 0. 
// Qual o valor de y depois do bloco?, 1
