/**
 * 11. En este desafío recibirás dos arrays de números como 
 * parámetros de entrada y debes retornar un array que tenga 
 * los dos arrays unidos, 
 * para solucionarlo vas a crear una función 
 * llamada mergeArrays que recibe dos parámetros de entrada:
	•	arrayA: Un array
	•	arrayB: Un array
Dentro del cuerpo de la función mergeArrays debes escribir tu solución.
Ejemplo 1:
Input: [1, 2, 3], [4, 5, 6]
Output: [1, 2, 3, 4, 5 , 6]

Ejemplo 2:
Input: ["A", "B", "C"], ["D", "E", "H"]
Output: ["A", "B", "C", "D", "E", "H"]
 */

function mergeArraysA(arrayA, arrayB) {
	return arrayA.concat(arrayB);
};

function mergeArraysB(arrayA, arrayB) {
	return [...arrayA, ...arrayB];
}


function mergeArraysForEach(arrayA, arrayB) {
	const mergedArray = [];
	arrayA.forEach(function (element) {
		mergedArray.push(element)
	});
	arrayB.forEach(function (element) {
		mergedArray.push(element)
	});
	return mergedArray;
}



console.log(mergeArraysForEach(["A", "B", "C"], ["D", "E", "H"]));