/*1. Tienes un array de números, tu reto es retornar los números de 
ese array multiplicados por dos.
Ejemplo 1:
Input: [2, 4, 5, 6, 8]
Output: [4, 8, 10, 12, 16]

Ejemplo 2:
Input: [1, 1, -2, -3]
Output: [1, 1, -4, -6]

*/
// Solución 1:
/*
for (let i = 0; i < array.length; i++) {
    console.log(i)
    ans.push(array[i] * 2)
}
console.log('answer-=>', ans)
*/
/**
 * Solucion 2
 * array.forEach(function(value){
    // ans.push(array[i] * 2)
    ans.push(value*2)
})
console.log('ans->', ans);
 */

const array = [2, 4, 5, 6, 8];
const ans = array.map(function(value){
    console.log(value);
    return value * 2
})

console.log('ans=>', ans);

