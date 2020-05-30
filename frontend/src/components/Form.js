import React,{Component} from 'react';
// import {Link} from 'react-router-dom';
import {Form,Button} from 'react-bootstrap';

export default class Contact extends Component{
    state={
        name:"",
        email:"",
        contact: "",
        dob: "00-00-0000"
    }

    handleChange = (event) =>
    {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        console.log("info");
            const {name, email, contact, dob }=this.state;
            const values={name, email, contact, dob};
            return( 
                <>
                    <h2>Add new contact</h2>
                    <Form onSubmit={this.props.addContact.bind(this,values)}>
                        <Form.Row>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name : </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Name..."
                                    className="form-control"
                                    name="name"
                                    onChange={this.handleChange}
                                    required
                                />
                            
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Email : </Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email..."
                                    className="form-control mt-2"
                                    name="email"
                                    onChange={this.handleChange}
                                    required
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Contact : </Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Contact..."
                                    className="form-control mt-2"
                                    name="contact"
                                    onChange={this.handleChange}
                                    required
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>DOB : </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="DOB dd-mm-yyyy"
                                    className="form-control mt-2"
                                    name="dob"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" required />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Button type='submit' variant="primary">Add</Button>
                        </Form.Row>
                    </Form>

                </>
            )
        }
        
    
}
