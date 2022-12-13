import orthesisModel from "../models/orthesis.js";

export async function createOrthesis(req, res){
    const orthesis = req.body;
    let documento = null
    try{
         documento = await orthesisModel.create(orthesis)
    }catch(error){
        res.status(400)
        res.json(error)
        return;
    }
    res.status(201)
    res.json(documento)
}


export async function readOrthesis(req, res){
    const name = req.params.name
    let documento = null

    try {
        documento = await orthesisModel.find({
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


export async function updateOrthesis(req, res){
    const name = req.params.name
    const { cambios } = req.body
    let documento = null;

    try {
        documento = await orthesisModel.updateOne({
            name
        }, cambios, { runValidators: true })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}

export async function deleteOrthesis(req, res){
    const { id } = req.params

    let documento;

    try {
        documento = await orthesisModel.findOneAndDelete({
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