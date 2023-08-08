/**
Tienes un array de strings que contienen diferentes palabras, 
tu reto es retornar un array solo con las que cumplan con la condición de tener 
4 o más letras.

Ejemplo 1:
Input: ['amor', 'sol', 'piedra', 'día']
Output: [ 'amor', 'piedra' ]

Ejemplo 2:
Input: ['rosa', 'gol', 'pez', 'día', 'gafas']
Output: [ 'rosa', 'gafas' ]
 */

/**
 * solucion 1
 * for (let i = 0; i < array.length; i++) {
    console.log(`Posicion ${i} - valor ${array[i]}`);
    if (array[i].length >= 4) {
        ans.push(array[i])
    }
}

console.log('ans->', ans)
 */

/**
 * array.forEach(function (element) {
    console.log('element', element);
    if (element.length >= 4) {
        ans.push(element)
    }
});

console.log('ans ->', ans);
 */

const array = ['rosa', 'gol', 'pez', 'día', 'gafas', 'amor', 'sol', 'piedra'];

const ans = array.filter(function (element) {
    console.log(element);
    if(element.length>=4){
        return element
    }

})
console.log('ans->', ans);