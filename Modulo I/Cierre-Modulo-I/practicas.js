// EJERCICIO 2
// La Corte Suprema de Justicia llegó a tener tantos casos para resolver, que decidió implementar un sistema automatizado que otorgue las penas en base a diferentes criterios:
// - Homicidio: 20 años, Robo: 10 años, Evasión de impuestos: 8 años.
// - Si es reincidente, es decir, no es la primera vez que comete un crimen, resta 5 años a la pena asignada.
// - Si el homicidio es agravado por vínculo, es cadena perpetua. 

// Las opciones de input pueden ser:
// - Generar un array y que lo recorra indicando la pena de cada posición.
// - Que vaya preguntando uno por uno hasta que el operador decida Salir.

// Aplicaremos: Anidación de IF + Array o Ciclos

// Años de prision en orden: Homicidio (20 años), Robo (10 años) y Evasión de impuestos (8 años).

const homicidio = 20;
const robo = 10;
const evasionImpuestos = 8;
let sumaDePena = [];
let seguir = true;

alert("Bienvenido al sistema de otorgación de penas.")
while(seguir){   
    let penasDePrision = parseInt(prompt("Ingrese el delito que cometio la persona: \n1) Homicidio. \n2) Robo. \n3) Evasión de impuestos."));
    if(penasDePrision ===  1){
        let homicidioAgravado = confirm("Es homicidio agravado por vinculo?");
        if(homicidioAgravado){
            alert("Le corresponde cadena perpetua");
            break;
        } else{
            sumaDePena.push(homicidio);
        }
    } else if(penasDePrision === 2){
        sumaDePena.push(robo);
    } else if(penasDePrision === 3){
        sumaDePena.push(evasionImpuestos);
    } else {
        alert("Ingrese un valor válido.");
    }
    seguir = confirm("Desea ingresar otro delito?");
}

if(sumaDePena.length < 2){
    alert("La pena para el acusado es de " + sumaDePena + " años");
} else{
    let total = (sumaDePena[0]);
    for(i=1; i<sumaDePena.length; i++){
        total = total + ((sumaDePena[i]) - 5);  
    }
    alert("La pena para el acusado reincidente es de " + total + " años");
}


// EJERCICIO 3

// let globos = ['jirafa', 'elefante', 'perro', 'gato', 'ardilla', 'pato', 'leon', 'serpiente', 'rana', 'pájaro', 'camello'];
// let fila1 = ['Santino', 'Micaela', 'Rebeca', 'Ariel', 'Patricia'];
// let fila2 = ['Claudia', 'Marcelo', 'Gervasio', 'Beatriz', 'Carmen'];

// let globosFila1 = '';
// let globosFila2 = '';

// for(i = 0; i<globos.length; i++){
//     globosFila1 = ((fila1[i]) + ' recibe ' + (globos[i]));
//     globosFila2 = ((fila2[i]) + ' recibe ' + (globos[i + 1]));
//     console.log(globosFila1);
//     console.log(globosFila2) 
// }


// EJERCICIO 1



