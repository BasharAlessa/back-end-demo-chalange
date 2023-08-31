const mongoose = require("mongoose")
const Schema =mongoose.Schema;

const postSchema= new Schema({
    title :{
        type:String,
        required :true
    },
    desc:{
        type :String,
        required :true
    },
    // created_at:{
    //     type:Date,
    //     default:Data.now()
    // }
})





module.exports= mongoose.model("Post" , postSchema)