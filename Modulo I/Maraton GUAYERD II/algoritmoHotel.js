// Primero pensar el algoritmo y luego codear.


// Un hotel recibe huéspedes durante el día, y necesita que el recepcionista haga el ingreso a las habitaciones. Cada cliente que entre, se le asignará un número de habitación consecutivamente (Es decir: el primero tendrá la habitación 1, el segundo el 2, y así sucesivamente). 

// El sistema deberá pedir datos huéspedes hasta que el recepcionista desee finalizar la carga. En la carga se guarda por habitación UN solo nombre, de quien realiza la reserva, no de todas las personas alojadas. 

// La carga se realizará de la siguiente manera: 

// 	El cliente deberá darle su: Nombre,tipo de habitación y número de días de estancia. Se le brinda el valor a abonar en base :
// -Valor por noche por de habitación:
// * Standard: $2500
// * Doble: $3300
// * Triple: $4300
// * Suite: $7250
// -Si tiene más de 5 noches, se realiza un 10% de descuento.
// -Si es Standard, se le pregunta si quiere desayuno. Tiene un costo adicional de $90 por noche. 


// Al finalizar la carga, nos mostrará un reporte automático con: 

// * La facturación total, es decir el monto total pagado por todos los huespedes. 
// * Un listado con los nombres de todos los huespedes alojados (quienes reservaron).
// * Listado de habitaciones ocupadas.


// Al finalizar agregar un readme con el algoritmo y una breve explicación.




function recepcion() {
    let tipoHabitacion;
    let nombre;
    let confirmar = true;

    while(confirmar){
        nombre = prompt("Ingrese el nombre del huesped:");
        tipoHabitacion = prompt("Ingrese el tipo de habitación que desea: \n1-Standard: $2500 \n2-Doble: $3300 \n3-Triple: $4300 \n4-Suite: $7250");
        confirmar = confirm("¿Desea ingresar otro huesped?");     
    }   
}

recepcion();


