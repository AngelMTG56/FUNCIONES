// Enunciado
// Leer cuántos días se van a registrar. Luego leer la temperatura en grados centígrados de cada
// día y mostrar su equivalente en Kelvin y en Fahrenheit. Al final, mostrar la temperatura
// promedio en °C.
// Fórmulas: K = C + 273.15 y F = C * 9 / 5 + 32.

const cantidadDias = parseInt(prompt("Ingrese la cantidad de días a registrar:"));
let temperaturasC = [];
let sumaTemperaturas = 0;

for (let i = 0; i < cantidadDias; i++) {
    temperaturasC[i] = parseFloat(prompt(`Ingrese la temperatura en °C del día ${i + 1}:`));
    sumaTemperaturas += temperaturasC[i];
}

function convertirAKelvin(celsius) {
    return celsius + 273.15;
}

function convertirAFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

for (let i = 0; i < temperaturasC.length; i++) {
    const kelvin = convertirAKelvin(temperaturasC[i]);
    const fahrenheit = convertirAFahrenheit(temperaturasC[i]);
    console.log(`Día ${i + 1}: ${temperaturasC[i]} °C = ${kelvin.toFixed(2)} K = ${fahrenheit.toFixed(2)} °F`);
}

const promedioTemperaturas = sumaTemperaturas / cantidadDias;
console.log(`La temperatura promedio en °C es: ${promedioTemperaturas.toFixed(2)} °C`);

