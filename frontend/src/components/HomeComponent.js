import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input, Row, Cols} from 'reactstrap';
import ListItems from '../ListItems';
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:'',
                key:''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    handleInput(e){
        this.setState({
            currentItem:{
               text: e.target.value,
               key:Date.now() 
            }
        })
    }
    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text!==""){
            const items=[...this.state.items, newItem];
            this.setState({
                items:newItem,
                currentItem:{
                    text:'',
                    key:""
                    }
            })
        }
    }
    render(){
        return(
            <div className="App1">
                <header>
                    <form id="to-do-form" onSubmit={this.addItem}>
                        <input type="text" placeholder="Enter Name"
                            value={this.state.currentItem.text} 
                            onClick={this.handleInput}/>
                        <button type="submit">Add</button>
                        <input type="email" placeholder="Enter Email"
                            value={this.state.currentItem.text} 
                            onClick={this.handleInput}/>
                        <button type="submit">Add</button>
                        <input type="number" placeholder="Add contact"
                            value={this.state.currentItem.text} 
                            onClick={this.handleInput} />
                        <button type="submit">Add</button>
                    </form>
                </header>
                <ListItems items = {this.state.items}></ListItems>
            </div>

        );
    }

}

export default Home;