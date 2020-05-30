const express = require("express");
const bodyParser = require("body-parser");

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
        "dob": "5/10/1999"
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
        "dob": "6/2/1999"
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
        "dob": "6/2/1999"
    }
]

app.use(bodyParser.json());

app.use("*",(req,res,next)=>{
    console.log("middleware is called");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","*");
    res.setHeader("Access-Control-Allow-Headers",
        "Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");
    next();
})

app.get("",function(req,res){
    res.send("Phone-Book-Web-App");
})

app.get("/all",function(req,res){
    console.log("getting all data");
    res.send(data);
})

app.get("/getByName/:name",function(req,res){
    console.log("getting all data");
    const result = data.map(d => {
        if(d.name == req.params.name)
        {
            return d;
        }

    })
    res.send(result);
})


app.listen(8082,()=>{
    console.log("win on skill backend at port 8082");
})