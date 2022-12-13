import express from "express";
import { createMessage, deleteMessage, readMessage, updateMessage } from "../controllers/message.js";

const router = express.Router()

//crear
router.post("/",  (req,res )=> {
    createMessage(req,res)
})
//leer
router.get("/:messagetext",  (req,res )=> {
    readMessage(req,res)
})


//actualizar
router.put("/:idMessage",  (req,res )=> {
    updateMessage(req,res)
})


//borrar
router.delete("/:idMessage",  (req,res )=> {
    deleteMessage(req,res)

})

export default router;