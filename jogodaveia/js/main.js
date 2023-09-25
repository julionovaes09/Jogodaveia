// declaração de variáveis
// var numero = 1;
// var decimal = 1.5;
// var texto '';

let nome = '';
const pi = 3.14;

 //imprimir na tela
 // console.log(nome);
// console.log("Hoje não")

// && = E
// || = OU
// Declarar uma variável para representar os elementos dp jogo
let jogo = 'x';

function joga(casa) {
    let celulaClicada =document.getElementById(casa).innerHTML;
    if(celulaClicada == 'x' || celulaClicada == '0') {
        alert('Esta célula já tem um valor!');
    }else {
        document.getElementById(casa).innerHTML = letra;
        if(letra == 'x') {
            letra = '0';
         } else {
            letra = 'x';
          }
        }
        
    }

