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
    res.send("ola world")
})







app.listen(5000, ()=>{
    console.log('\napp started on port 5000\n\n')
})