// Leer 20 números e imprimir cuántos son positivos, cuántos negativos y cuántos son cero.


let numeros = [];
let positivos = 0;
let negativos = 0;
let ceros = 0;

for (let i = 0; i < 20; i++) {
    numeros[i] = parseInt(prompt(`Ingrese el número ${i + 1}:`));

    if (numeros[i] > 0) {
        positivos++;
    } else if (numeros[i] < 0) {
        negativos++;
    } else {
        ceros++;
    }
}

console.log(`Cantidad de números positivos: ${positivos}`);
console.log(`Cantidad de números negativos: ${negativos}`);
console.log(`Cantidad de ceros: ${ceros}`);

