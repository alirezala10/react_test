import React, { Component } from 'react';
import {connect} from 'react-redux';
import './../../styles/ThemeButton.scss'
import { Button } from '@material-ui/core';
// import History from '../../utils/history';

class Logout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email : localStorage.getItem("email") ? localStorage.getItem("email") : null,
            
        }
    }

    componentDidMount () {
        if (!localStorage.getItem("email")) this.logout()
        if (localStorage.getItem("rememberMe") !== 'true') localStorage.clear();
    }

    logout() {
        // History.push('/login');
        localStorage.clear();
        this.props.history.push('/');
    }

    

    render() {
        return (
            <div className={this.props.darkTheme ? 'wrapper-dark' : 'wrapper'}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='content'>       
                                    <form className={this.props.darkTheme ? 'login-form-dark' : 'login-form'} autoComplete="off">
                                        <h2 className={this.props.darkTheme ? 'title-dark' : 'title'}>{this.state.email}</h2>
                                        <div className='form-row form-btn'>
                                            <Button variant="contained" color="secondary" fullWidth="true" onClick={this.logout.bind(this)} >
                                                Log out
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

export default connect(mapStateToProps)(Logout);
