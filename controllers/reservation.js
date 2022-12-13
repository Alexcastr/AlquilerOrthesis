import reservationModel from "../models/reservation.js";

export async function createReservation(req, res){
    const reservation = req.body;
    let documento = null
    try{
         documento = await reservationModel.create(reservation)
    }catch(error){
        res.status(400)
        res.json(error)
        return;
    }
    res.status(201)
    res.json(documento)
}
export async function readReservation(req, res){
    const idreservation = req.params.idreservation
    let documento = null

    try {
        documento = await clientModel.find({
            idreservation
        })
    } catch (error) {
        res.status(400)
        res.json(error)
        return;
    }

    res.status(200)
    res.json(documento)
}


export async function updateReservation(req, res){
    const idreservation = req.params.idreservation
    const { cambios } = req.body
    let documento = null;

    try {
        documento = await reservationModel.updateOne({
            idreservation
        }, cambios, { runValidators: true })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}

export async function deleteReservation(req, res){
    const { idreservation } = req.params

    let documento;

    try {
        documento = await reservationModel.findOneAndDelete({
            "idreservation": idreservation
        })
    } catch (error) {
        res.status(400)
        res.json(error)
        return;
    }

    res.status(200)
    res.json(documento)
}