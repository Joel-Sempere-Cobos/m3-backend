const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  const agentes = [
    { name: "Johnes", age: 36 },
    { name: "Mario", age: 40 },
  ];
  res.json({ results: agentes });
});

module.exports = router;
