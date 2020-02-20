const express = require("express") ;
const cors = require("cors")

const app = express();
 


//middlewear

app.use(cors())

app.use(express.json())

//add get Route to get in touch with frontend

app.get("/", (req,res) => { 
    res.json({
        message: "eccomi"
    })
})


app.post("/labelsMain",(req,res) => {
    console.log(req.body)
})

app.listen(3000, () => {
    console.log("i'm running on 3000")
})