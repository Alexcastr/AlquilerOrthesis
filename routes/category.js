import express from "express";
import { createCategory, deleteCategory, readCategory, updateCategory } from "../controllers/category.js";

const router = express.Router()

//crear
router.post("/",  (req,res )=> {
    createCategory(req,res)
})


//leer
router.get("/:name",  (req,res )=> {
    readCategory(req,res)
})


//actualizar
router.put("/:name",  (req,res )=> {
    updateCategory(req,res)
})


//borrar
router.delete("/:id",  (req,res )=> {
    deleteCategory(req,res)

})

export default router;