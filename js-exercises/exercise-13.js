/**
 * 13. En este desafío tienes array de strings 
 * y cada línea es un fragmento, el Zen de Python, 
 * tu reto es hacer un método que retorne el número 
 * de palabras totales que tiene el array.
Para solucionarlo vas a crear una función llamada 
countWords que tiene un parámetro de entrada:
  •	array: Un array de frases
Dentro del cuerpo de la función countWords debes escribir tu solución.
Ejemplo:
Input: [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]

Output: 20
 */

function countWords(array) {
  let totalWords = 0;
  array.forEach(element => {
    const wordsInLine = element.split(' ').length;
    // totalWords = totalWords + wordsInLine;
    totalWords += wordsInLine;
  });
  return totalWords;
};

const array = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]


function countWordsB(array) {
  const wordsCount = array.reduce((accumulator, currentValue) => {
    const wordsInline = currentValue.split(' ').length;
    return accumulator + wordsInline
  }, 0);
  return wordsCount;
}


function countWordsC(array) {
  return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.split(' ').length;
  }, 0);

}

console.log(countWordsC(array));