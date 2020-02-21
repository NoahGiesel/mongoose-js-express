const express = require("express") ;
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();

const Post = require("./models/Post")


require("dotenv/config")

 


 //connect db
mongoose.connect(process.env.DATABASE_URL,
{ useNewUrlParser: true, useUnifiedTopology: true },
() => "connected to databse bro")
//const labelsMain = db.get("labelsMain")

//middlewear

app.use(cors())

app.use(express.json())

//add get Route to get in touch with frontend

app.get("/", (req,res) => { 
    res.json({
        message: "eccomi" 
    })
})

function isValidLabel(label){
    return label.name && label.name.toString().trim() !== "" &&
    label.content && label.content.toString().trim() !== "";
}


app.post("/labelsMain", async(req,res) => {
    if(isValidLabel(req.body)) { 
        const labelsMain = { 
        name: req.body.name.toString(),
        content: req.body.content.toString(),
        created: new Date()
        }

        const post = new Post(labelsMain)
        const savedPost = await post.save() 
     }else { 
        res.status(422)
        res.json({
            message: "Hey! Name and content are required"
        })
    }
})

app.get("/", async (req,res) =>  {
    try {
        const post = await Post.find()
        res.json(post)
        
    }catch(err) { 
        res.json( { message : err})
    }
})


 


app.listen(3000, () => {console.log("i'm running on 3000")})