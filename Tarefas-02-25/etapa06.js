//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
//Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".
//Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.


let valor1 = parseInt(prompt("Digite o 1º valor: "));
let valor2 = parseInt(prompt("Digite o 2º valor: "));
let operador = prompt("Digite o operador que deseja [- + * /]? ")

let msgErro = console.log('Não existe esse tipo de operador. Tente novamente.');
let resultadoFinal = operador == '/' ? valor1 / valor2 : operador == '*' ? valor1 * valor2 : operador == '+' ? valor1 + valor2 : operador == '-'? valor1 - valor2 : msgErro; 

console.log(`A soma do ${valor1} ${operador} ${valor2} e = ${resultadoFinal}`);





