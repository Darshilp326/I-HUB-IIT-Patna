import React, { Component } from 'react';
import { Form, FormGroup, Col, Label, Input, Button } from 'reactstrap'; 
import PicSlideShow from './PicSlideShow';

class RegisterPage extends Component {

    constructor(props){
        super(props);
        this.state={
            user:'',
            email:'',
            pass1:'',
            pass2:''
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
                <PicSlideShow content="register" />
                <div className="login-wrap">
                    <div className="login-html">
                        <h2 style={{color:"#fff",textAlign:"center"}}>Register</h2>
                        <div className="login-form">
                            <Form class="sign-up-htm" onSubmit={this.handleSubmit}>
                                <FormGroup className="group">
                                    <Label htmlFor="user" className="label">Username</Label>
                                    <Input id="user" name="user" type="text" className="input" onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup className="group">
                                    <Label htmlFor="email" className="label">Email Address</Label>
                                    <Input id="pass" name="email" type="text" className="input" onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup className="group">
                                    <Label htmlFor="pass1" className="label">Password</Label>
                                    <Input id="pass" name="pass1" type="password" className="input" data-type="password" onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup className="group">
                                    <Label htmlFor="pass2" className="label">Repeat Password</Label>
                                    <Input id="pass" name="pass2" type="password" className="input" data-type="password" onChange={this.handleChange}/>
                                </FormGroup>
                                <br />
                                <FormGroup className="group">
                                    <Button type="submit" className="button" >Register</Button>
                                </FormGroup>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <a href="#">Already Member?</a>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default RegisterPage;