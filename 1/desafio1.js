/* Escreva uma função que recebe um número qualquer de números inteiros como argumentos
 e retorne a média aritmética entre eles */

function mediaArit(...numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  let media = sum / numbers.length;
  return media;
}

console.log(mediaArit(10, 9, 6, 8, 9, 1, 5, 7));

// Resolução do professor

function average(numbers) {
  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  });

  const average = sum / numbers.length;
  return average;
}

console.log(average([1, 2]));

// ou

function average2(...numbers) {
  const sum = numbers.reduce((accum, num) => {
    return accum + num;
  }, 0);

  return sum / numbers.length;
}

console.log(average2(1, 2));
