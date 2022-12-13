import mongoose from "mongoose";

const categoryModel = mongoose.Schema({
    "id":{type: Number, required: true},
    "name": {type: String, required: true},
    "description": {type: String, required: true}
})
export default mongoose.model("category",categoryModel)