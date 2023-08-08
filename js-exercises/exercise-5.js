/**
 * 5. tu reto es retornar true si dentro de array de números al menos uno es un número par.
Ejemplo 1:
Input: [1, 3, 5, 7, 10, 11]
Output: true

Ejemplo 2:
Input: [1, 3, 5]
Output: false

Ejemplo 3:
Input: []
Output: false
 */
//some

const array = [1, 3, 5, 7, 10, 11]

function esPar(number) {
    if (number % 2 === 0) {
        return true
    }
}
const ans = array.some((value) => {
    if (value % 2 === 0) {
        return true
    }
})

// console.log('ans->', ans);



function hasEvenFn(arreglo) {
    let hasEven = false;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            hasEven = true
        }
    }
    return hasEven;
}

console.log('hasEven', hasEvenFn([]));