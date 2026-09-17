// Enunciado
// Leer un número y mostrar su tabla de multiplicar del 1 al 10. Cada línea debe mostrar el
// multiplicando, el multiplicador y el producto.

const numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));


for (let i = 1; i <= 10; i++) {
    const producto = multiplicar(numero, i);
    console.log(`${numero} x ${i} = ${producto}`);
}
function multiplicar(a, b) {
    return a * b;
}
