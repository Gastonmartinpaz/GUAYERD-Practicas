/*
Diseñar un sistema para una tienda donde el menú ofrezca las siguientes opciones:
1.Cobrar
2.Retirar dinero de la caja
3.Ver balance de caja
4.Ver los montos totales de todas las operaciones realizadas
(Ej: 2500,120,340). etc. 
5.Salir

1): Debemos ingresar los precios de cada uno de los objetos que el cliente fue comprando, uno por uno hasta que se avise que finalizó la carga. 
Preguntar si abona con tarjeta o efectivo. Si la compra supera los $2000 y paga en efectivo, realizar un descuento del 5%. Si la compra supera los $5000, 
realizar un descuento del 10% con ambos medios de pago. Mostrar el total de la cuenta. Si paga en efectivo, consultar con cuánto paga y avisar cuál es el vuelto que 
se le debe otorgar.
2) Si el monto que se solicita retirar es menor al monto que hay disponible en caja (pagos en efectivo), realizar la operación.
3) Ver cuánto se pagó en tarjeta y cuánto se pagó en efectivo.
4) Mostrar todos los montos de las operaciones (DE COMPRA, no retiros), tanto en tarjeta como en efectivo.
5) Finaliza el programa.

*/

let total = 0;
let precioProducto = 0;
let metodoDePago;
let vuelto;
let retiro; 
let pagoEnEfectivo = 0;
let pagoConTarjeta = 0;
let opcion;
let opcionesCaja;
let totalCaja = 0;
let totalProductos = 0;

while (opcion !== 5){
    opcion = parseInt(prompt("1.Cobrar.\n 2.Retirar dinero de la caja. \n 3.Ver balance de caja. \n 4.Ver los montos totales de todas las operaciones realizadas. \n 5.Salir"));


    if (opcion === 1){
        do {
            precioProducto = parseInt(prompt("Ingrese el precio del producto. (Ingrese '0' para finalizar.)"));
            total += precioProducto;
        } while (precioProducto !== 0);

        totalProductos = total;
        metodoDePago = parseInt(prompt("El total es $" + totalProductos + ". Indique el metodo de pago: \n 1) En efectivo. \n 2) Tarjeta."));
        if (metodoDePago === 1 && totalProductos > 2000){
            // Descuento 5%
            totalProductos = totalProductos * 0.95;
        } else if (total > 5000){
            // Descuento 10%
            totalProductos = totalProductos * 0.9;
        }
        alert("El total de su cuenta es de $" + totalProductos);

        if (metodoDePago === 1){ // Para guardar en la variable pagoEnEfectivo lo que se pago en efectivo
            pagoEnEfectivo = totalProductos;
            vuelto = parseInt(prompt("Usted va a abonar en efectivo. Ingrese con cuanto dinero va a abonar: "));
            vuelto = vuelto - pagoEnEfectivo;
            alert("Su vuelto es de $" + vuelto);
        }

        if (metodoDePago === 2){ // Para guardar en la variable PagoConTarjeta lo que se pago con tarjeta
            pagoConTarjeta = totalProductos; 
        }
    }

    if (opcion === 2){
        retiro = parseInt(prompt("Ingrese un monto a retirar: "));
        if (retiro <= pagoEnEfectivo){
            pagoEnEfectivo = pagoEnEfectivo - retiro // Para que se actualice la caja en efectivo con el retiro de dinero
            alert("Usted retiro exitosamente $" + retiro);
        } else if (retiro > pagoEnEfectivo) {
            alert("El monto a retirar es mayor al que tenemos disponible en caja.");
        } else if (isNaN(retiro)){
            alert("Error. Ingrese un monto a retirar en numeros: ");
        }
    }

    if (opcion === 3){
        opcionesCaja = parseInt(prompt("1) Ver cuanto se pago en efectivo. \n 2) Ver cuanto se pago con tarjetas."));
        if (opcionesCaja === 1){
            alert("En efectivo se abono la cantidad de $" + pagoEnEfectivo);
        } else if (opcionesCaja === 2){
            alert("En tarjeta se abono la cantidad de $" + pagoConTarjeta);
        } else {
            alert("Ingrese una opcion valida. ")
        }
    }

    if (opcion === 4){
        totalCaja = pagoConTarjeta + pagoEnEfectivo;
        alert("El monto de todas las operaciones realizadas es de $" + totalCaja);
    }

    if (isNaN(opcion)){
        alert("Por favor, ingrese una opción valida.");
    }
}
