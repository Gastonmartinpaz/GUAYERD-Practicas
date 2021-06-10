// EJERCICIO 0


let nombre = prompt ("Por favor, ingrese su nombre");
alert("Hola " + nombre);
let apellido = prompt ("Por favor, ingrese su apellido");
console.log("Hola " + nombre + " " + apellido);


 // EJERCICIO 1

 
 let num1 = parseFloat(prompt("Ingrese el primer número"));
 let num2 = parseFloat(prompt("Ingrese el segundo número"));
 console.log("El resultado de la suma es " + parseFloat(num1 + num2));


 // EJERCICIO 2


 let edadUsuario = parseInt(prompt("Ingrese su edad actual"));
 const anioActual = 2021
 let calculoEdad = anioActual - edadUsuario;
 console.log("Usted nacio en el año " + calculoEdad);


// EJERCICIO 3


let balanceDeCuenta = 45000
alert("Su balance de cuenta es de $" + balanceDeCuenta);
let retiroDeDinero = parseInt(prompt("Cuanto dinero desea retirar?"));
alert("El balance de su cuenta es de $" + parseInt(balanceDeCuenta-retiroDeDinero));


// EJERCICIO 4


let num1 = parseFloat(prompt("Ingrese su primer nota"));
let num2 = parseFloat(prompt("Ingrese su segunda nota"));
let num3 = parseFloat(prompt("Ingrese su tercer nota"));
console.log("El promedio es de " + parseFloat((num1+num2+num3) / 3));


// EJERCICIO 5


let metro = parseInt(prompt("Ingrese una medida en metros."));
const pie = 3.28084
const centimetro = 100
const pulgadas = 39.3701

console.log(metro + " metros" + " es igual a " + metro*pie + " pies, " + metro*centimetro + " centimetros y " + metro*pulgadas + " pulgadas." );


// EJERCICIO 6


let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese un segundo numero"));
let suma = num1 + num2
console.log("El resultado de su suma es " + suma);
let num3 = parseInt(prompt("Ingrese un tercer número"));
console.log("El resultado de su operación es " + parseInt(suma*num3));


// EJERCICIO 7 


let minutos = parseInt(prompt("Ingrese la cantidad de minutos a convertir"));
const segundos = 60
alert("Equivale a " + minutos*segundos + " segundos.");


// EJERCICIO 8


let base = parseFloat(prompt("Ingrese la base de su rectángulo."));
let altura = parseFloat(prompt("Ingrese la altura de su rectángulo"));
alert("El área de su rectángulo es de " + base*altura);


// EJERCICIO 9


let base = parseFloat(prompt("Ingrese la base de su triángulo equilátero"));
let altura = parseFloat(prompt("Ingrese la altura de su triángulo equilátero"));
let area = (base*altura) / 2
alert("El área de su triángulo es de " + area);


// EJERCICIO 10


let monto = parseInt(prompt("Ingrese un monto"));
let descuento = parseInt(prompt("Ingrese un numero de descuento a aplicar"));
let porcentaje = (monto * descuento) / 100
let montoFinal = monto - porcentaje
console.log("El monto final con el descuento aplicado es de " + montoFinal);


// EJERCICIO 11


let nombre = prompt ("Por favor, ingrese su nombre");
let edadUsuario = parseInt(prompt("Ingrese su edad actual"));
let calculoEdad = 2021 - edadUsuario;
alert("Hola " + nombre + ", usted nacio en el año " + calculoEdad);


// EJERCICIO 12


let nombre = prompt("Por favor, ingrese su nombre");
let gradosCelsius = parseFloat(prompt("Ingrese la temperatura en grados celsius"));
let gradosFahrenheit =  (gradosCelsius * 1.8) + 32
console.log("Hola " + nombre + ", la temperatura en grados celsius que ingresaste equivale a " + gradosFahrenheit + " F");


// EJERCICIO 13


let nombre = prompt("Por favor, ingrese su nombre");
let gradosFahrenheit = parseFloat(prompt("Ingrese la temperatura en grados fahrenheit"));
let gradosCelsius = (gradosFahrenheit - 32) / 1.8
console.log("Hola " + nombre + ", la temperatura en grados fahrenheit que ingresaste equivale a " + gradosCelsius + " C");


// EJERCICIO 14


let num1 = parseInt(prompt("Ingrese un número"));
console.log(num1);
let suma = num1 + parseInt(5)
console.log(suma);
let multiplicacion = suma * parseInt(10)
console.log(multiplicacion);
let resultadoFinal = multiplicacion % parseInt(3)
console.log("El resultado de su operacion es " + parseInt(resultadoFinal));


// BONUS 0

let num1 = prompt("Ingrese un número");
let num2 = prompt("Ingrese un segundo número");
console.log(num1+num2);

// BONUS 1