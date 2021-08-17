// EJERCICIO 1
// Crear un párrafo. Luego desde el javascript hacer que se vea rojo.
// document.querySelector("p").classList.add("rojo");

// // numeros.forEach(numero => {
// //     document.write(`<p>${numero}</p>`)
// // });

// // EJERCICIO 2
// // Crear tres párrafos. Luego desde el javascript hacer que tengan un fondo verde.
// document.querySelectorAll("p").forEach(e => e.classList.add("verde"));

// EJERCICIO 3
// Crear 4 párrafos, dos con clase “blanco”. A todos agregarle un fondo celeste, y a los clase blanco además hacer que el texto se vea blanco.

// EJERCICIO 4
// En base al siguiente listado de notas, mostrar en verde los mayores a 7, amarillo los que están entre 4 y 6 y en rojo del tres para abajo.
// notas = [9,2,7,6,6,4,5,10,3,9.5];

// notas.forEach(nota => {
//     if(`${nota}` >= 7){
//         document.write(`<p class="verdeNotas">${nota}</p>`)
//     } else if(`${nota}` <= 3){
//         document.write(`<p class="rojoNotas">${nota}</p>`)   
//     } else{
//         document.write(`<p class="amarilloNotas">${nota}</p>`)     
//     }
// });

// document.querySelector("p")

// EJERCICIO 5
// Tenemos el siguiente HTML. Vamos a preguntarle al usuario qué color quiere cambiar, y luego lo vamos a preguntar por cuál. (Dos input). En base a eso, nuestro javascript modificará el documento. Ejemplo: Si pide cambiar el verde por azul, los textos que antes se veían en verde ahora deberán verse en azul.
// (Nota: Se debe agregar el css correspondiente).

// let color1 = prompt("Que color quiere cambiar?").toLowerCase();
// let color2 = prompt("Por cual color lo quiere cambiar?").toLowerCase();

// document.querySelectorAll(`.${color1}`).forEach(e => e.classList.replace(color1, color2));


// EJERCICIO 6
//Pedir al usuario: Una palabra, un color y una cantidad. Generar la cantidad de párrafos con esa palabra y ese color que se requiera

// let word = prompt("Ingrese una palabra o texto: ");
// let color = prompt("Ingrese un color para el texto (negro, rojo, azul, amarillo o verde): ").toLowerCase();
// let cant = parseInt(prompt("Ingrese la cantidad de veces a repetir el texto: "));

// for(i=0; i<cant; i++){
//     document.write(`<p class="${color}">${word}</p>`)
// }

// EJERCICIO 7
// a) Dentro del siguiente HTML, a todos los párrafos que NO tengan la clase “nuevo”, agregarle la clase “antiguo”.
document.querySelectorAll("p:not(.nuevo)").forEach(e => e.classList.add("antiguo"));

// b) A todos los que tienen clase “rojo”, agregarles la clase “transparencia” 
document.querySelectorAll(".rojo").forEach(e => e.classList.add("transparencia"));

// c) A todos los que tengan clase “saludo” quitarla, y a los que no la tengan, agregarla. 
document.querySelectorAll("p").forEach(e => document.querySelector(".saludo") ? e.classList.remove("saludo") : e.classList.add("saludo"));

// d) Remover de los primeros 4 párrafos la clase “ayuda”
let parrafo = document.querySelectorAll("p");

// e) Crear desde el CSS estilos personalizados para cada clase.
  

//   <p class="nuevo rojo saludo"></p>
//   <p class="rojo saludo"></p>
//   <p class="campo"></p>
//   <p class="nuevo saludo ayuda"></p>
//   <p class="nuevo ayuda"></p>
