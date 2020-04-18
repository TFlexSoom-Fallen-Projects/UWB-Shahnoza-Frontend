import React from 'react';
import "./AppNavBar.css";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

class AppNavBar extends React.Component{
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="app-nav-bar">
                <div className="app-nav-menu">
                    <Button disableElevation variant="contained" size="small">
                        <MenuIcon />
                    </Button>
                </div>
                <h3 className="app-nav-title">Shahnoza App</h3>
                <div class="app-nav-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AppNavBar;