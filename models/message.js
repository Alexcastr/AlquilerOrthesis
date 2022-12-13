import mongoose from "mongoose";

const messageModel = mongoose.Schema({
    "idMessage" :{type: Number, required: true},
    "messagetext": {type: String, required: true}
    
})
export default mongoose.model("message",messageModel)