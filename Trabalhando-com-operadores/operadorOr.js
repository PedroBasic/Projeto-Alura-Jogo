//O operador OR, representado pelos símbolos "||", é usado para verificar se pelo menos uma das condições é verdadeira. 
//Se uma das condições for verdadeira, o resultado será verdadeiro. Se ambas forem falsas, o resultado será falso. Veja um exemplo:

let pedroTemFilho = true
let pedroESolteiro = false

if (pedroESolteiro || pedroTemFilho){
    alert(`Pedro tem Filho? ${pedroTemFilho}`)
} else {
    alert(`Pedro Não e solteiro? ${pedroESolteiro}`)
}