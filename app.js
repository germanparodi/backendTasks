const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello World" });
});

app.get("/suma/:num1/:num2", (req, res) => {
  let num1 = Number(req.params.num1);
  let num2 = Number(req.params.num2);
  let resultado = num1 + num2;
  res.status(200).json({ result: resultado });
});

app.get("/resta/:num1/:num2", (req, res) => {
  let num1 = Number(req.params.num1);
  let num2 = Number(req.params.num2);
  let resultado = num1 - num2;
  if (num1 <= 0 || num2 <= 0) {
    res.status(400).json({ msg: "no se puede devolver numeros negativos" });
  } else {
    res.status(200).json({ result: resultado });
  }
});

app.get("/nombre", (req, res) => {
  let name1 = req.query.name1;
  let name2 = req.query.name2;
  let resultado = name1 + " " + name2;
  res.status(200).json({ name: resultado });
});

app.listen(port, () => {
  console.log(`Example app http://localhost:${port}`);
});
