import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ReactUploadImage from './ReactUploadImage.jsx';

import "./baseStyles.css";

var domainName = "localhost:8081";

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
    <ReactUploadImage url={domainName + "/upload"} formClass="app-form" />
  );
}

ReactDOM.render(<ShahnozaApplication />, document.getElementById("root"));
serviceWorker.unregister();
