
//* Cadeia de caracteres
- "" // aspas duplas
- '' // aspas simples
- `` // template litarals ou template strings

//* Pode fazer uso dessas formas juntas na hora do código; ex: console.log("Gustavo'Batista'") ou console.log('Gu"st"av"o')
//* Já com as crases, funcionam normamelnte do jeito mostrado a cima, mas também funcionam quebrando linha, é um diferencial; 
console.log(`
Gust
avo'Batista'
`)

//* As crases também permitem o uso de expressões de linguagem ex:
console.log(`
    gustavo ${ 1 + 1}
`)

//* Como pode ver, da para usar esse ${} para fazer uma conta dentro de uma string. Também conhecida como Interpolação.