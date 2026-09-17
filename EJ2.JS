// Qué practicas: for, funciones con return y acumulador.
// Enunciado
// Leer 10 números. Por cada número mostrar su cubo y su cuarta parte. Al terminar, mostrar la
// suma de todos los cubos.
let numeros = [];
for (let i = 0; i < 10; i++) {
    numeros[i] = parseInt(prompt(`Ingrese el número :`));

}

function calcularCubo(num) {
    return num ** 3;
}

function calcularCuartaParte(num) {
    return num / 4;
}

let sumaCubos = 0;
for (let i = 0; i < numeros.length; i++) {
    console.log(`Número: ${numeros[i]}, Cubo: ${calcularCubo(numeros[i])}, Cuarta parte: ${calcularCuartaParte(numeros[i])}`);
    sumaCubos += calcularCubo(numeros[i]);
}
console.log(`La suma de todos los cubos es: ${sumaCubos}`);
