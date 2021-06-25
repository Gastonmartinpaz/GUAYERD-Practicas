let saldo = 30000;
let usuario;
let password;


while (usuario !== "admin" && password !== 1234){
    usuario = prompt("Ingrese su usuario.");
    password = prompt("Ingrese su contraseña");
    alert("Usuario o contraseña incorrecto. Intente nuevamente.");
}
alert("Bienvenido/a al banco Supervielle.");

let operacionBanco;
while (operacionBanco !== 5){
    operacionBanco = parseInt(prompt("Ingrese un numero para realizar alguna de las siguientes operaciones: \n 1) Ver saldo actual. \n 2) Retirar dinero. \n 3) Depositar dinero en su cuenta. \n 4) Cambiar su clave. \n 5) Salir."));
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
}
    






