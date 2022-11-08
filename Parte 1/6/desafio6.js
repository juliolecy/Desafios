/* Escreva uma função que recebe uma string e retorna cada palavra da string invertida 
e em letras minúsculas, porém com as palavras na mesma ordem.
Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, 
apenas letras e espaços */

// function doideira(phrase) {
//   const whitoutSpaceBar = phrase.split(" ").reverse();
//   console.log(whitoutSpaceBar[0].reverse());
// }

// doideira("Hello Jack");

// function fatdesajeitado(n) {
//   if (n % 2 === 0) {
//     return "par";
//   }

//   if (n % 2 !== 0) {
//     return "impar";
//   }
// }

// console.log(fatdesajeitado(3));

function percorreArray(valor) {
  let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];

  elementos.map((item, index) => {
    if (item === valor) {
      console.log(`Achei ${valor} na posição ${index}`);
    }
  });
  return "haha trouxa";
}
console.log(percorreArray(1));
