// EJERCICIO 1
// Pedir nombre al usuario y saludarlo. Pasar el texto a Mayúsculas y a Minúsculas. Mostrar ambos en pantalla.

// let nombre = prompt("Ingrese su nombre.");
// console.log("Hola, " + nombre.toUpperCase());
// console.log("Hola, " + nombre.toLowerCase());


// EJERCICIO 2
// Pedir al usuario dos números y mostrar la suma y resta de ellos. Para la resta, restar siempre al más grande el más chico.

// let numero1 = parseInt(prompt("Ingrese un numero"));
// let numero2 = parseInt(prompt("Ingrese otro numero."));

// function suma(num1, num2){
//     return num1 + num2;
// }

// function resta(num1, num2){
//     if(num1>num2){
//         return num1 - num2;
//     } else{
//         return num2 - num1;
//     }
// }

// alert("El resultado de su suma es: " + suma(numero1, numero2));
// alert("El resultado de su resta es: " + resta(numero1, numero2));


// EJERCICIO 3
// Ingresar un texto. Preguntar si quiere ver el resultado en pantalla (alert) o consola (console.log). Pasar el texto a MAYUSCULA y mostrar donde corresponda.

// let texto = prompt("Ingrese un texto: ").toUpperCase();
// let resultado = parseInt(prompt("Prefiere ver el resultado en pantalla o consola? (Presione 1 o 2): \n 1) Pantalla. \n 2) Consola."));

// if(resultado===1){
//     alert(texto);
// } else if(resultado===2){
//     console.log(texto);
// } else if(isNaN(resultado)){
//     alert("Usted no ingreso un numero. Vuelva a intentar.");
// }


// EJERCICIO 4
// Calculadora. Pedir ingresar dos números. Luego ingresar una operación (SUMA/RESTA/MULTI/DIV/POTENCIA). Realizar la operación y mostrar el resultado en pantalla.

// let numero1 = parseInt(prompt("Ingrese el primer numero"));
// let numero2 = parseInt(prompt("Ingrese el segundo numero."));
// let operacion = parseInt(prompt("Indique la operacion matematica que va a realizar (Ponga un numero del 1 al 5): \n 1) Suma. \n 2) Resta. \n 3) Multiplicacion. \n 4) Division. \n 5) Potencia."));

// function suma(num1, num2){
//     return num1 + num2;
// }

// function resta(num1, num2){
//     if(num1>num2){
//         return num1 - num2;
//     } else{
//         return num2 - num1;
//     }
// }

// function multiplicacion(num1, num2){
//     return num1 * num2;
// }

// function division(num1, num2){
//     return num1 / num2;
// }

// function potencia(num1, num2){
//     let potencia = num1;
//     // num1 es la base, num2 es el exponente
//     for(i=0; i<num2-1; i++){
//         potencia = potencia * num1;
//     }
//     return potencia;    
// }

// if(operacion===1){
//     alert("El resultado de su suma es: " + suma(numero1, numero2));
// } else if(operacion===2){
//     alert("El resultado de su resta es: " + resta(numero1, numero2));
// } else if(operacion===3){
//     alert("El resultado de su multiplicacion es: " + multiplicacion(numero1, numero2));
// } else if(operacion===4){
//     alert("El resultado de su division es : " + division(numero1, numero2));
// } else if(operacion===5){
//     alert("El resultado de su potencia es: " + potencia(numero1, numero2));
// }


// EJERCICIO 5
// Vamos reutilizar la calculadora del punto 5. Pero esta vez, luego de mostrar el resultado, vamos a preguntar al usuario si desea hacer otra operación o terminar. Si quiere seguir operando, volvemos a pedir valores, operación y mostrar resultado HASTA que nos diga que no quiere continuar.
// Extra: investigar/googlear la función de Javascript "confirm"

// function suma(num1, num2){
//     return num1 + num2;
// }

// function resta(num1, num2){
//     if(num1>num2){
//         return num1 - num2;
//     } else{
//         return num2 - num1;
//     }
// }

// function multiplicacion(num1, num2){
//     return num1 * num2;
// }

// function division(num1, num2){
//     return num1 / num2;
// }

