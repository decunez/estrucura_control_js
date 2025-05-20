// edadCategoria.js
let edad = parseInt(prompt("Por favor, ingresa tu edad:"));

if (isNaN(edad) || edad < 0) {
    console.log("Edad no válida");
} else if (edad >= 0 && edad <= 12) {
    console.log("Niño");
} else if (edad >= 13 && edad <= 17) {
    console.log("Adolescente");
} else if (edad >= 18 && edad <= 59) {
    console.log("Adulto");
} else {
    console.log("Adulto mayor");
}