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

while (opcion !== 5){
    opcion = parseInt(prompt("1.Cobrar.\n 2.Retirar dinero de la caja. \n 3.Ver balance de caja. \n 4.Ver los montos totales de todas las operaciones realizadas. \n 5.Salir"));

// PASO 1
    if (opcion === 1){
        do {
            precioProducto = parseInt(prompt("Ingrese el precio del producto. (Ingrese '0' para finalizar.)"));
            total += precioProducto;
        } while (precioProducto !== 0);

        
        metodoDePago = parseInt(prompt("El total es $" + total + ". Indique el metodo de pago: \n 1) En efectivo. \n 2) Tarjeta."));
        if (metodoDePago === 1 && total > 2000){
            // Descuento 5%
            total = total * 0.95;
        } else if (total > 5000){
            // Descuento 10%
            total = total * 0.9;
        }
        alert("El total de su cuenta es de $" + total);

        if (metodoDePago === 1){
            pagoEnEfectivo = total;
            vuelto = parseInt(prompt("Usted va a abonar en efectivo. Ingrese con cuanto dinero va a abonar: "));
            vuelto = vuelto - pagoEnEfectivo;
            alert("Su vuelto es de $" + vuelto);
        }

        if (metodoDePago === 2){
            pagoConTarjeta = total; 
        }
    }

    if (opcion === 2){
        retiro = parseInt(prompt("Ingrese un monto a retirar: "));
        if (retiro <= pagoEnEfectivo){
            pagoEnEfectivo = pagoEnEfectivo - retiro
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