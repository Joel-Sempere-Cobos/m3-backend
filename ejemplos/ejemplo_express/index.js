"use strict";

//cargar librería expres
const express = require("express");

// crear aplicación

const app = express();

//crear ruta
app.use((req, res, next) => {
    console.log("He recibido una petición de tipo", req.method, "a", req.path);
    next();
});

app.get("/", (req, res, next) => {
    if (true) {
        error = new Error("El servidor está caído");
        next(error);
        return;
    }
    res.send("hola");
});

app.get("/pedidos", (req, res, next) => {
    res.send("hola desde pedidos");
});

app.use((err, req, res, next) => {
    res.send("Ocurrió un error: " + err.message);
});

//arrancar la aplicación

app.listen(8080, () => {
    console.log("Servidor http arrancado en http://localhost:8080");
});
