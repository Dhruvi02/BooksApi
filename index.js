const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const route = require("./route")


mongoose.connect("mongodb://localhost:27017/books_db",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        var app = express();
        app.use(bodyParser.urlencoded({extended:true}));
        app.use('/api',route)
        app.listen(3000,()=>{
            console.log("Server started...!!")
        })
    }
)