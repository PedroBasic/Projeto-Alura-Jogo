// Refatorando codigo.

//Codigo Antes.


/*let palavraPessoa = "";

if(quantidadePessoas == 1){
    palavraPessoa = "pessoa";
}else{
    palavraPessoa = "pessoas"
}*/

// Codigo Refatorado.

let quantidadePessoas = 4;
let palavraPessoa = quantidadePessoas == 1 ? 'Pessoa' : 'Pessoas';

