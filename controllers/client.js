import clientModel from "../models/client.js"

export async function createClient(req, res){
    const client = req.body;
    let documento = null
    try{
         documento = await clientModel.create(client)
    }catch(error){
        res.status(400)
        res.json(error)
        return;
    }
    res.status(201)
    res.json(documento)
}


export async function readClient(req, res){
    const name = req.params.name
    let documento = null

    try {
        documento = await clientModel.find({
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


export async function updateClient(req, res){
    const name = req.params.name
    const { cambios } = req.body
    let documento = null;

    try {
        documento = await clientModel.updateOne({
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


export async function deleteClient(req, res){
    const { id } = req.params

    let documento;

    try {
        documento = await clientModel.findOneAndDelete({
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