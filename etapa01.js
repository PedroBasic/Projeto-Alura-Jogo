// Pergunte ao usuário qual é o dia da semana.
// Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".


alert('Qual o dia da semana?');
alert('(Segunda, Terça, Quarta, Quinta e Sexta).')

let respostaUser = prompt('O dia da semana é:');

// utilizamos o operador 'ou' que nas liguagem a sintaxe pode ser 'or' ou '||'
if (respostaUser == 'Sabado' || respostaUser == 'Domingo'){
    console.log("Bom fim de semana!");
}else{
    console.log("Boa semana!");
}

