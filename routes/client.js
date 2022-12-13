import express from "express";
import { createClient, deleteClient, readClient, updateClient } from "../controllers/client.js";

const router = express.Router()

//crear
router.post("/",  (req,res )=> {
    createClient(req,res)
})


//leer
router.get("/:name",  (req,res )=> {
    readClient(req,res)
})


//actualizar
router.put("/:name",  (req,res )=> {
    updateClient(req,res)
})


//borrar
router.delete("/:id",  (req,res )=> {
    deleteClient(req,res)

})
export default router;