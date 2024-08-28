const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
const https = require("https");

const app =  express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html")
});

app.post("/", function(req, res){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;


    console.log(firstName,lastName,email);
});

const request = https.request(url,options,function(response){
    if(response.stausCode===200){
        res.send("Successfully subscribed!");
    }else{
        res.send("There was an error with signing up, please try again!");
    }
});



app.listen(3000,function(req,res){
    console.log("Server running on port 3000");
})