import express from "express";
import mongoose from "mongoose";
import router from "./routes/client.js";
import routerm from "./routes/message.js";
import routero from "./routes/orthesis.js";
import routerr from "./routes/reservation.js";
import routerc from "./routes/category.js";
import routerreg from "./routes/register.js";
import routerlog from "./routes/login.js";
import * as dotenv from "dotenv";
import verifyToken from "./middlewares/verifyToken.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
 console.log("El sevidor se esta ejecutando");
});
mongoose.connect(process.env.MONGO_CONNECTION, (err) => {
 if (err) {
  console.log(err);
 } else {
  console.log("Se ha conectado a la base de datos", PORT);
 }
});
app.use(express.json());
app.use(cors());

app.use("/register", routerreg);
app.use("/login", routerlog);
app.use("/client", verifyToken, router);
app.use("/message", routerm);
app.use("/orthesis", routero);
app.use("/reservation", routerr);
app.use("/category", routerc);
