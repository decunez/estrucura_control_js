// tablaMultiplicar.js
let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));

if (!isNaN(numero)) {
    for (let i = 1; i <= 12; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log("Por favor ingresa un número válido.");
}