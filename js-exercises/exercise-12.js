/**
 * 
12. En este desafío tienes un array que contiene otros 
arrays internos, tu reto es retornar un array que tenga 
los elementos de los otros arrays eliminando los arrays 
internos y dejando solo los valores, normalmente a esto le 
llamamos aplanar el array o "Flattening Algorithm".
Para solucionarlo vas a crear una función llamada 
flatArray que recibe un parámetro de entrada:
  •	array: Un array que tiene otros arrays dentro
Dentro del cuerpo de la función flatArray debes escribir tu solución.
Ejemplo:

Input:
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

Output:
[1, 2, 3, 4, 5, 6, 7, 8, 9]

 */

function flatArray(array) {
  const flattedArray = [];
  array.forEach(innerArray => {
    innerArray.forEach((value) => {
      flattedArray.push(value)
    });
  });
  return flattedArray;
}
const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
// for anidados

function flatArrayB(array) {
  return array.flat();
}

function flatArrayC(array) {
  const newArray = [];
  return newArray.concat(...array);
};

console.log(flatArrayC(array));