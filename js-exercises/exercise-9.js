/**
 * 9. Dado un array de strings tu reto es retornar un string 
 * en donde cada elemento del array esté separado por comas, 
 * para solucionarlo vas a crear una función llamada joinString 
 * que recibe un parámetro de entrada:
	•	words: Un array de strings.
Dentro del cuerpo de la función joinString debes escribir tu solución.
Ejemplo 1:
Input: ["amor", "sol", "piedra", "día"]
Output: "amor,sol,piedra,día"
solution();

Ejemplo 2:
Input: ["diamonds", "hearts", "spades"]
Output: "diamonds,hearts,spades"
 */

const joinString = (array) => {
	return array.join(',')
}

const array = [3, 4, 5, 6, 6]

console.log(joinString([]));