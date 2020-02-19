const express = require('express');
const bodyparser = require('body-parser');
const request = require('request');
const ejs = require('ejs');

const app = express();
app.use(bodyparser.urlencoded({extended:false}));

app.set('view engine', 'ejs');

let user1 = "Richard";

app.get('/',function(req,res) {
    res.render('index',{user:user1});
})

app.listen(3000, console.log("Server is listening on Port 3000"));