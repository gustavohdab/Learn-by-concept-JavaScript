# Scope

* Escopo determina a visibilidade de alguma variável no JS. Cuidado, pois pode estar visível para nós, mas nem sempre está visível para o JS. 
* Para isso precisamos entender o Block statement

# Block statement

```javascript
// vamos iniciar um block, ou bloco.
{                                    
    // aqui dentro é um bloco, e posso colocar qualquer código {};
} // aqui fechamos o código.
``` 
O bloco, também criará um novo escopo. Chamamos de `block-scoped` 

## var
```javascript
// var é global e poderá funcionar fora de um escopo ou bloco
console.log('> existe x antes do bloco?', x)
{
    var x = 0
}

console.log('> existe x antes do bloco?', x)
```