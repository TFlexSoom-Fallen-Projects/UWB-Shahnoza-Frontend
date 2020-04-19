import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputIcon from '@material-ui/icons/Input';
import UploadUtil from "../Utility/UploadUtil"
import "./ReactUploadImage.css";
import { Typography } from '@material-ui/core';

class ReactUploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            file: null,
            filename: "Browse ..."
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.formClass = props.formClass;
        this.onResponse = props.onResponse;
    }

    onFormSubmit(e) {
        e.preventDefault();
        if (this.state.file !== null) {
            UploadUtil.uploadImageToAPI(this.state.file, this.state.url, this.onResponse);
        }
    }

    onChangeFile(e) {
        this.setState({ 
            file: e.target.files[0],
            filename:e.target.files[0].name
        });
    }

    onClick(e) {
        document.getElementById("file-input").click()
    }

    render() {
        return (
        <div style={{textAlign: 'center'}}>
            <form className={"app-form upload-form"} onSubmit={this.onFormSubmit}>
                <ButtonGroup className="upload-form">
                    <IconButton className="upload-buttons" onClick={this.onClick}>
                        <InsertDriveFileIcon className="bigicon" />
                    </IconButton>
                    <input id="file-input" className="file-input" type="file" name="myimg" onChange={this.onChangeFile} />
                    <IconButton className="upload-buttons" onClick={this.props.onCameraClick}>
                        <AddAPhotoIcon className="bigicon" />
                    </IconButton>
                </ButtonGroup>

                <IconButton className="upload-buttons" type="submit">
                    <InputIcon color='secondary' className="entericon" />
                </IconButton>
            </form>
            <Typography><b>{this.state.filename}</b></Typography>
        </div>
        )
    }
}

export default ReactUploadImage