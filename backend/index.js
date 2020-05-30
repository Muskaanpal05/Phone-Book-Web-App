const express = require('express');
const bodyParser = require('body-parser');

var app = express();

var data = [
    {
        "name": "muskaan",
        "email": [
            "abc@gmail.com",
            "xyz@gmail.com"
        ],
        "contact": [
            "7865956784",
            "9876543210"
        ],
        "dob": "05-10-1999"
    },
    {
        "name": "nitin",
        "email": [
            "khj@gmail.com",
            "lky@gmail.com"
        ],
        "contact": [
            "7865956765",
            "9876546510"
        ],
        "dob": "08-09-1999"
    },
    {
        "name": "muskaan",
        "email": [
            "kth@gmail.com",
            "lry@gmail.com"
        ],
        "contact": [
            "7865336765",
            "9876534510"
        ],
        "dob": "06-02-1999"
    }
]

app.use(bodyParser.json());

// app.use(bodyParser.json({
//     extended: true
// }));

app.use("*",(req,res,next)=>{
    console.log("middleware is called");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","*");
    res.setHeader("Access-Control-Allow-Headers",
        "Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");
    next();
})

app.get("",(req,res)=>{
    res.send("Phone-Book-Web-App");
})

app.get("/all",(req,res)=>{
    console.log("getting all data");
    res.send(data);
})

app.get("/getByName/:name",(req,res)=>{
    console.log("getting data by name");
    var result=[];
    data.map(d => {
        if(d.name == req.params.name)
        {
            result.push(d);
        }
    })
    if(result.length==0){
        res.send({"Response":"No contact with this name"});
    }
    res.send(result);
})

app.get("/getByEmail/:email",(req,res)=>{
    console.log("getting data by email");
    data.map(d => {
        return d.email.map(email => {
            if(email == req.params.email){
                res.send(d);
            }
        })

    })
    res.send({"Response":"No contact with this email"});
})

app.get("/getByContact/:contact",(req,res)=>{
    console.log("getting data by contact");
    data.map(d => {
        return d.contact.map(c => {
            if(c == req.params.contact){
                res.send(d);
            }
        })

    })
    res.send({"Response":"No contact with this contact number"});
})

app.get("/getByDOB/:dob",(req,res)=>{
    console.log("getting data by DOB");
    var result=[];
    data.map(d => {
        if(d.dob == req.params.dob)
        {
            result.push(d);
        }
    })
    if(result.length==0){
        res.send({"Response":"No contact with this dob"});
    }
    res.send(result);
})

app.post("/add",function(req,res){
    console.log(req.body);
    data.push(req.body);
    res.send({valid:"yes"});
})


app.listen(8082,()=>{
    console.log("Phone-Book-Web-App at port 8082");
})