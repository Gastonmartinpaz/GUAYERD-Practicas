// /* // Seleccionar un elemento por su ID
// console.log(document.querySelector("#chau").innerText)
// // Seleccionar el primer elemento de su tipo
// console.log(document.querySelector("p").innerText)
// // Seleccionar el primer elemento de su clase
// console.log(document.querySelector(".p").innerText)
// // Seleccionar todos los elementos de su tipo
// console.log(document.querySelectorAll("p").innerText) // Esto es un arreglo
// // Seleccionar todos los elementos de su clase
// console.log(document.querySelectorAll(".p").innerText)
// // Seleccionar varios tipos de elementos
// console.log(document.querySelectorAll("p,span").innerText)
// // Seleccionar el primer elemento de un grupo
// console.log(document.querySelector(".p").innerText)
// // Seleccionar todos los elementos de una clase y tipo
// console.log(document.querySelectorAll("p.hola").innerText)



// document.querySelectorAll(".hola").forEach(e => console.log( e.innerHTML)) // Recorrer el arreglo 

// console.log(document.querySelectorAll("p,span").forEach(e =>e.innerHTML)) //Nos devuelve undefined

// EJERCICIO 0
//       0) En base al siguiente HTML, mostrar por consola el texto de los siguientes elementos:
// 	a) El primer span
        // console.log(document.querySelector("span").innerText)
// 	b) El primer span con clase “guayerd”
        // console.log(document.querySelector("span.guayerd").innerText)
// 	c) El span con id “hola”
        // console.log(document.querySelector("#hola").innerText)
// 	d) Todos los span
        // console.log(document.querySelectorAll("span").forEach(a => console.log( a.innerText)))
// 	e) Todos los elementos  con clase “guayerd”
        // console.log(document.querySelectorAll(".guayerd").forEach(a => console.log( a.innerText)))
// 	f) Todos los span con clase “guayerd”.
        // console.log(document.querySelectorAll("span.guayerd").forEach(a => console.log( a.innerText)))
// 	f) Todos los span y párrafos.
        // console.log(document.querySelectorAll("span,p").forEach(a => console.log( a.innerText)))



    //   <span>Uno</span>
    // <p class="guayerd">Setenta</p>
    // <span class="guayerd">Cinco </span>
    // <span>Dos</span>
    // <span>Test</span>
    // <span class="guayerd">Cuatro </span>
    // <span id="hola">Tres </span>
    // <p>Diez</p>

// EJERCICIO 1
//1) Agregar en el archivo HTML con 1 titulo H1 sin clases ni ids, con 5 párrafos, de los cuales los dos primeros no tendrán ninguna clase ni id, los 2 siguientes tendrán la clase “rojo” , y el último id “Azul”.
// // a) Al ID azul cambiarle el texto por “Azul”.
// document.querySelector("#azul").innerText = 'Azul';
// // b) Al primer párrafo cambiarle el texto por “Verde”
// document.querySelector("p").innerText = 'Verde';
// // c) A los párrafos de la clase rojo cambiarles el texto por “Rojo”.
// document.querySelectorAll(".rojo").forEach(a => a.innerText = 'Rojo');
// // d) A todos los párrafos agregarles un “!” al final del texto.
// document.querySelectorAll("p").forEach(a => a.innerText += '!');
// // e) A todos los elementos (párrafos y título) Agregarles un “*” al principio del texto.
// document.querySelectorAll("h1, p").forEach(a => a.innerText = '*' + a.innerText);

// EJERCICIO 2
// Crear una función flecha que en base a 2 datos de temperatura, indique la temperatura media (Es decir, el promedio de ambas). Mostrar el resultado con un mensaje en el HTML. Por ejemplo en un párrafo, que indique: “La temperatura media es ….”. 

// let max = parseInt(prompt("Ingrese la temperatura máxima: "));
// let min = parseInt(prompt("Ingrese la temperatura minima: "));

// const temp = (a, b) => (a + b) / 2;
// document.querySelector("#temperatura").innerText = `La temperatura media es: ${temp(max, min)}°C`


// EJERCICIO 3
// Crear una función flecha que solicite al usuario que elija entre las estaciones del año (Invierno, verano, primavera, otoño) y mostrar una imagen que haga referencia a la estación elegida.
// let elegir = prompt("Elija una estación del año: \n1) Invierno. \n2) Verano. \n3) Primavera. \n4) Otoño.");
// let estacion = a => document.querySelector("img").src=`/Modulo II/Clase 2/img/${a}.jpg`

// estacion(elegir);

// EJERCICIO 4
// Crear una función flecha que calcule la edad del usuario. Luego mostrar en el html un mensaje personalizado indicando si es mayor o menor de edad.

// let edad = parseInt(prompt("Ingrese su edad de nacimiento: "));

// const calculoEdad = edad => 2021 - edad;

// if(calculoEdad(edad) >= 18){
//         document.write("<p>Usted es mayor de edad</p>");
// } else{
//         document.write("<p>Usted es menor de edad</p>");
// }

// EJERCICIO 5
// Crear una función flecha que solicite al usuario su nombre y su animal favorito (Dar 3 o 4 opciones). Mostrar por HTML un mensaje personalizado saludando a la persona y mostrando una foto de su animal favorito. 

let nombre = prompt("Ingrese su nombre: ");
let animalFavorito = prompt("Ingrese su animal favorito (leon, gato o perro): ").toLowerCase();

document.write(`<p>Hola ${nombre}! Le dejo una foto de su animal favorito.</p>`)
const eleccionAnimal = a => document.querySelector("img").src=`/Modulo II/Clase 2/img/${a}.jpg`
eleccionAnimal(animalFavorito);

