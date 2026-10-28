const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')



const app = express()
app.use(bodyParser.urlencoded())




mongoose.connect(process.env.MONGO_URI)
.then(()=>{ 
    console.log('mongo db connected')
})
.catch((err)=>{console.log(err)})





const DataSchema = mongoose.Schema({ 
    firstname:{
        type: String,
        require : true
    },
    lastname:{
        type: String
    },
    email:{
        type:String,
        require:true,
        unique:true
    }
})

const MyData = mongoose.model('userData' , DataSchema)







app.get('/insert' , (req, res, next)=>{
    res.send(`
        <html>
            <form action='/insert' method='POST'>
                <input type="text" name="firstname" required/>
                <input type="text" name="surname"/>
                <input type="text" name="email" required/>
                <input type="submit" />
            </form>
        </html>    
    `) 
})



app.post('/insert' , async (req, res, next)=>{
    const result = await MyData.create({        
        firstname: req.body.firstname,
        lastname: req.body.surname,
        email: req.body.email
    })   
    res.send(result)
})


app.get('/users', async (req, res, next)=>{
    const users = await MyData.find({})
    res.send(users)
})




app.listen(5000, ()=>{
    console.log("app started at http://localhost:5000/")
})