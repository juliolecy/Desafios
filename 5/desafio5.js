/* Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem albafética 
em minúsculo.
Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas
letras e espaços */

function superiorLetter(phrase) {
  const x = phrase.split("").sort();
  const k = x.splice(x.indexOf(" "), 1);
  console.log(x);

  return x[0].toLowerCase();
}

console.log(superiorLetter("ABC"));
