// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, 
// utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = parseInt(prompt("Digite sua idade: "));

let resultado = idade >= 18 ? `Maior de idade você possui ${idade} anos.` : `Você e menor de idade ${idade} anos.`;
console.log(resultado);