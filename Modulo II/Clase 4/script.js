// EJERCICIO 1
// Crear un botón que al hacerle click, muestre un saludo por alert.
const saludo = () => alert("Esto es un saludo");

// EJERCICIO 2
// Crear un botón que al hacerle click, muestre un mensaje en el HTML.
const mensaje = () => document.write('<p>Esto es un mensaje</p>')

// EJERCICIO 3
// Crear un botón que al hacerle click cambie de color.

// const cambioBoton = () => this.style.backgroundColor = "green";
// document.querySelectorAll('.estiloboton').forEach(e => e.addEventListener('click', cambioBoton));

document.querySelectorAll('.estiloboton').forEach(e => e.addEventListener('click', function(){
    this.style.backgroundColor = "green";
}));

// EJERCICIO 4
// Crear 5 botones numerados del 1 al 5. Al hacer click en uno y mostrar un mensaje que diga “Haz clickeado el botón $número”, indicando al usuario cuál botón apretó.

const boton = (id) => document.querySelector(`#${id}`).innerHTML = `Haz clickeado el ${id}`

let contador = 1
for(i=0; i<5; i++){
    document.write(`<button onclick="boton(id)" id="boton${contador}">Boton numero ${contador}</button>`)  
    contador = contador + 1;
}

// EJERCICIO 5
// Crear un input y un botón. Dentro del input el usuario debe ingresar un color y al hacre click, el input se pone de ese color y se genera un mensaje indicando el color elegido.

// EJERCICIO 6
// Crear dos input tipo número y un botón. 
// a) Al hacer foco en un input se debe poner azul.
// b) Al escribir, se debe poner violeta.
// c) Cuando se le saca el foco, se pone verde.
// d) Al hacer click en el boton genera un nuevo párrafo en el html que muestra la suma de ambos

// a
const focus = () => {
    document.querySelector('input').classList.add('blue');
}

// b
const escribir = () => {
    document.querySelector('input').classList.add('violeta');
}

// c
const blur = () => {
    document.querySelector('input').classList.add('green');
}

// d
const suma = () => {
    let num1 = parseInt(document.querySelector('#num1').value);
    let num2 = parseInt(document.querySelector('#num2').value);

    let resultado = num1 + num2;
    document.write(`<p>${resultado}</p>`)
}

