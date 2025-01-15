// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

alert('Informe um número?')

let numeroDigitado = prompt("Digite um número: ")

if (numeroDigitado < 0){
    alert(`O número ${numeroDigitado} e negativo`);
}else{
    alert(`O número ${numeroDigitado} e positivo`);
}