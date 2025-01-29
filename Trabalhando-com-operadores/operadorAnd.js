// O operador AND, representado pelos símbolos "&&", é utilizado para combinar duas condições e avaliar se ambas são verdadeiras. 
//Se ambas as condições forem verdadeiras, o resultado será… verdadeiro. Caso contrário, logicamente será falso. Por exemplo:

let idade = parseInt(prompt('Digite sua idade: '));
let pergunta =  prompt('Você possui carteira de motorista? Sim ou Não? ');


if (idade >= 18 && pergunta == 'Sim'){
    alert('Parabéns você já possui carteira de motorista e e maior de idade');
} else {
    if (idade >= 18 && pergunta == 'Nao'){
        alert('Você já pode tirar carteira de motorista esta esperando o que?')
    }else{
        alert('Ops você ainda e de menor. Não pode tirar carterira ;O')
    }
}
