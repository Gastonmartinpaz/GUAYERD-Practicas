// EJERCICIO 1
// Crear una función que reciba tu edad y retorne tu edad en años perro. (Multiplicado por 7).

// let edad = parseInt(prompt("Ingrese su edad: "));

// function calculoEdad(num1, num2){
//     return edad * 7;
// }

// console.log(calculoEdad());


// EJERCICIO 2
// Crear una función que reciba un nombre y devuelva un saludo.

// let nombre = prompt("Ingrese su nombre");

// function saludo(){
//     alert("Hola " + nombre);
// }

// saludo();


// EJERCICIO 3
// Crear una función que salude.


// EJERCICIO 4
// Crear una función que reciba los parámetros, la temperatura y el sistema (Farenheit o Celsius), y devuelva la temperatura transformada al otro sistema. (Si recibe Farenheit, devolver Celsius, si recibe Celsius devolver Farenheit).

// let temperatura = parseInt(prompt("Ingrese una valor de temperatura: "));
// let sistemaMedicion = parseInt(prompt("Ingrese si la temperatura ingresada es: \n 1) Grados Celsius. \n 2) Grados Fahrenheit."));

// function conversionGrados(numero1, numero2){
//     if (sistemaMedicion === 1){
//         // Convierte de celsius a fahrenheit
//         return (temperatura * 1.8) + 32
//     } else if (sistemaMedicion === 2) {
//         // Convierte de fahrenheit a celsius
//         return (temperatura - 32) / 1.8
//     }
// }

// alert(conversionGrados());


// EJERCICIO 5
// Realizar una función que reciba como parámetro un número. Si esta entre 5 y 10, que le aplique la función de factorial (ejercicio 12 de bucles), si es menor , aplicar una función que muestre su módulo (valor absoluto, valor sin el “-” en caso de ser negativo), y si es mayor que 10 aplicarle una función que muestre su doble. Ejemplos de entrada y salida:
// 6 → 6! = 720
// 4 → |4| = 4
// -8 → |-8| = 8
// 50 → 100
// 11 → 22

// EJERCICIO 6
// Rehacer el ejercicio 12 de condicionales utilizando funciones para validar edad y cobrar.


// let edadUsuario = parseInt(prompt("Ingrese su edad."));
// let bebidaUsuario = prompt("Ingrese una bebida (Cerveza, jugo o agua.");

// const cerveza = 50;
// const agua = 20;
// const jugo = 35;
// let costo = 0;
// let dineroUsuario

// if (edadUsuario < 18 && bebidaUsuario == "cerveza") {
//     alert("Usted es menor de edad, no puede beber alcohol.")

// } else if (edadUsuario >= 18) { 
//     if (bebidaUsuario == "cerveza") {
//         alert("El costo de su bebida es de $50")
//         costo = cerveza
//         dineroUsuario = parseInt(prompt("Con cuanto va a abonar?"));
//         if (dineroUsuario < costo) {
//             alert("Usted no tiene dinero para pagar la bebida.");
//         } else {
//             costo = dineroUsuario - cerveza
//             alert("Su vuelto es de $" + costo);
//         }
//     }

//     if (bebidaUsuario == "agua") {
//         alert("El costo de su bebida es de $20")
//         costo = agua
//         dineroUsuario = parseInt(prompt("Con cuanto va a abonar?"));
//         if (dineroUsuario < costo) {
//             alert("Usted no tiene dinero para pagar la bebida.");
//         } else {
//             costo = dineroUsuario - agua
//             alert("Su vuelto es de $" + costo);
//         }
//     }

//     if (bebidaUsuario == "jugo") {
//         alert("El costo de su bebida es de $35")
//         costo = jugo
//         dineroUsuario = parseInt(prompt("Con cuanto va a abonar?"));
//         if (dineroUsuario < costo) {
//             alert("Usted no tiene dinero para pagar la bebida.");
//         } else {
//             costo = dineroUsuario - jugo
//             alert("Su vuelto es de $" + costo);
//         }
//     }

// } 

// EJERCICIO 7
// Crear una función que reciba tres parámetros: Horas, minutos y segundos, y devolver todo pasado a segundos.

// let horas = parseInt(prompt("Ingrese una cantidad de horas: "));
// let minutos = parseInt(prompt("Ingrese una cantidad en minutos: "));
// let segundos = parseInt(prompt("Ingrese una cantidad en segundos: "));

// function transformacionSegundos(num1, num2, num3){
//     return (horas * 3600) + (minutos * 60) + segundos;  
// }

// alert("Lo que ingresó pasado a segundos es = " + transformacionSegundos() + "s");

// EJERCICIO 8
// Realizar una función de carga de notas en un array. Luego realizar otra función que calcule el promedio de todas y lo devuelva.

let nota;
let notasUsuario = [];

// Duda de cuando poner un parametro o no
function cantidadNotas(){
    do {
        nota = parseInt(prompt("Ingrese una nota. (Pulse '0' para terminar de ingresar numeros.')"));
        notasUsuario.push(nota);       
    } while (nota !== 0);
}

let total = 0;
function sumaNotas(){
    for(i=0; i<notasUsuario.length; i++){
        total += notasUsuario[i];
    }
}

let promedio;
function promedioFinal(){
    return promedio = total / notasUsuario.length
}

alert("El promedio final es de " + promedioFinal());

// let nota;
// let notasUsuario = [];
// let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas que va a ingresar: "));

// function sumaNotas(nums){
//     for(i=0; i<notasUsuario; i++){
//         nota = parseInt(prompt("Ingrese una nota: "));
//         notasUsuario.push(nota);
//     }
// }

// console.log(notasUsuario());
