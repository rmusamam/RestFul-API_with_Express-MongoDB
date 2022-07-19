const express= require('express')
const app= express()
const mongoose= require('mongoose')
require('dotenv/config')
route=require('./Routes/posts')
//--when we want to run a function on a activation at Rout
app.use('/',route)
const url=process.env.DB_connection
//mongoose.connect(url,{useNewUrlParser:true},()=>console.log('database connected'))
mongoose.connect(url,{useNewUrlParser:true}).then(()=>console.log('database connected'))

//Routes
app.get('/',(req,res)=>{
    res.send('Home Page')
})


//listen on 3000
app.listen(3000,()=>{
    console.log('server activated on port 3000')
})