/**

15. En este desafío tienes un array con palabras, 
tu reto es retornar un array ordenado de la palabra con 
menos caracteres a la palabra con más caracteres.
Para solucionarlo vas a crear una función llamada 
sortByLength que tiene un parámetro de entrada:
  •	words: Un array con palabras.
Dentro del cuerpo de la función sortByLength 
debes escribir tu solución.
Ejemplo:

Input:
[
  "Hola",
  "Viajar",
  "Sol",
  "Aprender"
]

Output:
[
  "Sol",
  "Hola",
  "Viajar",
  "Aprender"
]
 */

const sortByLength = (array) => {
  return array.sort((a, b) => {
    return a.length - b.length
  })
};
const array = [
  "Hola",
  "Viajar",
  "Sol",
  "Aprender"
];
console.log(sortByLength(array));