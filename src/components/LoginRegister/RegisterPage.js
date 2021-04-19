import React, { Component } from 'react';
import { Form, FormGroup, FormFeedback, Col, Label, Input, Button } from 'reactstrap'; 
import { Link } from 'react-router-dom';
import PicSlideShow from '../PicSlideShow';
import './loginreg.css';

class RegisterPage extends Component {

    constructor(props){
        super(props);
        this.state={
            user:'',
            email:'',
            pass1:'',
            pass2:'',
            touched:{
                user:false,
                email:false,
                pass1:false,
                pass2:false,
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

    validate(user, email, pass1, pass2) {
        const errors = {
            user: '',
            email: '',
            pass1: '',
            pass2: '',
        };

        const passwordreg = /^.{8,}$/;
		if(this.state.touched.pass1 && pass1.length==0)
			errors.pass1 = 'Please fill the box';
        else if((this.state.touched.pass1 || pass1.length!=0) && !passwordreg.test(pass1))
            errors.pass1 = 'Password should have 8 or more characters';

        if(this.state.touched.pass2 && pass2.length==0)
			errors.pass2 = 'Please fill the box';
        else if((this.state.touched.pass2 || pass2.length!=0) && !passwordreg.test(pass2))
            errors.pass2 = 'Password should have 8 or more characters';

        if(pass1!=pass2){
            errors.pass1 = 'Passwords do not match';
            errors.pass2 = 'Passwords do not match';
        }

        if(this.state.touched.user && user.length==0)
			errors.user = 'Username is required';

        const emailreg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        if(this.state.touched.email && email.length==0)
            errors.email = 'Email is required';
        else if((this.state.touched.email || email.length!=0) && !emailreg.test(email))
            errors.email = 'Email format is wrong';

        return errors;
    }

    render() {

        const errors = this.validate(this.state.user, this.state.email, this.state.pass1, this.state.pass2);
        console.log("errors:",errors);
        return (
            <div>
<<<<<<< HEAD
                
=======
>>>>>>> c048943f51256f90eb82b78a504c47f40f95e0b9
                <PicSlideShow content="register" />
                <div className="login-wrap" style={{height:"800px"}}>
                    <div className="login-html">
                        <h2 style={{color:"#fff",textAlign:"center"}}>Register</h2>
                        <div className="login-form">
                            <Form className="sign-up-htm" onSubmit={this.handleSubmit}>
                                <FormGroup className="group">
                                    <Label htmlFor="user" className="label">Username</Label>
                                    <Input id="user" name="user" 
                                    type="text"
                                    valid={errors.user === ''}
                                    invalid={errors.user !== ''} 
                                    value={this.state.user} 
                                    onBlur={this.handleBlur('user')} 
                                    className="input" 
                                    onChange={this.handleChange}/>
                                    <FormFeedback>
                                        {errors.user}
                                    </FormFeedback>
                                </FormGroup>
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
                                <FormGroup className="group">
                                    <Label htmlFor="pass1" className="label">Password</Label>
                                    <Input id="pass" name="pass1" 
                                    type="password" 
                                    valid={errors.pass1 === ''}
                                    invalid={errors.pass1 !== ''} 
                                    value={this.state.pass1} 
                                    onBlur={this.handleBlur('pass1')} 
                                    className="input" 
                                    data-type="password" 
                                    onChange={this.handleChange}/>
                                    <FormFeedback>
                                        {errors.pass1}
                                    </FormFeedback>
                                </FormGroup>
                                <FormGroup className="group">
                                    <Label htmlFor="pass2" className="label">Repeat Password</Label>
                                    <Input id="pass" name="pass2" 
                                    type="password" 
                                    valid={errors.pass2 === ''}
                                    invalid={errors.pass2 !== ''} 
                                    value={this.state.pass2} 
                                    onBlur={this.handleBlur('pass2')} 
                                    className="input" 
                                    data-type="password" 
                                    onChange={this.handleChange}/>
                                    <FormFeedback>
                                        {errors.pass2}
                                    </FormFeedback>
                                </FormGroup>
                                <br />
                                <FormGroup className="group">
                                    <Button type="submit" className="button" >Register</Button>
                                </FormGroup>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <Link to="/login">Already Member?</Link>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
                
=======
>>>>>>> c048943f51256f90eb82b78a504c47f40f95e0b9
            </div>
        )
    };
}

export default RegisterPage;