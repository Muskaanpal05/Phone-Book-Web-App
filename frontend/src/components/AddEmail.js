import React, { Component } from 'react';
import {Card, CardBody, CardText, CardTitle} from 'reactstrap';
import {Form,Button} from 'react-bootstrap';

class AddEmail extends Component{
    state={
        val: "",
        d: this.props.d
    }
  

handleChange=(event) =>{
    this.setState({
        [event.target.name]: event.target.value
    })
}
render(){
    const {val,d}=this.state;
    const values={val,d};
    return(
        <div>
            <Form onSubmit={this.props.addEmail.bind(this,values)}>
                <Form.Row>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email : </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Email..."
                            className="form-control"
                            name="val"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Button type='submit' variant="primary">Add New Email</Button>
                </Form.Row>
            </Form>

        </div>

    );
}
}

export default AddEmail;