// Array

// Para criarmos um vetor utilizamos [ ] envolvendo os valores, por exemplo: const animals = [ "Lion", "Monkey" ], para acessar esses valores usamos a posição do valor no vetor, começando por 0, por exemplo: console.log(animals[0]). Para descobrirmos o número de posições de um vetor qualquer, podemos utilizar a propriedade length, por exemplo: animals.length.

const animals = [
    'lion', // possição 0
    'monkey', // possição 1
    'cat', // possição 2
    {  // possição 3 *Posso colocar um objeto dentro de uma array, accessando pelo console.log(animals[3]), mostrará todos os valores do objeto.
        name: 'cat',
        age: 3
    }

];

// acessa valores no array
// console.log(animals[0]); // accessando posição 0 do array
console.log(animals[3].age); // acessando .age do objeto dentro da array. 
