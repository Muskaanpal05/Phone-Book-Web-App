import React, { Component } from 'react';
import {Card, CardBody, CardText, CardTitle} from 'reactstrap';
import Form from './Form.js';
import Search from './Search.js';

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            data:  [],
            searchData: []
        };
    }

    //fetching all contacts
    componentDidMount(){
        console.log('did mount');
        fetch('http://localhost:8082/all')
        .then(res=>res.json())
        .then(res=>{
            console.log(JSON.stringify(res));
            this.setState({data:res})
        })

        //making search data empty
        this.setState({
            searchData: []
        })
    }

    //adding new contact(only one email-id and one contact-number for now)
    addContact=(v,event) =>{
        event.preventDefault();
        console.log(v);
        var newData={
            name:v.name,
            email:[v.email],
            contact:[v.contact],
            dob:v.dob
        }

        fetch('http://localhost:8082/add',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(newData)
            })
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                if(res.valid){
                    var data1= this.state.data;
                    data1.push(newData);
                    this.setState({
                        data: data1
                    })
                }
                else{
                    alert('Couldn\'t able to add a contact');
                }
            })

        // var data1= this.state.data;
        // data1.push(newData);
        // this.setState({
        //     data: data1
        // })
    }

    //seraching contacts
    search=(v,event)=>{
        event.preventDefault();

        //seraching contacts by name
        fetch(`http://localhost:8082/getByName/${v.val}`)
        .then(res=>res.json())
        .then(res=>{
            console.log(JSON.stringify(res));
            this.setState({searchData:res});
        })

        //seraching contact by email
        fetch(`http://localhost:8082/getByEmail/${v.val}`)
        .then(res=>res.json())
        .then(res=>{
            console.log(JSON.stringify(res));
            if(res!="ERROR"){
                var sData=this.state.searchData;
                sData.push(res);
                this.setState({searchData:sData});
            }
        })

        //seraching contact by contact-number
        fetch(`http://localhost:8082/getByContact/${v.val}`)
        .then(res=>res.json())
        .then(res=>{
            console.log(JSON.stringify(res));
            if(res!="ERROR"){
                var sData=this.state.searchData;
                sData.push(res);
                this.setState({searchData:sData});
            }
        })
    }

    render(){
        //designing all contacts data
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

        //designing searched contact's data
        data=this.state.searchData;
        var searchedData=data.map(d=>{
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

        //rendering (without any css)
        return(
            <div>
                <Search search={this.search} />
                <div>{searchedData}</div>
                <Form addContact={this.addContact}/>
                <h4>All contacts</h4>
                <div>{result}</div>
            </div>
        );
    }
}

export default Main;