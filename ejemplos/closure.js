"use strict";

//funcion que devuelve objeto

function creaVehiculo(nombre) {
    return {
        getNombre() {
            return nombre;
        },
        setNombre(valor) {
            nombre = valor;
        },
        saluda() {
            console.log(nombre);
        },
    };
}

const coche = creaVehiculo("Opel Astra");

coche.saluda();
