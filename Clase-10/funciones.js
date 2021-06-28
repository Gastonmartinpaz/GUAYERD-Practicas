// EJERCICIO 1
// Crear una función que reciba tu edad y retorne tu edad en años perro. (Multiplicado por 7).

// let edad = parseInt(prompt("Ingrese su edad: "));
// let edad2 = parseInt(prompt("Ingrese la edad de su tio: "));

// function calculoEdad(numero){
//     return numero * 7;
// }

// console.log(calculoEdad(edad));
// console.log(calculoEdad(edad2));

// EJERCICIO 2
// Crear una función que reciba un nombre y devuelva un saludo.

// let nombre = prompt("Ingrese su nombre");

// function saludo(name){
//     return "Hola " + name ;
// }

// console.log(saludo(nombre));


// EJERCICIO 3
// Crear una función que salude.

// function saludo(){
//     return "Hola"
// }

// console.log(saludo());

// EJERCICIO 4
// Crear una función que reciba los parámetros, la temperatura y el sistema (Farenheit o Celsius), y devuelva la temperatura transformada al otro sistema. (Si recibe Farenheit, devolver Celsius, si recibe Celsius devolver Farenheit).

// let sistemaMedicion = parseInt(prompt("Ingrese si la temperatura ingresada es: \n 1) Grados Celsius. \n 2) Grados Fahrenheit."));
// let temperatura = parseInt(prompt("Ingrese una valor de temperatura: "));


// function conversionGrados(temp, sist){
//     if (sist === 1){
//         // Convierte de celsius a fahrenheit
//         return (temp * 1.8) + 32
//     } else if (sist === 2) {
//         // Convierte de fahrenheit a celsius
//         return (temp - 32) / 1.8
//     }
// }

// alert(conversionGrados(temperatura, sistemaMedicion));


// EJERCICIO 5
// Realizar una función que reciba como parámetro un número. Si esta entre 5 y 10, que le aplique la función de factorial (ejercicio 12 de bucles), si es menor , aplicar una función que muestre su módulo (valor absoluto, valor sin el “-” en caso de ser negativo), y si es mayor que 10 aplicarle una función que muestre su doble. Ejemplos de entrada y salida:
// 6 → 6! = 720
// 4 → |4| = 4
// -8 → |-8| = 8
// 50 → 100
// 11 → 22

// let numero = parseInt(prompt("Ingrese un numero"));

// function calculo(num){
//     let fact; // Factorial
//     if (num>=5 && num<=10){
//         fact = 1;
//         for(i=1; i<=num; i++){
//             fact = fact * i;
//         } console.log(fact);
//     } else if (num < 0 ){
//         return num * (-1);
//     } else if (num > 10){
//         return num * 2;
//     } else {
//         return num;
//     }
// }

// console.log(calculo(numero));



// EJERCICIO 6
// Rehacer el ejercicio 12 de condicionales utilizando funciones para validar edad y cobrar.


// let edadUsuario = parseInt(prompt("Ingrese su edad."));
// let bebidaUsuario = parseInt(prompt("Seleccione la bebida que va a tomar: \n 1)Cerveza. \n 2)Jugo. \n 3)Agua."));

// const cerveza = 50;
// const agua = 20;
// const jugo = 35;

// function validarEdad(edad){
//     if(edad>=18){
//         return true;
//     } else if(edad<18){
//         return alert("Usted es menor de edad, no puede beber alcohol.");
//     }
// }

// function cobroBebida(cost){
//     dinero = parseInt(prompt("Con cuanto va a abonar?"));
//     if(dinero<cost){
//         return alert("Usted no tiene dinero para pagar la bebida");
//     } else {
//         cost = dinero - cost;
//         alert("Su vuelto es de $" + cost);
//     }
// }

// if (edadUsuario < 18 && bebidaUsuario === 1){
//     validarEdad(edadUsuario);
// } else if (edadUsuario >= 18 && bebidaUsuario === 1){
//     validarEdad(edadUsuario);
//     alert("El costo de su bebida es de $" + cerveza);
//     cobroBebida(cerveza);
// } else if (bebidaUsuario === 2) {
//     alert("El costo de su bebida es de $" + jugo);
//     cobroBebida(jugo);
// } else if (bebidaUsuario === 3) {
//     alert("El costo de su bebida es de $" + agua);
//     cobroBebida(agua);
// }

 

// EJERCICIO 7
// Crear una función que reciba tres parámetros: Horas, minutos y segundos, y devolver todo pasado a segundos.

// let horas = parseInt(prompt("Ingrese una cantidad de horas: "));
// let minutos = parseInt(prompt("Ingrese una cantidad en minutos: "));
// let segundos = parseInt(prompt("Ingrese una cantidad en segundos: "));

// function transformacionSegundos(hor, min, seg){
//     return (hor * 3600) + (min * 60) + seg;  
// }

// alert("Lo que ingresó pasado a segundos es = " + transformacionSegundos(horas, minutos, segundos) + "s");

// EJERCICIO 8
// Realizar una función de carga de notas en un array. Luego realizar otra función que calcule el promedio de todas y lo devuelva.


// Duda de cuando poner un parametro o no

// let array = [];

// function cantidadNotas(){
//     do {
//         notas = parseInt(prompt("Ingrese una nota. (Pulse '0' para terminar de ingresar numeros.')"));
//         array.push(notas);       
//     } while (notas !== 0);
//     array.pop();
//     return array;
// }

// function promedio(){
//     let total = 0;
//     for(i=0; i<cantidadNotas().length; i++){
//         total += array[i];
//     }
//     console.log("El promedio final es igual a: " + total / (array.length-1));
// }

// promedio();

// let promedio;
// function promedioFinal(){
//     return promedio = total / notasUsuario.length
// }

// alert("El promedio final es de " + promedioFinal());

// let nota;
// let notasUsuario = [];
// let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas que va a ingresar: "));

// function sumaNotas(nums){
//     for(i=0; i<notasUsuario; i++){
//         nota = parseInt(prompt("Ingrese una nota: "));
//         notasUsuario.push(nota);
//     }
// }

