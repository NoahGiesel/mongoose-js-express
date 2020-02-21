const mongoose = require("mongoose")

// SCHEMAS MONGO  POST

const PostSchema = mongoose.Schema( {
    name : {
        type: String,
        required : true
    },
    content : {
        type: String,
        required : true
    },
     date :{
         type : Date,
         default : Date.now
     }
     })

     
     module.exports = mongoose.model("Posts", PostSchema)