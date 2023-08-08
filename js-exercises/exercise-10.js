/**
 * 10. En este desafío vas a recibir el título de un artículo 
 * y tú debes transformarlo en un formato de URL 
 * en donde normalmente se transforma todo en minúscula y 
 * se cambian los espacios por un guion (-).
Para solucionarlo vas a crear una función llamada 
parseToURL que recibe un parámetro de entrada:
	•	title: Un String con el título.
Dentro del cuerpo de la función parseToURL debes escribir tu solución.
Ejemplo 1:
Input: "La forma de correr Python"
Output: "la-forma-de-correr-python"

Ejemplo 2:
Input: "La API para nunca parar de aprender"
Output: "la-api-para-nunca-parar-de-aprender"

Ejemplo 3:
Input: "Curso de arrays"
Output: "curso-de-arrays"
 */

function parseToURL(text) {
	console.log(' original text->', text);
	const lowerText = text.toLowerCase();
	console.log(' lowerText->', lowerText);
	const lowerTextArray = lowerText.split(' ');
	console.log(' lowerTextArray->', lowerTextArray);
	const lowerTextJoin = lowerTextArray.join('-')
	console.log(' lowerTextJoin->', lowerTextJoin);

	return lowerTextJoin;
};

console.log('Final result ->', parseToURL("La API para nunca parar de aprender"));