alert("Jogo do número secreto acerte o número para vencer");

let numeroSecreto = 5;
let escolhaNumero = prompt('Escolha um número de 1 a 10');

if (escolhaNumero == numeroSecreto){
    console.log('Você acertou o número secreto era:', numeroSecreto);
    alert('Acessa o Console para verificar se você acertou.')
}else{
    console.log('Você errou esse não era o número secreto:', numeroSecreto)
    alert('Acessa o Console para verificar se você acertou.')

}
    
