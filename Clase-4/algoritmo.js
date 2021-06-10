let ganador = 23
let numero = parseInt(prompt("Ingrese un número del 1 al 100"));

if (isNaN(numero)){
    alert("El dato ingresado no es válido, por favor ingrese un número.");
} else if (numero>100 || numero<1) {
    alert("El número ingresado no es el correcto");
} else {
    if (numero === ganador){
        alert("Ganaste.");
    } else if (numero > ganador) {
        alert("Es mayor.");
    } else {
        alert("Es menor.");
    }
}