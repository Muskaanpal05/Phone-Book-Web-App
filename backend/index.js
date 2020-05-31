const express = require('express');
const bodyParser = require('body-parser');

var app = express();

//hardcoded data
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

//root path
app.get("",(req,res)=>{
    res.send("Phone-Book-Web-App");
})

//get all contact details
app.get("/all",(req,res)=>{
    console.log("getting all data");
    res.send(data);
})

//get all contacts by name
app.get("/getByName/:name",(req,res)=>{
    console.log("getting data by name");
    console.log(req.params.name);
    var result=[];
    data.map(d => {
        if(d.name == req.params.name)
        {
            result.push(d);
        }
    })
    // if(result.length==0){
    //     res.send({"Response":"No contact with this name"});
    // }
    res.send(result);
})

//get contact by email(unique)
app.get("/getByEmail/:email",(req,res)=>{
    console.log("getting data by email");
    data.map(d => {
        return d.email.map(email => {
            if(email == req.params.email){
                res.send(d);
            }
        })

    })
    // res.send({"Response":"No contact with this email"});
    res.send("EMPTY");
})

//get contact by contact-number(unique)
app.get("/getByContact/:contact",(req,res)=>{
    console.log("getting data by contact");
    data.map(d => {
        return d.contact.map(c => {
            if(c == req.params.contact){
                res.send(d);
            }
        })

    })
    // res.send({"Response":"No contact with this contact number"});
    res.send("EMPTY");
})

//get contacts by dob(Not allowed -> 00-00-0000)
app.get("/getByDOB/:dob",(req,res)=>{
    console.log("getting data by DOB");
    var result=[];
    data.map(d => {
        if(d.dob == req.params.dob)
        {
            result.push(d);
        }
    })
    // if(result.length==0){
    //     res.send({"Response":"No contact with this dob"});
    // }
    res.send(result);
})

//add new contact (validations not implemented yet)
app.post("/add",function(req,res){
    var flag=0;

    data.map(d => {
        if(d.name==req.body.name){
            flag=1;
        }
        d.email.map(email => {
            if(email == req.body.email[0]){
                flag=1;
            }
        })
        d.contact.map(c=>{
            if(c==req.body.contact[0]){
                flag=1;
            }
        })
    })

    if(flag==1){
        res.send("ERROR");
    }
    else{
        console.log(req.body);
        data.push(req.body);
        res.send({valid:"yes"});
    }
})

app.put("/addEmail", function(req,res){
    var flag = 0;
    console.log("In add email");
    data.map(d => {
        return d.email.map(email => {
            if(email == req.body.val){
                console.log("Email already exist");
                flag=1;
            }
        })

    })
    if(flag==1){
        res.send("ERROR")
    }else{
        console.log("Adding new Email");
        data.map(d => {
            return d.email.map(email => {
                if(email == req.body.d){
                    d.email.push(req.body.val);
                }
            })

        })
        res.send({valid:"yes"});
    }
   
})

app.put("/addContactNumber", function(req,res){
    var flag = 0;
    console.log("In add contact");
    data.map(d => {
        return d.contact.map(contactNumber => {
            if(contactNumber == req.body.val){
                flag=1;
            }
        })

    })
    if(flag==1){
        res.send("ERROR")
    }else{
        data.map(d => {
            return d.contact.map(contactNumber => {
                if(contactNumber == req.body.d){
                    d.contact.push(req.body.val);
                }
            })

        })
        res.send({valid:"yes"});
    }
    
})

app.listen(8082,()=>{
    console.log("Phone-Book-Web-App at port 8082");
})