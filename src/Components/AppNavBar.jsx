import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import InputIcon from '@material-ui/icons/Input';
import UploadUtil from "../Utility/UploadUtil"
import "./AppNavBar.css";


function AppNavBar(props) {
    var onClick = e => {
        document.getElementById("file-input").click()
    }
    var onFormSubmit = e => {
        e.preventDefault();
        var fileuploader = document.getElementById("file-input")
        if (fileuploader.files[0] !== null) {
            UploadUtil.uploadImageToAPI(fileuploader.files[0], props.url, props.onResponse);
        }
    }

    return (
        <div className="app-nav-bar">
            <Typography className="app-nav-title">UWBHacks #snza</Typography>
            <form className={"app-form upload-form"} onSubmit={onFormSubmit}>
                <IconButton className="app-nav-icon" onClick={onClick}>
                    <InsertDriveFileIcon />
                </IconButton>
                <IconButton className="app-nav-icon" onClick={props.onCameraClick}>
                    <AddAPhotoIcon />
                </IconButton>
                <IconButton className="app-nav-icon" type="submit">
                    <InputIcon color='secondary' />
                </IconButton>
            </form>
        </div>
    )
}

export default AppNavBar;