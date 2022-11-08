/* Escreva uma função que recebe um  número inteiro qualquer, eleve ao quadrado cada um de seus algarismos
e depois concatene o resultado formando um único número inteiro */

function squareAndConcat(n) {
  let numberToString = String(n);
  let array = [];
  for (let i = 0; i < numberToString.length; i++) {
    array.push(numberToString[i] * numberToString[i]);
  }

  let x = "";
  for (let j = 0; j < array.length; j++) {
    x += array[j];
  }

  return Number(x);
}

console.log(squareAndConcat(12346));

// Resolução do professor

function square(num) {
  const str = num.toString();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += Math.pow(Number(str[i]), 2).toString();
  }

  return Number(result);
}

console.log(square(12346));

// ou

function square2(num) {
  const array = num.toString().split("");
  const squaredArray = array.map((n) => Number(n) ** 2).join("");

  return Number(squaredArray);
}

console.log(square2(12346));
