const express = require('express')
const db = require('./sqlPool')





const app = express()

app.get('/' , (req, res, next)=>{
    console.log('request came from', req.hostname)
    res.send(`
        <button onclick="window.location.href='./sql'">Click me </button>    
    `)
})





app.get('/sql' , (req, res, next)=>{


    db.query('SELECT * FROM users')
        .then(result =>{
            res.send(result.rows)
        })
        .catch(error=>{
            console.log("error occured :(", error)
        })
})







app.listen(5000, ()=>{
    console.log('\napp started on port 5000\n\n')
})