import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import "./AppFooter.css";
/*
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
*/

function AppFooter(props) {
    return (
        <div className="app-footer">
            <Typography className="app-nav-footer-title"><b>What is #snza?</b></Typography>
            <Typography className="app-nav-footer-desc">Shahnoza, or #snza for short, is a ML- and cloud-based app that answers the following question: 
            Where can I buy this thing? Simply take a picture of the thing, and we'll tell you where to buy it!</Typography>
            <Typography className="app-nav-footer-title"><b>Why?</b></Typography>
            <Typography className="app-nav-footer-desc">What does Shahnoza mean, you might ask? 
            We're not sure. We're just programmers who don't know how to choose names. We recommend <a href="https://www.behindthename.com/random/">
                this random name generator</a> if you happened to be a programmer in need!</Typography>
            <Typography className="app-nav-footer-title"><b>Who are we?</b></Typography>
            <Typography className="app-nav-footer-desc">{"We are UWBHacks team Shahnoza! Comprised of genius coders "}
            <a href="https://github.com/Derposoft">Viswanath Chadalapaka</a>{", "}
            <a href="https://github.com/jaygrinols"> Jay Grinols</a>{", and "}
            <a href="https://github.com/TFlexSoom">Tristan Hilbert</a>. Feel free to give us a star :^)</Typography>
        </div>
    )
}

export default AppFooter;