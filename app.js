const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const { dbConnection } = require("./db/db");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api", apiRouter);
dbConnection();

module.exports = app;

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

app.get("/name", (req, res) => {
  let name1 = req.query.name1;
  let name2 = req.query.name2;
  let resultado = name1 + " " + name2;
  res.status(200).json({ name: resultado });
});

app.get("/myname", (req, res) => {
  let name = req.query.name;
  let lastName = req.query.last;
  res.status(200).json({ msg: `My name is ${name} ${lastName}` });
});

app.listen(port, () => {
  console.log(`Example app http://localhost:${port}`);
});
