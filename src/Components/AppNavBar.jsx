import React from 'react';
import Typography from '@material-ui/core/Typography';
import "./AppNavBar.css";
/*
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
*/

class AppNavBar extends React.Component{
    render() {
        return (
            <div className="app-nav-bar">
                <Typography variant="h5" className="app-nav-title">UWBHacks #snza</Typography>
                <div className="app-nav-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AppNavBar;