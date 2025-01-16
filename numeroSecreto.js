// Jogo Secreto 

alert("Jogo do número secreto");

let numeroSecreto = 5;
let escolhaNumero;
let tentativas = 1;

// while (enquanto)
while (escolhaNumero != numeroSecreto){
    escolhaNumero = prompt('Escolha um número de 1 a 10');
    
    // if (se) else (senão)
    if (escolhaNumero == numeroSecreto){
        alert(`Você acertou o número secreto era: ${numeroSecreto}.`);
        alert(`O Jogador chutou ${tentativas} vezes até acertar`);
    }else{
        if (escolhaNumero > numeroSecreto){
            alert(`O número secreto e menor que ${escolhaNumero}`);
        }else{
            alert(`O número secreto e maior que ${escolhaNumero}`);
        }
        tentativas++
    }
}