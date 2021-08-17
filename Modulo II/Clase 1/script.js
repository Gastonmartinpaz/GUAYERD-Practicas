// // EJERCICIO 1
// // Crear una función flecha que reciba un número y devuelva el doble del mismo.

// const mult = number => number * 2;
// console.log(mult(4));

// // EJERCICIO 2
// // Crear una función flecha que reciba dos números y muestre la suma de ellos.

// const suma = (num1, num2) => num1 + num2;
// console.log(suma(4, 2));

// // EJERCICIO 3
// // Crear una función flecha que valide si un número es mayor a otro. Luego mostrar el resultado por consola.
const validacion = (a, b) => Math.max(a, b);
console.log(validacion(2, 15));

// // EJERCICIO 4
// // Mostrar por pantalla uno por uno reccoriéndolo, el siguiente array:
let frutas = ["sandía","manzana","damasco","pelón","frambuesa","plátano"]

frutas.forEach((item, index) => console.log(item, index));

// // EJERCICIO 5
// // Mostrar por pantalla las raíces cuadradas de los números del siguiente array:
// let numeros = [16,29,120,64,81]
// const raices = numeros.map(Math.sqrt)
// console.log(raices);

// EJERCICIO 6
// Solicitar al usuario su nombre y su signo del zodíaco y devolver un mensaje que devuelva esos mismos datos. Ejemplo: “Su nombre es Fermin y su signo es Escorpio”.

// let nombre = prompt("Ingrese su nombre");
// let signo = prompt("Ingrese su signo");

// console.log(`Su nombre es ${nombre.charAt(0).toUpperCase()}${nombre.slice(1)} y su signo es ${signo.charAt(0).toUpperCase()}${signo.slice(1)}`);


// EJERCICIO 7
// Mostrar por pantalla los números mayores a 100 del siguiente array.
// let numeros = [160,23,120,60,1,-10,8,9483]
// const mayor = numeros.filter(numero => numero > 100);
// console.log(mayor);


// EJERCICIO 8
// Generar en base a un array, un nuevo array que tenga todos sus números consecutivos, y otro con sus números precedentes. (Ejemplo: Si el número es 8 : En el array de consecutivos irá 9 , y en el array de precedentes irá 7). Al final mostrar por pantalla los tres array formados.
// let numeros = [15,28,32,40,11,-3,0,100]

// EJERCICIO 9
// Crear una función flecha que reciba un parámetro que indique el momento del día: “Mañana, tarde, noche” y en base a eso de un saludo personalizado. Ejemplo: “Buenos días, buenas tardes, buenas noches”.

// let momentoDia = prompt("Indique el momento del dia");

// let saludo = momento => {
//     if(momento == "mañana"){
//         return "Buenos días"
//     } else if(momento == "tarde"){
//         return "Buenas tardes"
//     } else if(momento == "noche"){
//         return "Buenas noches"
//     }
// }

// console.log(saludo(momentoDia));

// EJERCICIO 10
// Mostrar del siguiente array los nombres que comiencen con “M”.
// let personas = ["Mario","Santino","Clotilde","Margarita","Sebastian","Melchor","Macarena","Flavio"]
// const nombresM = personas.filter(persona => persona.charAt(0) === "M");
// console.log(nombresM);

// EJERCICIO 11
// Transformar las siguientes funciones a ArrowFunctions y aplicar TemplateStrings cuando corresponda:

// function despedir (nombre){
//     console.log("Adios" + nombre) }

// const despedir = nombre => console.log(`Adios ${nombre}`);
// despedir("Lucas");

// // function cobrar (monto,pago){
// //     return monto - pago;}
// //     console.log("Su vuelto es: " cobrar(monto,pago))

// const cobrar = (monto, pago) => monto - pago;
// console.log(`Su vuelto es: ${cobrar(150, 100)}`)

// // function saludar () {
// //     console.log("Hola")}

// const saludar = () => console.log("Hola")
// saludar()

