const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const route = require("./route")


mongoose.connect("mongodb+srv://user_dk:user_dk@cluster0.ca8ee.mongodb.net/Studentdb?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        var app = express();
        app.use(bodyParser.urlencoded({extended:true}));
        app.use('/api',route)
        app.listen(process.env.PORT || 3000,()=>{
            console.log("Server started...!!")
        })
    }
)
