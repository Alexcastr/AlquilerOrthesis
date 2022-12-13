import express  from "express";
import mongoose from "mongoose";
import router from "./routes/client.js";
import routerm from "./routes/message.js";
import routero from "./routes/orthesis.js";
import routerr from "./routes/reservation.js";
import routerc from "./routes/category.js";
import { json } from "express";

const app = express()
const port = 3000

app.listen(port ,() =>{
    console.log("El sevidor se esta ejecutando");
})
mongoose.connect("mongodb+srv://AlquilerOrthesis:AlquilerOrthesis@cluster0.zc55qrz.mongodb.net/AlquilerOrthesis?retryWrites=true&w=majority", (err)=>{
    if (err){
        console.log(err);
    }else{
        console.log("Se ha conectado a la base de datos");
    }
})
app.use(express.json());

app.use("/client",router)
app.use("/message",routerm)
app.use("/orthesis",routero)
app.use("/reservation",routerr)
app.use("/category",routerc)
