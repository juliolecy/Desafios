/* Escreva uma função que recebe um array e retorne um novo array com todas as posições invertidas
do original sem altera-lo. Não utilize métodos do objeto global Array ( reverse, map, forEach, etc) */

function reverse(...args) {
  let reversed = [];
  for (let i = -1; i >= -args.length; i--) {
    reversed.push(args.at(i));
  }

  return { args, reversed };
}

console.log(reverse("hi", 2, 3));

// Resolução do professor

function reversee(...arr) {
  const reversedArray = [];
  for (let i = 0; i < arr.length; i++) {
    reversedArray[i] = arr[arr.length - 1 - i];
  }
  return reversedArray;
}

console.log(reversee(1, 2, 3));
