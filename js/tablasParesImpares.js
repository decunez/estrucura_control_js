// tablasParesImpares.js
let opcion = prompt("¿Quieres ver las tablas de multiplicar de números pares o impares? (escribe 'pares' o 'impares')").toLowerCase();

if (opcion === "pares" || opcion === "impares") {
    let inicio = opcion === "pares" ? 2 : 1;
    
    for (let i = inicio; i <= 10; i += 2) {
        console.log(`\nTabla del ${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
} else {
    console.log("Opción no válida. Por favor escribe 'pares' o 'impares'.");
}