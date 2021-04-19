import React, { Component } from 'react';
import { Form, FormGroup, FormFeedback, Col, Label, Input, Button } from 'reactstrap'; 
import PicSlideShow from '../PicSlideShow';
import './loginreg.css';

class ForgotPassword extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            touched:{
                email:false,
            }
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]:value });
        console.log("state:",this.state);
    }

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true}
        });
    }

    validate(email) {
        const errors = {
            email: '',
        };

        const emailreg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        if(this.state.touched.email && email.length==0)
            errors.email = 'Email is required';
        else if((this.state.touched.email || email.length!=0) && !emailreg.test(email))
            errors.email = 'Email format is wrong';

        return errors;
    }

    render() {

        const errors = this.validate(this.state.email);
        console.log("errors:",errors);
        return (
            <div>
                <PicSlideShow content="register" />
                <div className="login-wrap" style={{height:"400px",minHeight:"0px"}}>
                    <div className="login-html">
                        <h2 style={{color:"#fff",textAlign:"center"}}>Forgot Password</h2>
                        <br />
                        <div className="login-form">
                            <Form className="sign-up-htm" onSubmit={this.handleSubmit}>
                                <FormGroup className="group">
                                    <Label htmlFor="email" className="label">Email Address</Label>
                                    <Input id="pass" name="email" 
                                    type="text"
                                    valid={errors.email === ''}
                                    invalid={errors.email !== ''} 
                                    value={this.state.email}  
                                    onBlur={this.handleBlur('email')} 
                                    className="input" 
                                    onChange={this.handleChange}/>
                                    <FormFeedback>
                                        {errors.email}
                                    </FormFeedback>
                                </FormGroup>
                                <br />
                                <FormGroup className="group">
                                    <Button type="submit" className="button" >Send Mail</Button>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default ForgotPassword;