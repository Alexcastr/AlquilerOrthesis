import messageModel from "../models/message.js";

export async function createMessage(req, res){
    const message = req.body;
    let documento = null
    try{
         documento = await messageModel.create(message)
    }catch(error){
        res.status(400)
        res.json(error)
        return;
    }
    res.status(201)
    res.json(documento)
}

export async function readMessage(req, res){
    const messagetext = req.params.messagetext
    let documento = null

    try {
        documento = await messageModel.find({
            messagetext
        })
    } catch (error) {
        res.status(400)
        res.json(error)
        return;
    }

    res.status(200)
    res.json(documento)
}



export async function updateMessage(req, res){
    const idMessage = req.params.idMessage
    const { cambios } = req.body
    let documento = null;

    try {
        documento = await messageModel.updateOne({
            idMessage
        }, cambios, { runValidators: true })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}

export async function deleteMessage(req, res){
    const { idMessage } = req.params

    let documento;

    try {
        documento = await messageModel.findOneAndDelete({
            "idMessage": idMessage
        })
    } catch (error) {
        res.status(400)
        res.json(error)
        return;
    }

    res.status(200)
    res.json(documento)
}