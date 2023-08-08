/*8. Dado un array de strings tu reto es retornar la 
posición dentro del array en donde existe la palabra 
clave "myKey" y si no existe deberás retornar false, .
para solucionarlo vas a crear una función llamada findMyKey 
que recibe un parámetro de entrada:
    •	array: Un array de strings.
Dentro del cuerpo de la función findMyKey debes escribir tu solución.
Ejemplo 1:
Input: ["diamonds", "myKey", "spades", "AS"]
Output: 1

Ejemplo 2:
Input: ["diamonds", "hearts", "spades"]
Output: false

Ejemplo 3:
Input: ["myKey", "hearts", "spades"]
Output: 0
*/

function findMyKey(array) {
    for (let i = 0; i < array.length; i++) {
        console.log('indice -> ', i);
        console.log('valor ->', array[i]);
        if (array[i] === 'myKey') {
            return i
        }
    };
    return false;
};

console.log(findMyKey([]));