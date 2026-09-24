// Ejercicio 7. Expendio de naranjas
// Qué practicas: funciones que retornan booleanos, contador y acumulador.
// Enunciado
// Al cerrar un expendio de naranjas, 15 clientes que no han pagado reciben un 15% de
// descuento si compraron más de 10 kilos. Leer primero el precio por kilo y luego los kilos de
// cada cliente.
// Mostrar cuánto paga cada cliente, el total que recibe la tienda y cuántos clientes obtuvieron
// descuento.

function tieneDescuento(kilos) {
    return kilos > 10;
}

function calcularTotalCliente(kilos, precioKilo) {
    let total = kilos * precioKilo;

    if (tieneDescuento(kilos)) {
        total = total - total * 0.15;
    }

    return total;
}

let precioKilo = Number(prompt("Precio por kilo:"));
let totalRecaudado = 0;
let clientesDescuento = 0;

for (let i = 1; i <= 15; i++) {
    let kilos = Number(prompt("Kilos cliente " + i + ":"));

    let totalCliente = calcularTotalCliente(kilos, precioKilo);

    if (tieneDescuento(kilos)) {
        console.log(
            "Cliente " + i +
            " paga: " + totalCliente +
            " (con descuento)"
        );

        clientesDescuento++;
    } else {
        console.log("Cliente " + i + " paga: " + totalCliente);
    }

    totalRecaudado = totalRecaudado + totalCliente;
}

console.log("Total recaudado: " + totalRecaudado);
console.log("Clientes con descuento: " + clientesDescuento);