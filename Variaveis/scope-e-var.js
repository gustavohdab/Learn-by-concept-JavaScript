// vamos iniciar um block, ou bloco.
{                                    
    let x = 0// aqui dentro é um bloco, e posso colocar qualquer código {};
    console.log(x);
}   // aqui fechamos o código.

// var é global e, também local.

console.log('> existe x antes do bloco?', x) // var global é tudo que está dentro do programa.

{ // var local é tudo que está dentro desse scope{}, e o código que esta aqui dentro, só funciona aqui. 
    var x = 0 // variavel.
} // e termina com o fechamendo da chaves {}. fora desse conjunto de chaves funcionaram outros códigos, que trarão o resultado final da aplicação.
    
console.log('> existe x antes do bloco?', x)

// ver depois; conceito hoisting JS.

// se eu executo esse código abaixo:
console.log('> existe x antes do bloco?', x)
//da erro porque não declarei a var.

// se eu declado a var assim; o conceito hoisting do javascript eleva o var, lá pra cima antes do console.log.
console.log('> existe x antes do bloco?', x)
{  
    var x = 0 
}

// mas ainda da erro undefined, porque a var está declarada depois do console.log, aqui usamos console.log como exemplo.

// nesse exemplo o primeiro console.log vai dar undefined, porque a var está declarada depois.
console.log('> existe x antes do bloco?', x) // x existe no codigo, max está undefined.

{  
    var x = 0 // var x decladara 
}

console.log('> existe x antes do bloco?', x) // x = 0, funcionou.

