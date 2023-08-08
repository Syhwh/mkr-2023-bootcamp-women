/** */
/*
6. Tu reto es retornar true si dentro de array de números todos son pares
Ejemplo 1:
Input: [2, 4, 6, 8, 10]
Output: true

Ejemplo 2:
Input: [1, 3, 5, 7, 10, 11]
Output: false

Ejemplo 3:
Input: [1, 3, 5]
Output: false

Ejemplo 4:
Input: []
Output: false
*/

function allAllNumbersEven(numbers) {
    if (numbers.length < 1) return false;
    let allEven = true;
    numbers.forEach(element => {
        if (element % 2 !== 0) {
            allEven = false;
        };
    });
    return allEven;
};

function allEven(numbers) {
    if (numbers.length < 1) return false;
    const ans = numbers.every(number => number % 2 === 0);
    return ans;
}

