// Crie um sistema de pontuação para um jogo. 
// Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

alert('Bem vindo ao sistema de pontuação!!')

let suaPontuacao = prompt('Informa sua pontuação? ')

// Aqui utilizamos a estrutura '>=' maior ou igual a.
if(suaPontuacao >= 100){
    alert("Parabéns, você venceu!")
}else{
    alert("Tente novamente para ganhar.")
}
