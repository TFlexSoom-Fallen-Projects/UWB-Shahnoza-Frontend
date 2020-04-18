import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import onSubmitFile from "./requestHandler.js";

import "./baseStyles.css";

var domainName = "localhost:3000";






export default function ShahnozaApplication() {
  return (
  <React.StrictMode>
      <CssBaseline />
      <Container maxWidth="lg" id="main-container">
        <WelcomeTitle text="Welcome to Shahnoza"/>
        <TitleAnchor text="Take a Photo!" link="upload.html"/>
        <UploadForm />
      </Container>
  </React.StrictMode>
  );
}

export function WelcomeTitle(props){
  return <h1 className="welcome-title">{props.text}</h1>;
}

export function TitleAnchor(props){
  return <a className="title-anchor" href={props.link}>{props.text}</a>;
}

export function UploadForm(props){
  return (
    <Box component="div" m={1}>
      <h2 className="headline">Upload an Existing Photo</h2>
      <form method="POST" action={domainName + "/upload"} className="app-form" onSubmit={onSubmitFile}>
        <input type="file"/>
        <button type="submit">Submit!</button>
      </form>
    </Box>
  );
}

ReactDOM.render(<ShahnozaApplication />, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
