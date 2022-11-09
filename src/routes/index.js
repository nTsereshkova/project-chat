const routes = require("express").Router();
const authRoutes = require("./auth");

routes.use("/api", authRoutes);

// routes.use(isAuthorized); - middleware по авторизации

module.exports = routes;
