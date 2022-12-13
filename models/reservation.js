import mongoose from "mongoose";

const reservationModel = mongoose.Schema({
    "idreservation":{type: Number, required: true},
    "startdate": {type: Date, required: true},
    "devolutiondate": {type: Date, required: true},
    "status": {type: String, required: true},
})

export default mongoose.model("reservation",reservationModel)