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

let opcion = parseInt(prompt("1.Cobrar.\n 2.Retirar dinero de la caja. \n 3.Ver balance de caja. \n 4.Ver los montos totales de todas las operaciones realizadas. \n 5.Salir"));
let total = 0;
// let preciosIndividuales = '';
let precioProducto = 0;
let metodoDePago;

// PASO 1
if (opcion === 1){
    do {
        precioProducto = parseInt(prompt("Ingrese el precio del producto. (Ingrese '0' para finalizar.)"));
        total += precioProducto;
//        preciosIndividuales = preciosIndividuales + ", " + precioProducto; 
    } while (precioProducto !== 0);
    
    metodoDePago = parseInt(prompt("El total es " + total + ". Indique el metodo de pago: \n 1) En efectivo. \n 2) Tarjeta."));
    if (total > 5000) {
        // Descuento 10%
        total = total * 0.9;
    } else if (total > 2000 && metodoDePago === 1) {
        // Descuento del 5%
        total = total * 0.95;    
    } 
    alert("El total de su cuenta es de $ " + total);
}


