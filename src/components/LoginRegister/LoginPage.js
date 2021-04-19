import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Col, Label, Input, Button } from 'reactstrap'; 
import PicSlideShow from '../PicSlideShow';
import './loginreg.css';

class LoginPage extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            pass:''
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]:value });
        console.log(this.state);
    }

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
    }

    render() {

        return (
            <div>
                <PicSlideShow content="login" />
                <div className="login-wrap" style={{height:"600px",minHeight:"0px"}}>
                    <div className="login-html">
                        <h2 style={{color:"#fff",textAlign:"center"}}>Sign In</h2>
                        <div className="login-form">
                            <Form className="sign-in-htm" onSubmit={this.handleSubmit}>
                                <FormGroup className="group">
                                    <Label htmlFor="email" className="label">Email</Label>
                                    <Input id="user" onChange={this.handleChange} name="email" type="text" className="input" />
                                </FormGroup>
                                <FormGroup className="group">
                                    <Label htmlFor="pass" className="label">Password</Label>
                                    <Input id="pass" name="pass" onChange={this.handleChange} type="password" className="input" data-type="password" />
                                </FormGroup>
                                <br />
                                <FormGroup className="group">
                                    <Button type="submit" className="button" >Sign In</Button>
                                </FormGroup>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default LoginPage;