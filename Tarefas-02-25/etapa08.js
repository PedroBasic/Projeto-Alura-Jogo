// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

 let numero = parseInt(prompt("Digite um número: "));

 let resultado = numero > 0 ? `Número positivo ${numero}` : numero  <= 0 ? `Número negativo ${numero}` : 'Valor invalido';
 console.log(resultado);

