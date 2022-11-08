/* Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem albafética 
em minúsculo.
Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas
letras e espaços */

function superiorLetter(phrase) {
  const letters = phrase.split("").sort();
  if (letters[0] === " ") {
    const ArrayWhitoutVoid = letters.splice(letters.indexOf(" "), 1);
    return letters[0].toLowerCase();
  }

  return letters[0].toLowerCase();
}

console.log(superiorLetter("jajau bolinha"));
