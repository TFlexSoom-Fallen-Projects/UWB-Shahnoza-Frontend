/*
 * Tristan Hilbert
 * 4/18/2020
 * PhotoDrawer React Component
 * 
 */

import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

class PhotoDrawer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }

        this.openCloseDrawer = this.openCloseDrawer.bind(this);
    }

    openCloseDrawer(){
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <SwipeableDrawer anchor={"bottom"} onOpen={this.openCloseDrawer} open={this.state.isOpen} onClose={this.openCloseDrawer}>
                <div className="drawer-photo-container">
                    Hello There!
                </div>
            </SwipeableDrawer>
        );
    }
}

export default PhotoDrawer;