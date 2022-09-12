"use strict";

//crear una función para usarla como constructor de objetos

function Fruta(nombre) {
    this.nombre = nombre;
    this.saluda = function () {
        console.log(`hola, soy ${this.nombre} `);
    };
}

//crear un objeto con la función constructora de objetos

const limon = new Fruta("limon");
const naranja = new Fruta("naranja");

setTimeout(limon.saluda.bind(limon), 2000);

const funcion = limon.saluda.call(naranja);
