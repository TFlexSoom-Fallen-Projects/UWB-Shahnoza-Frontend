import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import "./AppNavBar.css";
/*
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
*/

function AppNavBar(props) {
    return (
        <div className="app-nav-bar">
            <Typography variant="h5" className="app-nav-title">UWBHacks #snza</Typography>
            <IconButton className="app-nav-icon" onClick={props.upload}>
                <InsertDriveFileIcon />
            </IconButton>
            <IconButton className="app-nav-icon">
                <AddAPhotoIcon />
            </IconButton>
        </div>
    )
}

export default AppNavBar;