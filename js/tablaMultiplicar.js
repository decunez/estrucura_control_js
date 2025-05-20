let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));
console.log("Actividad 2: FOR - Tabla de multiplicar");

if (!isNaN(numero)) {
    console.log("Tabla de muliplicar del "+numero+"");
    for (let i = 1; i <= 12; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log("Por favor ingresa un número válido.");
}
console.log("");