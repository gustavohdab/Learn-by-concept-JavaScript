# Separando strings

Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.

```js
    let phrase = 'Eu quero viver o amor!'
    let myArray = phrase.split('o') 
    console.log(myArray)
    let phraseWithUnderscore = myArray.join('_')
    console.log(phraseWithUnderscore.toLowerCase())
```
