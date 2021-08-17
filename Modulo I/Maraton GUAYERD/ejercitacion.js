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

// function resultado(numero){
//     if(numero===1){
//         alert("El resultado de su suma es: " + suma(numero1, numero2));
//     } else if(numero===2){
//         alert("El resultado de su resta es: " + resta(numero1, numero2));
//     } else if(numero===3){
//         alert("El resultado de su multiplicacion es: " + multiplicacion(numero1, numero2));
//     } else if(numero===4){
//         alert("El resultado de su division es : " + division(numero1, numero2));
//     } else if(numero===5){
//         alert("El resultado de su potencia es: " + potencia(numero1, numero2));
//     }
// }

// resultado(operacion);


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
//         datos = prompt("Ingrese nombre del alumno: (Presione 'q' para dejar de cargar datos)");
//         array.push(datos);
//     } while (datos != 'q')
//     array.pop();
//     return array;
// }

// alert(alumnos());


// EJERCICIO 7
// Dado el siguiente array de nombres, recorrerlo y mostrar en pantalla: Indice (posición) y Nombre con la primera letra en mayúscula.

// const ej7Nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia","homero"];

// for(i=0; i<ej7Nombres.length; i++){
//     console.log("Posicion: " + i + " / Nombre: " + ej7Nombres[i] + " / Primera letra mayúscula: " + ej7Nombres[i].charAt(0).toUpperCase() + ej7Nombres[i].slice(1));
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

// const ej9restaurant = [25,17,18,44,12,9,36,50]
// const menuAdulto = 700;
// const menuMenor = 450;

// function edad(numero){
//     if(numero >= 18){
//         return menuAdulto;
//     } else if(numero < 18){
//         return menuMenor;
//     }
// }

// let total=0;
// let mayor=[]; // array mayor para despues comparar y ver cuantos mayores hay
// for(i=0; i<ej9restaurant.length; i++){
//     total = edad(ej9restaurant[i]) + total; // contador usando la function edad, si es mayor se aplica $700 y si es mejor $450
//     if(ej9restaurant[i] >= 18){
//         mayor.push(ej9restaurant[i]); // recorriendo el array original, si un numero es mayor a 18, guarda ese valor en el array 'mayor'.
//     }
// }

// if(mayor.length > 4){
//     alert("Como son más de 4 comensales adultos, les corresponde descuento del 10%")
//     total = total * 0.9;
// }

// alert("Cantidad de comensales: " + ej9restaurant.length + "\nEl total de la factura es de: $" + total);


// EJERCICIO 10
// De un consultorio médico nos piden automatizar el proceso de recepción de los pacientes. 
//   Para ello:
//   - Ingresar código de paciente (Number XXX, 3 dígitos de 1 a 999).
//   - Si el código ingresado esta entre 1 y 99, es un paciente VIP.
//     - Preguntarles "Como valoran la calidad del servicio? (1..10)". Guardar el resultado ingresado.
//     - Agregar el código de paciente adelante en la cola (array) de turnos
//   - Si el código ingresado esta entre 100 y 500, es un paciente de prepaga.
//     - Agregar el código de paciente al final de la cola (array) de turnos
//   - Si el código ingresado esta entre 501 y 999, es un paciente nuevo.
//     - Preguntarles "Desea pasarse a VIP?". Si la respuesta es afirmativa, guardar el código de paciente.
//     - Agregar el código de paciente al final de la cola (array) de turnos
    
//   - Si todos los pacientes fueron ingresados, informar en pantalla:
//     - Calidad del servicio VIP. Informar valor promedio, valor máximo y valor mínimo.
//     - Ingreso al consultorio: Mostrar en pantalla el orden de ingreso x código de paciente.
//     - Pasarse a VIP: Mostrar en pantalla todos los códigos de pacientes que desean ser VIP

let turnos = [];
let servicio = [];
let vip = [];

function recepcion(){
    seguir = true;
    while(seguir){
        let codigo = parseInt(prompt("Ingresar codigo de paciente (Del '1' al '999')"));
        if(codigo >= 1 && codigo <= 99){
            alert("Es paciente VIP");
            let calidadServicio = parseInt(prompt("Como valora la calidad del servicio? (Del 1 al 10)"));
            servicio.push(calidadServicio);
            turnos.unshift(codigo);
        } else if(codigo >= 100 && codigo <= 500){
            alert("Es paciente de prepaga");
            turnos.push(codigo);
        } else if(codigo >= 501 && codigo <= 999){
            alert("Es paciente nuevo");
            let preguntaVip = prompt("Desea pasarse a VIP? Teclear S/N").toUpperCase();
                if(preguntaVip == 'S'){
                    vip.push(codigo);
                }
            turnos.push(codigo);
        } else{
            alert("Ingrese un codigo de paciente valido.");
        }

        seguir = confirm("Desea ingresar otro paciente?");
    }
}

function promedio(serv){
    let total = 0;
    for(i=0; i<serv.length; i++){
        total = (serv[i]) + total;
    }
    prom = total / serv.length;
    console.log("El promedio del servicio es de " + prom);

    let max = 0;
    for(i=0; i<serv.length; i++){
        if((serv[i]) > max){
            max = (serv[i]);
        } 
    }
    console.log("El valor máximo es " + max);

    let min = 10;
    for(i=0; i<serv.length; i++){
        if((serv[i]) < min){
            min = (serv[i]);
        }
    }
    console.log("El valor minimo es " + min);
}

function ingreso(turn){
    alert("Orden de ingreso de pacientes: " + turn);
}

function codigosPac(pacVip){
    alert("Los pacientes que quieren ser VIP son: " + pacVip);
}

recepcion();
promedio(servicio);
ingreso(turnos);
codigosPac(vip);
