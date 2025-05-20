let edad = parseInt(prompt("Por favor, ingresa tu edad:"));

console.log("Actividad 1: IF anidados - Clasificación de edades");

if (isNaN(edad) || edad < 0) {
    console.log("Edad no válida");
} else if (edad >= 0 && edad <= 12) {
    console.log("Tu tines "+edad+" años eres NIÑO");
} else if (edad >= 13 && edad <= 17) {
    console.log("Tu tines "+edad+" años eres ADOLESCENTE");
} else if (edad >= 18 && edad <= 59) {
    console.log("Tu tines "+edad+" años eres ADULTO");
} else {
    console.log("Tu tines "+edad+" años eres ADULTO MAYOR");
}
console.log("");