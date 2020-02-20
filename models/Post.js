const mongoose = require("mongoose")



const PostSchema = mongoose.Schema( {
    name : String, 
    content : String,
    date : Date.now
})