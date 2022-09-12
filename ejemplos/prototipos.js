"use strict";

function Persona(nombre) {
    this.nombre = nombre;
}

const luis = new Persona("Luis");
const pepe = new Persona("Pepe");

//añadir propiedades al propotipo, así en memoria solo gasta una vez y no una para cada objeto.

Persona.prototype.saluda = function () {
    console.log("Hola, soy", this.nombre);
};

luis.saluda();
pepe.saluda();

//Herencia simple

function Agente(nombre) {
    Persona.call(this, nombre);
}

Agente.prototype = Object.create(Persona.prototype);
Agente.prototype.constructor = Agente;

const brown = new Agente("Brown");

brown.saluda();

// Herencia múltiple

function Superheroe() {
    this.vuela = function () {
        console.log(this.nombre, "vuela");
    };
    this.esquivaBalas = function () {
        console.log(this.nombre, "esquiva balas");
    };
}

Object.assign(Agente.prototype, new Superheroe());
brown.vuela();
brown.esquivaBalas();
