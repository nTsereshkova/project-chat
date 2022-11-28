import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import config from "config";
import routes from "./routes/index";
import  { errorHandler, pageNotFound } from "./middleware/errorHandler";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port: number = config.get("port");
const mongoUrl: string = config.get("mongoUrl");

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

app.use(errorHandler);

app.use("/", pageNotFound);


const start = async () => {
  await mongoose.connect(mongoUrl);
  app.listen(port, () => console.log("server started on port ", port));
};

start();
