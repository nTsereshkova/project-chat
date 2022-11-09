const express = require("express");
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

// устанавливаем заголовки
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization,Connection"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});
app.use(routes);

// обработчик ошибок
// страница не найдена

const start = async () => {
  //await mongoose.connect("mongodb://localhost:27017/myChat");
  app.listen(5000, () => console.log("server started on port ", 5000));
};

start();
