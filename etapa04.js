// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

alert('Qual seu saldo bancario?')

// Abaixo utilizamos o template string (``) permite adicionar o valor direto na frase sem precisar concatenar.
let saldo = prompt('Informe seu saldo: ')
alert(`O saldo do User é R$${saldo}`)