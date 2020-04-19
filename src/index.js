import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ReactUploadImage from './Components/ReactUploadImage.jsx';
import AppNavBar from "./Components/AppNavBar.jsx";
import PictureOptionCard from "./Components/PictureOptionCard.jsx";
import PhotoDrawer from "./Components/PhotoDrawer";
import ResultsList from "./Components/ResultsList";
import 'typeface-roboto';
import "./baseStyles.css";

import testoutput from './output.json'

var domainName = "http://localhost.80";
var photoDrawer = React.createRef(); // undefined until photo drawer instance
var resultsList = React.createRef();

function newResults(results){
  console.log(testoutput);
  resultsList.current.changeResults(testoutput);
}

function onClickChangeDrawer(e){
  photoDrawer.current.openCloseDrawer();
}

export default function ShahnozaApplication() {
  return (
  <React.StrictMode>
      <CssBaseline />
      <AppNavBar></AppNavBar>
      <Container width="100%" id="main-container">
        <WelcomeTitle text="Welcome to Shahnoza"/>
        <Container className="card-container">
          <ReactUploadImage onResponse={newResults} url={domainName + "/upload"} formClass="app-form" />
          <PictureOptionCard onClick={onClickChangeDrawer}/>
        </Container>
        <ResultsList results={[]} ref={resultsList}/>
        <PhotoDrawer ref={photoDrawer}/>
      </Container>
  </React.StrictMode>
  );
}

export function WelcomeTitle(props){
  return <h1 className="welcome-title">{props.text}</h1>;
}

ReactDOM.render(<ShahnozaApplication />, document.getElementById("root"));
serviceWorker.unregister();
