import React, { Component } from 'react';
import {Card, CardBody, CardText, CardTitle} from 'reactstrap';
import Form from './Form.js';

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            data:  [
                {
                    name: "muskaan",
                    email: [
                        "abc@gmail.com",
                        "xyz@gmail.com"
                    ],
                    contact: [
                        "7865956784",
                        "9876543210"
                    ],
                    dob: "05-10-1999"
                }]
        };
    }

    addContact=(v,event) =>{
        event.preventDefault();
        console.log(v);
        var newData={
            name:v.name,
            email:[v.email],
            contact:[v.contact],
            dob:v.dob
        }
        var data1= this.state.data;
        data1.push(newData);
        this.setState({
            data: data1
        })
    }
    render(){
        var data= this.state.data;
        var result=data.map(d=>{
            return(
                <Card>
                    <CardBody>
                        <CardTitle>{d.name}</CardTitle>
                        <CardText>{d.email[0]}</CardText>
                        <CardText>{d.contact[0]}</CardText>
                        <CardText>{d.dob}</CardText>
                        <CardText>-----------------------</CardText>
                    </CardBody>
                </Card>
            )
        })
        return(
            <div>
                <Form addContact={this.addContact}/>
                <h4>All contacts</h4>
                <div>{result}</div>
            </div>
        );
    }
}

export default Main;