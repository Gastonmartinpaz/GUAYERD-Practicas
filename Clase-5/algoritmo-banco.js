let nomUsuario = "admin";
let passwordUsuario = 1234;
let saldo = 30000;

let usuario = prompt("Ingrese su usuario.");
let password = prompt("Ingrese su contraseña");

if (usuario === nomUsuario && passwordUsuario === passwordUsuario) {
    alert("Bienvenido/a al banco Supervielle.");
}  else {
    alert("Usuario o contraseña incorrecto. Intente nuevamente.");
}

let operacionBanco = parseInt(prompt("Ingrese un numero para realizar alguna de las siguientes operaciones: \n 1) Ver saldo actual. \n 2) Retirar dinero. \n 3) Depositar dinero en su cuenta. \n 4) Cambiar su clave."));
let retirarMonto = 0;
let depositarMonto = 0;
let nuevoPassword = 0;

if (operacionBanco === 1) {
    alert("Tu saldo actual es de $" + saldo);
} else if (operacionBanco === 2) {
    retirarMonto = parseInt(prompt("Ingrese un monto a retirar"));
    saldo = saldo - retirarMonto;

    if (retirarMonto > saldo) {
        alert("El saldo ingresado a retirar es mayor que su saldo disponible.");
    } 
    else {
        alert("Su saldo actual es de $ " + saldo);
    }   

} else if (operacionBanco === 3) {
    depositarMonto = parseInt(prompt("Ingrese un monto a depositar"));
    saldo = saldo + depositarMonto;
    alert("Su nuevo saldo es de $ " + saldo);

} else if (operacionBanco === 4) {
    nuevoPassword = prompt("Ingrese una nueva contraseña.");
    passwordUsuario = nuevoPassword;
    alert("Su nueva contraseña es " + passwordUsuario);
}






