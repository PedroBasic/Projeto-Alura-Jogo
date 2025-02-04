//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = parseInt(prompt('Informe sua nota? '));

let notaFinal = nota >= 7 ? `Aprovado! ${nota}` : `Reprovado! ${nota}`
console.log(notaFinal);

