import React, { Component } from 'react'
import { connect } from "react-redux";
import './../styles/ThemeButton.scss';
import {changeTheme,} from "../store/actions";
import FormatPaintIcon from '@material-ui/icons/FormatPaint';

class ThemeButton extends Component {


    handleChangeTheme() {
        this.props.changeTheme();
    }

    render() {
        return (
            <>
                <div className={this.props.darkTheme ? 'theme-btn-dark' : 'theme-btn'}>
                    <FormatPaintIcon onClick={() => this.handleChangeTheme()} color={this.props.darkTheme ? "primary" : ""}  />
                </div>
            </>
        )
    }
}


const mapStateToProps = state => {
    const { app } = state;
    return {
        darkTheme: app.darkTheme,
    }
}

export default connect(mapStateToProps, {
    changeTheme,
})(ThemeButton);
