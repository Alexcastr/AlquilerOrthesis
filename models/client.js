import mongoose from "mongoose";

const clientModel = mongoose.Schema({
    "id":{type: Number, required: true},
    "name": {type: String, required: true},
    "age": {type: Number, required: true},
    "email": {type: String, required: true},
    "password": {type: String, required: true},
    
})
export default mongoose.model("client",clientModel)