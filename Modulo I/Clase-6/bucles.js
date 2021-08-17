// EJERCICIO 6
/*
let input = parseInt(prompt("Ingrese un numero, el algoritmo va a mostrar los numeros del 1 al numero introducido"));

for (i=1;i<=input;i++){
    console.log(i);
}
*/
// EJERCICIO 7


// let num1 = parseInt(prompt("Ingrese un numero"));
// let num2 = parseInt(prompt("Ingrese otro numero"));

// for (i=num1+1;i<num2;i++){
//     console.log(i)
// }


// EJERCICIO 8
/*
let mayor = 0;
let cantidad = parseInt(prompt("Ingrese la cantidad de numeros."));
let numero;
​
for(i=0;i<cantidad;i++){
    numero = parseInt(prompt("Ingrese un numero."));
    if (numero>mayor){
        mayor = numero;
    }
}
​
alert(mayor); 
*/

// EJERCICIO 9


// let menor = 100;
// let cantidad = parseInt(prompt("Ingrese la cantidad de numeros."));
// let numero;

// for(i=0;i<cantidad;i++){
//     numero = parseInt(prompt("Ingrese un numero."));
//     if (numero<menor){
//         menor = numero;
//     }
// }

// alert("El numero menor es " + menor);


// EJERCICIO 10

// let numeroUsuario = parseInt(prompt("Ingrese un numero, el programa le mostrara la cantidad de asteriscos qué indique en el número."));
// let asterisco = '';

// for(i=0; i<numeroUsuario; i++){
//     asterisco += "*"
// }

// alert(asterisco);


// EJERCICIO 11

// let base = parseInt(prompt("Ingrese la 'base'."));
// let exponente = parseInt(prompt("Ingrese el 'exponente'."));
// let potencia = base; 

// for(i=0; i<exponente-1; i++){
//     potencia = potencia * base;
// }

// alert("El calculo de la potencia es: " + potencia);


// EJERCICIO 12

// let numero = parseInt(prompt("Ingrese un numero y se calculara su factorial: "));
// let factorial = 1;

// for(i=1; i<=numero; i++){
//     factorial = factorial * i;
// }

// alert("El resultado de su factorial es de: " + factorial);


// EJERCICIO 13

// let numero = parseInt(prompt("Ingrese un numero."));

// for(i=0; i>=0; i--){
//     if(numero % i === 0){
//         console.log(i);
//     }
// }

// for(i=0; i<=numero; i++){
//     if(numero % i === 0){
//         console.log(i);
//     }
// }

// EJERCICIO 14

// let numero = parseInt(prompt("Ingrese un numero: "));
// let cadena = prompt("Ingrese una frase: ");

// for(i=0; i<numero; i++){
//     console.log(cadena.charAt(i).toUpperCase());
// }

// EJERCICIO 15

// let listaSupermercado = prompt("Ingrese productos: ");
// alert(listaSupermercado.split(" "));


// EJERCICIO 16

let numero = 0;

do {
    numero = parseInt(prompt("Ingrese un numero: "));
    console.log(numero);
} while (numero % 3 !== 0);

