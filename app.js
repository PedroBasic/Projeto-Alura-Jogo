// Trabalhando com IF e Else IF

let porcentagem = 0
let quantidadeMilhas = prompt("Informe a quantidade de milhas? ")

if (quantidadeMilhas >= 30000){
    porcentagem =  porcentagem + 20;
    console.log(porcentagem);
}else{
    if(quantidadeMilhas > 5000){
        porcentagem = porcentagem + 10;
        console.log(porcentagem);
    }
}
 

// Jogo Secreto 

alert("Jogo do número secreto");

let numeroSecreto = 5;
let escolhaNumero = prompt('Escolha um número de 1 a 10');

if (escolhaNumero == numeroSecreto){
    alert(`Você acertou o número secreto era: ${numeroSecreto}.`);
}else{
    alert(`Você errou o número ${escolhaNumero} não era secreto o número secreto é ${numeroSecreto}.`)
}


// Maior de idade Detran.
    
alert('Prova DETRAN!!')
alert('Para se inscrever a prova do DETRAN e preciso ser maior de idade.')

let idade = prompt("Digite sua idade: ")

if (idade >= 18){
    console.log("Parabés você e maior de idade. Pode fazer a prova do DETRAN. " + idade);
} else {
    console.log("Infelismente você e menor de idade. Não pode fazer a prova do DETRAN. " + idade);
}