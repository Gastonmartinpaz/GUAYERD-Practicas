// EJERCICIO 1


let metro = parseInt(prompt("Ingrese una medida en metros."));
const pie = 3.28084
const centimetro = 100
const pulgadas = 39.3701

if (isNaN(metro)){
    alert("El dato ingresado no es válido. Ingrese un número");
} else {  
    console.log(metro + " metros" + " es igual a " + metro*pie + " pies."); 
    console.log(metro + " metros" + " es igual a " + metro*centimetro + " centimetros.");
    console.log(metro + " metros" + " es igual a " + metro*pulgadas + " pulgadas.");
}


// EJERCICIO 2


let edadDeUsuario = parseInt(prompt("Ingrese su edad actual."));

if (edadDeUsuario < 18) {
    console.log("Sos menor de edad.");
} else {
    console.log("Sos mayor de edad.");
}


// EJERCICIO 3


let saboresHelado = prompt("Ingrese sus gustos de helados.").toLowerCase();
let validacionUsuario = prompt("Quiere cobertura de chocolate?").toLowerCase();

if (validacionUsuario === "si") {
    alert("Su helado sabor " + saboresHelado + " con cobertura de chocolate cuesta $180.");
} else if (validacionUsuario === "no") {
    alert("Su helado sabor " + saboresHelado + " cuesta $150.");
} else {
    alert("Por favor, ingrese una respuesta válida.");
}


// EJERCICIO 4


let num1 = parseFloat(prompt("Ingrese el primer número"));
let num2 = parseFloat(prompt("Ingrese el segundo número"));
let suma = num1 + num2
console.log("El resultado de la suma es " + suma);

if (suma % 2 === 0) {
    console.log("Su número es par.");
} else {
    console.log("Su número es impar.");
}


// EJERCICIO 5


let numero = parseInt(prompt("Ingrese un número."));

if (numero >= 1) {
    alert("El número es positivo.");
} else if (numero <= -1) {
    alert("El número es negativo.");
} else if (numero === 0) {
    alert("El número es 0");
}


// EJERCICIO 6

let montoUsuario = parseInt(prompt("Ingrese un monto."));
let formulaDescuento = (montoUsuario / 1.10)

if (montoUsuario > 2000) {
    alert("Felicidades, usted tiene un descuento. Total a pagar: $" + parseInt(formulaDescuento));
} else {
    alert("Usted no posee descuento. Total a pagar: $" + montoUsuario);
}

// EJERCICIO 7