// function potencia(num1, num2){
//     let potencia = num1;
//     // num1 es la base, num2 es el exponente
//     for(i=0; i<num2-1; i++){
//         potencia = potencia * num1;
//     }
//     return potencia;    
// }

// let continuar = 'S';
// while(continuar=='S'){
//     let numero1 = parseInt(prompt("Ingrese el primer numero"));
//     let numero2 = parseInt(prompt("Ingrese el segundo numero."));
//     let operacion = parseInt(prompt("Indique la operacion matematica que va a realizar (Ponga un numero del 1 al 5): \n 1) Suma. \n 2) Resta. \n 3) Multiplicacion. \n 4) Division. \n 5) Potencia."));

//     if(operacion===1){
//         alert("El resultado de su suma es: " + suma(numero1, numero2));
//     } else if(operacion===2){
//         alert("El resultado de su resta es: " + resta(numero1, numero2));
//     } else if(operacion===3){
//         alert("El resultado de su multiplicacion es: " + multiplicacion(numero1, numero2));
//     } else if(operacion===4){
//         alert("El resultado de su division es : " + division(numero1, numero2));
//     } else if(operacion===5){
//         alert("El resultado de su potencia es: " + potencia(numero1, numero2));
//     }
//     continuar = prompt("Desea realizar otra operacion? S/N").toUpperCase();
// }


// EJERCICIO 6
// Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres de alumnos/as para el nuevo curso. Continuar guardando nombres HASTA que el usuario ingrese SALIR. Mostrar todos los nombres en pantalla.

// function alumnos(){
//     let array = [];
//     do{
//         datos = prompt("Ingrese nombre del alumno: (Presione '0' para dejar de cargar datos)");
//         array.push(datos);
//     } while (datos !== 'q')
//     array.pop();
//     return array;
// }

// alert(alumnos());


// EJERCICIO 7
// Dado el siguiente array de nombres, recorrerlo y mostrar en pantalla: Indice (posición) y Nombre con la primera letra en mayúscula.

// const ej7Nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia","homero"];

// for(i=0; i<ej7Nombres.length; i++){
//     console.log("Posicion: " + i + " / Nombre: " + ej7Nombres[i] + " / Primera letra: " + ej7Nombres[i].charAt(0).toUpperCase());
// }


// EJERCICIO 8
// Para una veterinaria. Dado el siguiente array de nombres de mascotas completar el código con las  siguentes reglas de negocio:
// - Si el nombre tiene más de 6 caracteres, informar: "Nombre largo"
// - Si tiene menos o es igual a 3 caracteres, informar: "Nombre corto"
// - Si es igual a "Fido" o "Gertrudis", informar: "Hay que vacunar contra la rabia"
// - Si es igual a "Tuerca", informar: "Entregar alimento balanceado"

// const ej8Mascotas = ["Tuerca","Ramshanaram","Perro","Gertrudis","Kat","Fido","Lo","Loko","MAX"];

// for(i=0; i<ej8Mascotas.length; i++){
//     if(ej8Mascotas[i].length-1 > 6){
//         console.log(ej8Mascotas[i] + " es nombre largo. ");
//     } else if(ej8Mascotas[i].length-1 < 3){
//         console.log(ej8Mascotas[i] + " es nombre corto.");
//     } else if(ej8Mascotas[i] == "Fido" || ej8Mascotas[i] == "Gertrudis"){
//         console.log(ej8Mascotas[i] + ", hay que vacunar contra la rabia");
//     } else if(ej8Mascotas[i] == "Tuerca"){
//         console.log(ej8Mascotas[i] + ", entregar alimento balanceado.")
//     }
// }


// EJERCICIO 9
// Un restaurant desea mejorar su sistema de reserva para mostrar a los clientes un aproximado de costos. 
// - Cada menor de edad pagará el menú $450 y cada adulto, $700. 
// - Si el grupo tiene más de 4 adultos, se hará un 10% al total de la factura. 
// Mostrar por pantalla la cantidad de comensales y el costo total a pagar. 

const ej9restaurant = [25,17,18,44,12,9,36,50]

function edad(numero){
    if(numero >= 18){
        return 700;
    } else if(numero < 18){
        return 450;
    }
}

let total=0;
