//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?.
//Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

console.log("Bem-Vindo!");

let nome = prompt("Digite um nome: ");
let resposta = nome == nome ? 'Qual a linguagem de programação que você mais gosta?': 'Erro';
let pergunta = prompt("Qual a linguagem de programação que você mais gosta? ");

console.log(`Olá ${nome} ${resposta}`);
console.log(`Liguagem de programação favorita é. ${pergunta}`);
