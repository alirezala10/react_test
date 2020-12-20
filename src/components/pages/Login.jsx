import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/Login.scss';
import {TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import axios from 'axios';
// import History from '../../utils/history';




class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            emailValidation: '',
            password: '',
            passwordValidation: '',
            rememberMe: false,
        }
    }

    componentDidMount() {
        localStorage.setItem("email", "there is no email address");
        localStorage.setItem("rememberMe", null);
    }

    usernameHandler(e) {
        this.setState({ email: e.target.value })
    }

    passwordHandler(e) {
        this.setState({ password: e.target.value })
    }

    handleCheckBoxChange(e) {
        this.setState({ rememberMe: e.target.checked })
    }

    login() {
        let hasError = false;
        if (this.state.password == "") {
            hasError = true;
            this.setState({ passwordValidation: "Please,Enter your password." })
        }
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.email == "") {
            hasError = true;
            this.setState({ emailValidation: "Please,Enter your email address." })
        }
        if (!re.test(this.state.email)) {
            hasError = true;
            this.setState({ emailValidation: "Your email address does not have the correct format." })
        }
        if (!hasError) {
            axios.get(`https://reqres.in/api/login`, { password: this.state.password, email: this.state.email })
                .then(res => {
                    if (res.status === 200) {
                        localStorage.setItem("email", this.state.email);
                        localStorage.setItem("rememberMe", this.state.rememberMe);
                        this.props.history.push('/logout');
                    } else {

                    }
                })
        }
    }

    render() {
        const { emailValidation, passwordValidation } = this.state;
        return (
            <div className={this.props.darkTheme ? 'wrapper-dark' : 'wrapper'}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='content'>
                                <form className={this.props.darkTheme ? 'login-form-dark' : 'login-form'} autoComplete="off">
                                    <h2 className={this.props.darkTheme ? 'title-dark' : 'title'}>Sign In</h2>
                                    <div className='form-row'>
                                        <TextField
                                            onChange={this.usernameHandler.bind(this)}
                                            id="outlined-full-width"
                                            label="E-mail"
                                            type="mail"
                                            style={{ margin: 8 }}
                                            placeholder="Enter email"
                                            fullWidth
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                        />
                                        {emailValidation.length > 0 && (
                                            <p className='mail-validation'>please enter your email!</p>
                                        )}
                                    </div>
                                    <div className='form-row'>
                                        <TextField
                                            onChange={this.passwordHandler.bind(this)}
                                            id="outlined-full-width"
                                            label="Password"
                                            type="password"
                                            style={{ margin: 8 }}
                                            placeholder="Enter passwoard"
                                            fullWidth
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                        />
                                        {passwordValidation.length > 0 && (
                                            <p className='password-validation'>please enter your password!</p>
                                        )}
                                    </div>
                                    <div className='form-row checkkbox-wrapper'>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.state.rememberMe}
                                                    onChange={this.handleCheckBoxChange.bind(this)}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Remember me!"
                                        />
                                    </div>
                                    <div className='form-row form-btn'>
                                        <Button variant="contained" color="primary" fullWidth="true" onClick={this.login.bind(this)}  >
                                            Submit
                                        </Button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { app } = state;
    return {
        darkTheme: app.darkTheme,
    }
}

export default connect(mapStateToProps)(Login);