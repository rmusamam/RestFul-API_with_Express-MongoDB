const express= require('express')
const app= express()
const mongoose= require('mongoose')
require('dotenv/config')
//--when we want to run a function on a activation at Rout
// app.use('/',()=>{
//     console.log('homePage running')
// })
//const url='mongodb+srv://rmusamam:ranausama@cluster0.fsilfnm.mongodb.net/?retryWrites=true&w=majority'
//mongodb+srv://rmusamam:<password>@cluster0.fsilfnm.mongodb.net/test
//MONGO_URI = 'mongodb+srv://rmusamam:ranausama@cluster0.fsilfnm.mongodb.net/api-crud'
const url=process.env.DB_connection
mongoose.connect(url,{useNewUrlParser:true},()=>console.log('database connected'))

//Routes
app.get('/',(req,res)=>{
    res.send('Home Page')
})


//listen on 3000
app.listen(3000,()=>{
    console.log('server activated on port 3000')
})