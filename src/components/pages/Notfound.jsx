import React, { Component } from 'react';
import './../../styles/ThemeButton.scss';
import {connect} from 'react-redux';

class Notfound extends Component {
    render() {
        return (
            <div className={this.props.darkTheme ? 'notfound-dark' : 'notfound'}>
                <h2 className={this.props.darkTheme ? 'title-dark' : 'title'}>Page Not found</h2>
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


export default connect(mapStateToProps)(Notfound) ;
