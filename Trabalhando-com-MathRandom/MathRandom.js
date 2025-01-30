// Match.random() -> Esse comando gera número pseudo-codigo. Permitindo utilizar valores com varias casas decimais.
// O Match.random() recebe um número inicial é u numero segundario ou seja um numero > que 0 e u número < que 1 (0, 1).

let max = parseInt(prompt('Digite um valor maior que 5: '))
let min = parseInt(prompt('Digite um valor menor que 5: '))

let resultado = parseInt(Math.random()) + (max - min) * max
alert(resultado)