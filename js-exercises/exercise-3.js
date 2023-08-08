/*Tu reto es retornar un array solo con las palabras que cumplan con la condición 
de tener un término de búsqueda dado.
Para solucionarlo debes crear una función llamada filterByTerm que recibe 
los siguientes parámetros de entrada:
    •	array: Un array de strings con palabras
    •	term: Un string con el término a buscar
Dentro del cuerpo de la función filterByTerm debes escribir tu solución.
Ejemplo 1:
Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "ana"

Ouput:
["ana", "anastasia"]
Ejemplo 2:
Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "xyz"

Output:
[]
*/

function filterByTerm(array, term) {
    const ans = array.filter(function (value) {
        if (value.includes(term)) {
            return `${value}`
        }
    }
    )
    return ans;
}

function filterByTermForEach(array, term) {
    const ans = [];
    array.forEach(function (value) {
        if (value.includes(term)) {
            ans.push(value)
        }
    })
    return ans;
}


const termsArray = ["ana", "santi", "nico", "anastasia"];
console.log('-', filterByTermForEach(termsArray, 'xyz'));