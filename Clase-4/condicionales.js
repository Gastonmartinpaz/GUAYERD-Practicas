// EJERCICIO 1


let metro = parseInt(prompt("Ingrese una medida en metros."));
const pie = 3.28084
const centimetro = 100
const pulgadas = 39.3701

if (isNaN(metro)){
    alert("El dato ingresado no es válido. Ingrese un número");
} else {  
    console.log(metro + " metros" + " es igual a " + metro*pie + " pies."); 
    console.log(metro + " metros" + " es igual a " + metro*centimetro + " centimetros.");
    console.log(metro + " metros" + " es igual a " + metro*pulgadas + " pulgadas.");
}


// EJERCICIO 2


let edadDeUsuario = parseInt(prompt("Ingrese su edad actual."));

if (edadDeUsuario < 18) {
    console.log("Sos menor de edad.");
} else {
    console.log("Sos mayor de edad.");
}


// EJERCICIO 3


let saboresHelado = prompt("Ingrese sus gustos de helados.").toLowerCase();
let validacionUsuario = prompt("Quiere cobertura de chocolate?").toLowerCase();

if (validacionUsuario === "si") {
    alert("Su helado sabor " + saboresHelado + " con cobertura de chocolate cuesta $180.");
} else if (validacionUsuario === "no") {
    alert("Su helado sabor " + saboresHelado + " cuesta $150.");
} else {
    alert("Por favor, ingrese una respuesta válida.");
}


// EJERCICIO 4


let num1 = parseFloat(prompt("Ingrese el primer número"));
let num2 = parseFloat(prompt("Ingrese el segundo número"));
let suma = num1 + num2
console.log("El resultado de la suma es " + suma);

if (suma % 2 === 0) {
    console.log("Su número es par.");
} else {
    console.log("Su número es impar.");
}


// EJERCICIO 5


let numero = parseInt(prompt("Ingrese un número."));

if (numero >= 1) {
    alert("El número es positivo.");
} else if (numero <= -1) {
    alert("El número es negativo.");
} else if (numero === 0) {
    alert("El número es 0");
}


// EJERCICIO 6

let montoUsuario = parseInt(prompt("Ingrese un monto."));
let formulaDescuento = (montoUsuario / 1.10)

if (montoUsuario > 2000) {
    alert("Felicidades, usted tiene un descuento. Total a pagar: $" + parseInt(formulaDescuento));
} else {
    alert("Usted no posee descuento. Total a pagar: $" + montoUsuario);
}

// EJERCICIO 7

let texto = prompt("Ingrese un texto.");
let posicion = parseInt(prompt("Ingrese una posicion en numero."));

if (posicion == "A" || posicion == "E" || posicion == "I" || posicion == "O" || posicion == "U") {
    alert("Es una vocal");
} else {
    alert("No es una vocal");
}

// EJERCICIO 8

let nota = parseInt(prompt("Ingrese una nota del 1 al 10"));

if (nota >= 1 && nota <= 3) {
    alert("APLAZADO.");
} else if (nota >= 4 && nota <= 5) {
    alert("REPROBADO.");
} else if (nota >= 6 && nota <= 10) {
    alert("APROBADO.");
} else {
    alert("Ingrese una nota valida.");
}

// EJERCICIO 9

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));

if (num1 > num2) {
    alert(num1 + " es mayor a " + num2);
} else if (num1 === num2) {
    alert("Son iguales");
} else {
    alert(num2 + " es mayor a " + num1);
}

// EJERCICIO 10

/* Tienen 31 días: Enero, marzo, mayo, julio, agosto, 
octubre y diciembre. Tienen 30 días: Abril, junio, 
septiembre y noviembre. Tienen 28 días: Febrero.
*/

let mesDelAnio = parseInt(prompt("Ingrese un mes del año del 1 al 12"));

if (mesDelAnio === 1 || mesDelAnio === 3 || mesDelAnio === 5 || mesDelAnio === 7 || mesDelAnio === 8 || mesDelAnio === 10 || mesDelAnio === 12) {
    alert("El mes seleccionado tiene 31 dias.");
} else if (mesDelAnio === 4 || mesDelAnio === 6 || mesDelAnio === 9 || mesDelAnio === 11) {
    alert("Ël mes seleccionado tiene 30 dias");
} else if (mesDelAnio === 2) {
    alert("Febrero tiene 28 dias");
} else {
    alert("Ingrese un mes valido.");
}


// EJERCICIO 11

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));
let num3 = parseInt(prompt("Ingrese otro numero"));

if (num1 > num2 && num1 > num3) {
    alert(num1 + " es el mayor.");
} else if (num2 > num1 && num2 > num3) {
    alert(num2 + " es el mayor.");
} else if (num3 > num1 && num3 > num2) {
    alert(num3 + " es el mayor.");
} else if (num1 === num2 && num1 === num3) {
    alert("Son los tres numeros iguales.");
}

// EJERCICIO 12

let edadUsuario = parseInt(prompt("Ingrese su edad."));
let bebidaUsuario = prompt("Ingrese una bebida (Cerveza, jugo o agua.");

const cerveza = 50;
const agua = 20;
const jugo = 35;
let costo = 0;
let dineroUsuario

if (edadUsuario < 18 && bebidaUsuario == "cerveza") {
    alert("Usted es menor de edad, no puede beber alcohol.")

} else if (edadUsuario >= 18) { 
    if (bebidaUsuario == "cerveza") {
        alert("El costo de su bebida es de $50")
        costo = cerveza
        dineroUsuario = parseInt(prompt("Con cuanto va a abonar?"));
        if (dineroUsuario < costo) {
            alert("Usted no tiene dinero para pagar la bebida.");
        } else {
            costo = dineroUsuario - cerveza
            alert("Su vuelto es de $" + costo);
        }
    }

    if (bebidaUsuario == "agua") {
        alert("El costo de su bebida es de $20")
        costo = agua
        dineroUsuario = parseInt(prompt("Con cuanto va a abonar?"));
        if (dineroUsuario < costo) {
            alert("Usted no tiene dinero para pagar la bebida.");
        } else {
            costo = dineroUsuario - agua
            alert("Su vuelto es de $" + costo);
        }
    }

    if (bebidaUsuario == "jugo") {
        alert("El costo de su bebida es de $35")
        costo = jugo
        dineroUsuario = parseInt(prompt("Con cuanto va a abonar?"));
        if (dineroUsuario < costo) {
            alert("Usted no tiene dinero para pagar la bebida.");
        } else {
            costo = dineroUsuario - jugo
            alert("Su vuelto es de $" + costo);
        }
    }

} 

// EJERCICIO 13

let mes = parseInt(prompt("Ingrese un mes del año en numero."));

switch (mes) {
    case 1:
        alert("Enero")
        break;

    case 2:
        alert("Febrero")
        break;

    case 3:
        alert("Marzo")
        break;

    case 4:
        alert("Abril")
        break;

    case 5:
        alert("Mayo")
        break;

    case 6:
        alert("Junio")
        break;

    case 7:
        alert("Julio")
        break;

    case 8:
        alert("Agosto")
        break;

    case 9:
        alert("Septiembre")
        break;

    case 10:
        alert("Octubre")
        break;

    case 11:
        alert("Noviembre")
        break;

    case 12:
        alert("Diciembre")
        break;

    default:
        alert("Por favor, ingrese un numero del 1 al 12")
        break;
}