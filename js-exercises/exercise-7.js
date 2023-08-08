/*7. Buscar si ese string tiene un término de búsqueda dado, 
por ejemplo verificar si dentro de la frase "Ana lava la tina" 
está el término "ana" y si lo tiene retornar un true de lo contrario
retornar un false, debes tener en cuenta que debe encontrar coincidencias,
 así el término de búsqueda sea mayúscula o minúscula.

 Para solucionarlo crea una función llamada checkInString que 
 .recibe dos parámetros de entrada:
	•	text: Un string
	•	term: Un string con el término a buscar
Dentro del cuerpo de la función checkInString debes escribir tu solución.
Ejemplo 1:
Input: "Ana lava la tina", "ana"
Output: true

Ejemplo 2:
Input: "Santiago", "tiago"
Output: true

Ejemplo 3:
Input: "Nicolas", "ana"
Output: false
*/

const checkInString = (text, term) => {
	const lowerText = text.toLowerCase();
	const lowerTerm = term.toLowerCase();
	return lowerText.includes(lowerTerm);
};

// console.log(checkInString("Nicolas", "ana"));

function checkInStringForEach(text, term) {
	const lowerText = text.toLowerCase();
	const lowerTerm = term.toLowerCase();
	const lowerTextArray = lowerText.split(' ');
	let found = false;
	lowerTextArray.forEach(function (word) {
		if (word.includes(lowerTerm)) {
			found = true;
		}
	})
	return found;
}

// console.log(checkInStringForEach(phrase, 'ANA'));

function checkInStringForEachRefactor(text, term) {
	const lowerText = text.toLowerCase();
	const lowerTerm = term.toLowerCase();
	let found = false;
	lowerText.split(' ').forEach((word) => {
		if (word.includes(lowerTerm)) {
			found = true;
		};
	});
	return found;
}
const phrase = '';

console.log(checkInStringForEachRefactor(phrase, 'pepe'));