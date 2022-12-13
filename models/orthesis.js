import mongoose from "mongoose";

const orthesisModel = mongoose.Schema({
    "id":{type: Number, required: true},
    "name": {type: String, required: true},
    "brand": {type: String, required: true},
    "year": {type: Number, required: true},
    "description": {type: String, required: true},
    
})
export default mongoose.model("orthesis",orthesisModel)