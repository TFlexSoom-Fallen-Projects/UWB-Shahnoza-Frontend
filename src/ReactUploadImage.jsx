import React from 'react'
const axios = require("axios");

class ReactUploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            file: null,
            filename: ""
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.formClass = props.formClass;
    }

    onFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('myimg', this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            },
            body: {
                'name': this.state.filename
            }
        };
        axios.post(this.state.url, formData, config)
            .then((res) => console.log("The file is successfully uploaded: " + res)).catch(err => {});
    }

    onChangeFile(e) {
        e.persist()
        console.log(e);
        this.setState({ 
            file: e.target.files[0] ,
            filename: e.target.value
        });
    }

    render() {
        return (
            <form className={this.formClass} onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="myimg" onChange={this.onChangeFile} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default ReactUploadImage