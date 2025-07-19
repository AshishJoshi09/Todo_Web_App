const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TodoSchema = new Schema({
    description :{type : String ,  required : true},
    status : {type : Boolean, default : false},
    userId : {
        type : Schema.Types.ObjectId,
        ref : "users" ,
        required : true
    }
}, {timestamps : true})

const TodoModel = mongoose.model("todos",TodoSchema);

module.exports = TodoModel;