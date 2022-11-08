/* Escreva uma função que recebe um número e retorna uma quantidade equivalente
de 'chunks' separados por um traço '-' sem utilizar estruturas de repetição */

function chunks(num) {
  let text = "chunk-";
  let completeText = text.repeat(num);

  return completeText.slice(0, completeText.length - 1);
}

console.log(chunks(0));
console.log(chunks(1));
console.log(chunks(3));
console.log(chunks(4));
console.log(chunks(5));

// Resolução do professor

function chunkss(num) {
  if (num === 0) {
    return "";
  }

  if (num === 1) {
    return "chunk";
  } else {
    return "chunk-" + chunkss(num - 1);
  }
}

console.log(chunkss(0));
console.log(chunkss(1));
console.log(chunkss(3));
console.log(chunkss(4));
console.log(chunkss(5));
