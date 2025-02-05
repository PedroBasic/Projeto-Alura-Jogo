// Jogo Secreto 

alert("Jogo do número secreto");

let novoNumSecreto = parseInt(prompt("Digite o limite de número Secreto? "));
let numeroSecreto = parseInt(Math.random() * novoNumSecreto) + 1;
let escolhaNumero;
let tentativas = 1;

// while (enquanto)
while (escolhaNumero != numeroSecreto){
    escolhaNumero = prompt(`Escolha um número de 1 a ${novoNumSecreto}`);
    
    // if (se) else (senão)
    if (escolhaNumero == numeroSecreto){
       break;
    }else{
        if (escolhaNumero > numeroSecreto){
            alert(`O número secreto e menor que ${escolhaNumero}`);
        }else{
            alert(`O número secreto e maior que ${escolhaNumero}`);
        }

        // Abaixo utilizamos o '++'  para contabilizar toda vez que for tentado um número.
        tentativas++
    }
}

let palavraSecreta = tentativas > 1 ? 'Tentativa.' : 'tentativas.';
alert(`Você acertou o número secreto era: ${numeroSecreto}. Com ${tentativas} ${palavraSecreta}`);
