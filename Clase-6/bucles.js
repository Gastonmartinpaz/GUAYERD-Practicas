// EJERCICIO 6
/*
let input = parseInt(prompt("Ingrese un numero, el algoritmo va a mostrar los numeros del 1 al numero introducido"));

for (i=1;i<=input;i++){
    console.log(i);
}
*/
// EJERCICIO 7


let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));

for (i=num1+1;i<num2;i++){
    console.log(i)
}


// EJERCICIO 8
/*
let mayor = 0;
let cantidad = parseInt(prompt("Ingrese la cantidad de numeros."));
let numero;
​
for(i=0;i<cantidad;i++){
    numero = parseInt(prompt("Ingrese un numero."));
    if (numero>mayor){
        mayor = numero;
    }
}
​
alert(mayor); 
*/

// EJERCICIO 9

/*
let menor = 0;
let cantidad = parseInt(prompt("Ingrese la cantidad de numeros."));
let numero;

for(i=0;i<cantidad;i++){
    numero = parseInt(prompt("Ingrese un numero."));
    if (numero<menor){
        menor = numero;
    }
}

alert(menor);
*/

let menor = numero
let cantidad = parseInt(prompt("Ingrese la cantidad de numeros."));
let numero;
i = 0;

do {
    i = i + 1;
    numero = parseInt(prompt("Ingrese un numero."));
    if (numero<menor){
        menor = numero;
    }
} while (i < cantidad);

alert(menor);
 
// EJERCICIO 10





