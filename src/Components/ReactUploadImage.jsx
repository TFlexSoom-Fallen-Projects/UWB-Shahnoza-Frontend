import React from 'react'
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import UploadUtil from "../Utility/UploadUtil"
import "./ReactUploadImage.css";

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
        if(this.state.file !== null){
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
        var elem = e.target || e.srcElement;
        if(elem.tagName !== "BUTTON"){
            elem.parentElement.click();
        }else{
            elem.nextElementSibling.click();
        }
    }

    render() {
        return (
            <Card className="app-card">
                <form className={this.formClass + " upload-form"} onSubmit={this.onFormSubmit}>
                    <h1>File Upload</h1>
                    <Button variant="contained" onClick={this.onClick} className="file-label">{this.state.filename}</Button>
                    <input className="file-input" type="file" name="myimg" onChange={this.onChangeFile} />
                    <Button variant="contained" className="file-submit-button" type="submit">Upload</Button>
                </form>
            </Card>
        )
    }
}

export default ReactUploadImage