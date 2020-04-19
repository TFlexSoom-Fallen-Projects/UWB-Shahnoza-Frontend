/*
 * Tristan Hilbert
 * 4/18/2020
 * PhotoDrawer React Component
 * 
 */

import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Camera, {FACING_MODES} from 'react-html5-camera-photo';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container"
import UploadUtil from "../Utility/UploadUtil";
import 'react-html5-camera-photo/build/css/index.css';
import './PhotoDrawer.css';



class PhotoDrawer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            dataUri: "",
            facing_mode: FACING_MODES.ENVIRONMENT,
            previewOn: false
        }

        this.url = props.url;
        this.openCloseDrawer = this.openCloseDrawer.bind(this);
        this.pictureTaken = this.pictureTaken.bind(this);
        this.onError = this.onError.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.pictureRetake = this.pictureRetake.bind(this);
        this.pictureSubmit = this.pictureSubmit.bind(this);
        this.onResponse = props.onResponse;

    }

    openCloseDrawer(){
        this.setState({isOpen: !this.state.isOpen});
    }

    pictureSubmit(e){
        console.log("SUBMIT!");
        var file = UploadUtil.dataURItoFile(this.state.dataUri);
        console.log(file);
        UploadUtil.uploadImageToAPI(file, this.url, this.onResponse);
        this.openCloseDrawer();

    }

    pictureRetake(e){
        console.log("RETAKE!");
        this.setState({
            dataUri: "",
            previewOn: false
        });
    }

    pictureTaken(newDataUri){
        
        this.setState({ 
            dataUri: newDataUri,
            previewOn: true
        })
    }

    onError(err){
        console.error(err);
        this.setState({facing_mode: FACING_MODES.USER});
    }

    onOpen(){
        console.log("Drawer Opened Sir!");
    }

    onClose(){
        console.log("Drawer Closed Sir!");
        this.setState({
            isOpen: false,
            dataUri: "",
            facing_mode: FACING_MODES.ENVIRONMENT,
            cameraOn: false,
            previewOn: false
        });
    }

    render() {

        const cameraWithPreview = <Camera
                                onTakePhotoAnimationDone={this.pictureTaken}
                                idealFacingMode={this.state.facing_mode}
                                onCameraError={this.onError}
                                isMaxResolution={true}
                                onCameraStop={this.onCameraStart}
                                />
        
        const preview = (
            <div>
                <img src={this.state.dataUri} className="drawer-cam drawer-cam-preview"/> 
                <Container size="sm">
                    <Button onClick={this.pictureSubmit}>Upload!</Button>
                    <Button onClick={this.pictureRetake}>Retake!</Button>
                </Container>
            </div>
        );

        

        return (
            <SwipeableDrawer anchor={"bottom"} onOpen={this.onOpen} open={this.state.isOpen} onClose={this.onClose}>
                <div className="drawer-photo-container">
                    {
                        (this.state.previewOn === true) ?
                        preview:
                        cameraWithPreview
                    }
                </div>
            </SwipeableDrawer>
        );
    }
}

export default PhotoDrawer;