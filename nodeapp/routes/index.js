var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.locals.codigo = "<script>alert('mensaje de alerta')</<script>";
  res.locals.usuarios = [
    { nombre: "Jones", edad: 34 },
    { nombre: "Mario", edad: 40 },
  ];

  const ahora = new Date();
  res.render("index", {
    segundoActual: ahora.getSeconds(),
    color: "rojo",
    estado: ahora.getSeconds() % 2 === 0,
  });
});

//recibiendo parámetros en la ruta

router.get("/parametro-en-ruta/:numero", (req, res, next) => {
  const numero = req.params.numero;
  res.send("He recibido " + numero);
});

router.get("/parametro-opcional/:talla?", (req, res, next) => {
  const laTallaRecibida = req.params.talla;
  res.send("La talla recibida es " + laTallaRecibida);
});

router.get("/piso/:piso/puerta/:puerta", (req, res, next) => {
  console.log(req.params);
  res.send("ok");
});

router.get("/en-query-string", (req, res, next) => {
  const orderBy = req.query.orderby;
  const numero = req.query.solo;
  res.send("Ordenar por " + orderBy + " sacar solo " + numero);
});

router.post("/en-el-body", (req, res, next) => {
  console.log(req.body);
  res.send("ok");
});

module.exports = router;
