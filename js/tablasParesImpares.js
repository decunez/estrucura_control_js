let opcion = prompt("¿Quieres ver las tablas de multiplicar de números pares o impares? (escribe 'pares' o 'impares')").toLowerCase();
console.log("Actividad 3: IF + FOR - Tablas pares o impares");

if (opcion === "pares" || opcion === "impares") {
    console.log("Tablas de multiplicar de números " + opcion);
    let inicio;
    if (opcion === "pares") {
        inicio = 2;
    } else {
        inicio = 1;
    }

    for (let i = inicio; i <= 10; i += 2) {
        console.log("\nTabla del " + i + ":");
        for (let j = 1; j <= 10; j++) {
            console.log(i + " X " + j + " = " + (i * j));
        }
    }
} else {

    console.log("Opción no válida. Por favor escribe 'pares' o 'impares'.");
}