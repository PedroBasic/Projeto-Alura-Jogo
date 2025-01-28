
let qtdNumeros = parseInt(prompt('Digite a quantidade de números para o cálculo da média:'));
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){   
    
    let numero = parseInt(prompt('Digite o numero:'));
    // contador -- | Utilizando o metodo abaixo cada loop que e realizo o valir qtdNumeros(4) e diminuido até chega ao (0).
    contador --
    soma += numero

   
}

let media = soma / qtdNumeros;

console.log(media);
console.log(digitosNumeros);