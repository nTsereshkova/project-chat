import express from "express"
import authRoutes from "./auth";
import userRoutes from "./userInfo"
import isAuthorized from "../middleware/isAuthorized";


const routes = express.Router();

routes.use("/api", authRoutes);

routes.use(isAuthorized);// middleware по авторизации, дальше все роуты только с токеном 

routes.use("/api", userRoutes)



export default routes 
