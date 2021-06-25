// // a) Solicitar al usuario que ingrese 5 nombres de frutas y almacenarlos en un array.
// b) Ahora, solicitar al usuario que ingrese otros nombres de frutas, la cantidad que desee, sin pedirle de antemano cuál será la cantidad a ingresar.
// c) Concatenar ambos arrays y mostrarlo de dos formas diferentes: Con las 5 frutas al principio, y con las 5 frutas al final.


// let frutas = [];

// for (i=0;i<5,i++){
//     fruta = prompt("Ingrese una fruta.");
//     frutas.push(fruta);
// }

// alert(frutas);


// EJERCICIO 2
// Crear un array con 10 nombres de ciudades, y solicitar al usuario que nos diga un número. Mostrar el nombre de la ciudad en esa posición del array.



// let input;

// do {
//     input = parseInt(prompt("Ingrese un numero. Finalice con '0'."));
//     alert(ciudades[input - 1]);
// } while (input !== 0)

// EJERCICIO 3
// Utilizar el mismo array de ciudades, solicitar al usuario un número y remover esa cantidad de ciudades del array. Mostrar dos opciones: Sacando los datos desde el principio , y desde el final del array.

// let ciudades = ['berlin', 'new york', 'buenos aires', 'rio de janeiro', 'los angeles', 'roma', 'paris', 'praga', 'moscu', 'dehli'];

// let contador = parseInt(prompt("Ingrese un número, el programa removera esa cantidad del array"));

// for(i=0;i<contador;i++){
//     ciudades.pop(i);
// }
// alert(ciudades);

// for(i=0;i<contador;i++){
//     ciudades.shift(i);
// }

// alert(ciudades);

// EJERCICIO 4
// Crear un array de 8 posiciones con nombres de artistas musicales y mostrar:  

// let artistas = ['Justin Bieber', 'Harry Styles', 'Bob Marley', 'Dua Lipa', 'Drake', 'A$ap Rocky', 'Ed Sheeran', 'Sting', 'Michael Jackson'];

// // Su longitud
// console.log(artistas.length);

// // El último elemento.
// console.log(artistas[8]);

// // Solo las posiciones pares
// for(i=0; i<artistas.length; i++){
//     if(i%2 == 0){
//         console.log(artistas[i]);
//     }
// }

// // todos los elementos
// for(i=0; i<artistas.length; i++){
//     console.log(artistas[i]);
// }

// // todos los elementos menos el último
// for(i=0; i<artistas.length-1; i++){
//     console.log(artistas[i]);
// }

// // Todos los elementos menos el primero
// for(i=1; i<artistas.length; i++){
//     console.log(artistas[i]);
// }

// // todos los elementos separados por “*”.
// console.log(artistas.toString().replaceAll(',', '*'));

// // Solicitar al usuario un nuevo artista para reemplazar al útimo ingresado.
// let nuevoArtista = prompt('Ingrese un nuevo artista');
// console.log(artistas.push(nuevoArtista));
// console.log(artistas);


// EJERCICIO 5
// Crear un array de 8 posiciones con números enteros  y mostrar:
let numeros = [10, 5, 9, 45, 15, 2, 8, 12, 4];

// Su longitud
console.log(numeros.length);

// Solo las posiciones impares.
for(i=0; i<numeros.length; i++){
    if(i%2 == 1){
        console.log(numeros[i]);
    }
}

// Solo los NUMEROS impares.

for(i=0; i<numeros.length; i++){
    if((numeros[i] % 2) == 1){
        console.log(numeros[i]);
    }
}

// El mayor de ellos

let mayor = 0;
for(i=0; i<numeros.length; i++){
    if((numeros[i]) > mayor){
        mayor = (numeros[i]);
    }
}
console.log(mayor);

// Mostrar la mitad de elementos del array. (Pensar esto como si no supieramos la cantidad de posiciones que tiene.)

let mitad = (numeros.length) / 2;
for(i=0; i<mitad; i++){
    console.log(numeros[i]);
}

