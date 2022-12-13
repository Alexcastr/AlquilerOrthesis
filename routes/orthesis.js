import express from "express";
import { createOrthesis, deleteOrthesis, readOrthesis, updateOrthesis } from "../controllers/orthesis.js";

const router = express.Router()

//crear
router.post("/",  (req,res )=> {
    createOrthesis(req,res)
})
//leer
router.get("/:name",  (req,res )=> {
    readOrthesis(req,res)
})


//actualizar
router.put("/:name",  (req,res )=> {
    updateOrthesis(req,res)
})


//borrar
router.delete("/:id",  (req,res )=> {
    deleteOrthesis(req,res)

})

export default router;