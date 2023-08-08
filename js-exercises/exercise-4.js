/**
  4. Tienes un array de números y tu reto es retornar la suma de todos los valores en él.
Dentro del cuerpo de la función calcSum debes escribir tu solución.
Ejemplo 1:
Input: [1, 1, 1]
Ouput: 3

Ejemplo 2:
Input: [2, 4, 8]
Output: 14

Ejemplo 3:
Input: []
Output: 0
 */

const arrayToSum = [2, 4, 8];

function calcSum(array) {
  let sum = 0;
  array.forEach(function (value) {
    sum = sum + value
  });
  return sum;
};

// console.log(calcSum([]));

// reduce
// const arrayToSum = [2, 4, 8];
const ans = arrayToSum.reduce((previousValue, currentValue) => {
  console.log('previousValue', previousValue);
  console.log('currentValue', currentValue);
  return previousValue + currentValue
}, 0)

console.log('ans->', ans);