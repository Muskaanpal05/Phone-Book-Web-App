import React, { Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Form,Button} from 'react-bootstrap';

class Search extends Component{
     state={
            val: ""
        }
      
    
    handleChange=(event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        const {val}=this.state;
        const values={val};
        return(
            <div>
                <Form onSubmit={this.props.search.bind(this,values)}>
                    <Form.Row>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Value : </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Search..."
                                className="form-control"
                                name="val"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Button type='submit' variant="primary">Search</Button>
                    </Form.Row>
                </Form>

            </div>

        );
    }
}

export default Search;