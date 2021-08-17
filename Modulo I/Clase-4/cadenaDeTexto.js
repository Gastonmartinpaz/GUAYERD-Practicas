// EJERCICIO 1

let text = prompt("Ingrese  un texto.");
console.log("Verificar si contiene A: " + text.includes("a"));

// EJERCICIO 2

let text = prompt("Ingrese un texto. ");
console.log("El texto en minusculas: " + text.toLowerCase());
console.log("El texto en mayusculas: " + text.toUpperCase());

// EJERCICIO 3

let text = prompt("Ingrese una palabra. ");
console.log("La palabra ingresada empieza con la letra: " + text.charAt(0));

// EJERCICIO 4

let text = prompt("Ingrese un texto.");
console.log("Su texto tiene " + text.length + " caracteres.");

// EJERCICIO 5

let text = prompt("Ingrese un numero.");
console.log("Su numero tiene " + text.length + " digitos.");

// EJERCICIO 6

let text = prompt("Ingrese una palabra.");
console.log("Su palabra termina con la letra: " + text.charAt(text.length-1));

// EJERCICIO 7

let text = prompt("Ingrese un texto.");
console.log(text.replaceAll(" ", "*"));

// EJERCICIO 8

let letra = prompt("Ingrese una letra.").toLowerCase();
let text = prompt("Ingrese un texto.");
console.log("Verificar si el texto ingresado contiene la letra " + letra + ": " + text.includes(letra));

// EJERCICIO 9

let texto = prompt("Ingrese un texto, se le borrara la primer letra. ")
alert(text.slice(1,));

// EJERCICIO 10

let nombre = prompt("Ingrese su nombre en minuscula.").toLowerCase();
alert("Su nombre es: " + nombre.charAt(0).toUpperCase() + nombre.slice(1));

