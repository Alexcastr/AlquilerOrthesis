import categoryModel from "../models/category.js";

export async function createCategory(req, res){
    const category = req.body;
    let documento = null
    try{
         documento = await categoryModel.create(category)
    }catch(error){
        res.status(400)
        res.json(error)
        return;
    }
    res.status(201)
    res.json(documento)
}

export async function readCategory(req, res){
    const name = req.params.name
    let documento = null

    try {
        documento = await categoryModel.find({
            name
        })
    } catch (error) {
        res.status(400)
        res.json(error)
        return;
    }

    res.status(200)
    res.json(documento)
}



export async function updateCategory(req, res){
    const name = req.params.name
    const { cambios } = req.body

    let documento;

    try {
        documento = await categoryModel.updateOne({
            name
        }, cambios, { runValidators: true })
    } catch (error) {
        res.status(400)
        res.json(error)
        return;
    }

    res.status(200)
    res.json(documento)
}

export async function deleteCategory(req, res){
    const { id } = req.params

    let documento;

    try {
        documento = await categoryModel.findOneAndDelete({
            "id": id
        })
    } catch (error) {
        res.status(400)
        res.json(error)
        return;
    }

    res.status(200)
    res.json(documento)
}