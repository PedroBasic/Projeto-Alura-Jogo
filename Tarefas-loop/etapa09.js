// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let contador = parseInt(prompt('Digite um número'))
contador ++
console.log('Contagem regressiva!');

while(contador > 0){
    contador--
    console.log(`${contador}`);
}