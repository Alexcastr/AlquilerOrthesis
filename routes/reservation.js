import express from "express";
import { createReservation, deleteReservation, readReservation, updateReservation } from "../controllers/reservation.js";

const router = express.Router()

//crear
router.post("/",  (req,res )=> {
    createReservation(req,res)
})
//leer
router.get("/:idreservation",  (req,res )=> {
    readReservation(req,res)
})


//actualizar
router.put("/:idreservation",  (req,res )=> {
    updateReservation(req,res)
})


//borrar
router.delete("/:idreservation",  (req,res )=> {
    deleteReservation(req,res)

})

export default router;