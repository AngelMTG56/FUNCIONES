// Ejercicio 4. Inversión con interés reinvertido
// Qué practicas: for y una variable que se actualiza con su propio valor en cada vuelta.
// Enunciado
// Una persona invierte su dinero en un banco que paga 2% de interés mensual. La ganancia de
// cada mes se reinvierte. Leer el capital inicial y la cantidad de meses. Mostrar el saldo al final de
// cada mes y la ganancia total.

const capitalInicial = parseFloat(prompt("Ingrese el capital inicial:"));
const cantidadMeses = parseInt(prompt("Ingrese la cantidad de meses:"));
let saldo = capitalInicial;
let gananciaTotal = 0;

for (let i = 1; i <= cantidadMeses; i++) {
    const gananciaMensual = saldo * 0.02;
    saldo += gananciaMensual;
    gananciaTotal += gananciaMensual;
    console.log(`Mes ${i}: Saldo: ${saldo.toFixed(2)}, Ganancia mensual: ${gananciaMensual.toFixed(2)}`);
}

console.log(`Ganancia total después de ${cantidadMeses} meses: ${gananciaTotal.toFixed(2)}`);

