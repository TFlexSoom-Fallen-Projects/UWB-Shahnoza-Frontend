import React from 'react'
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputIcon from '@material-ui/icons/Input';
import UploadUtil from "../Utility/UploadUtil"
//import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import "./ReactUploadImage.css";

//const enterTheme = createMuiTheme({ palette: { primary: "green" } })

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
        /*
        if(this.state.file !== null){
            UploadUtil.uploadImageToAPI(this.state.file, this.state.url, this.onResponse);
        }*/
        console.log("hi")
        this.onResponse();
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
        <form className={this.formClass + " upload-form"} onSubmit={this.onFormSubmit}>
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
                <InputIcon color='primary' className="entericon" />
            </IconButton>
        </form>
            
            /*<Card className="app-card">
                    <h1>File Upload</h1>
                    <Button variant="contained" onClick={this.onClick} className="file-label">{this.state.filename}</Button>
                    <Button variant="contained" className="file-submit-button" type="submit">Upload</Button>
            </Card>*/
        )
    }
}

export default ReactUploadImage