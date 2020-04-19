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
import "./baseStyles.css";


var domainName = "http://www.shahnoza.tech";
var photoDrawer = React.createRef(); // undefined until photo drawer instance
var resultsList = React.createRef();

function newResults(results){
  if(results === null){
    console.error("No Results!");
    return;
  }
  console.log(results.data);
  resultsList.current.changeResults(results.data);
}

function onClickChangeDrawer(e){
  photoDrawer.current.openCloseDrawer();
}

export default function ShahnozaApplication() {
  return (
  <React.StrictMode>
      <CssBaseline />
      <AppNavBar></AppNavBar>
      <Container maxWidth="lg" id="main-container">
        <WelcomeTitle text="Welcome to Shahnoza"/>
        <Container className="card-container">
        <ReactUploadImage onResponse={newResults} url={domainName + "/upload"} formClass="app-form" />
          <PictureOptionCard onClick={onClickChangeDrawer}/>
        </Container>
        <Container maxWidth="md">
          <ResultsList results={[]} ref={resultsList}/>
        </Container>
        <PhotoDrawer ref={photoDrawer} url={domainName + "/upload"} onResponse={newResults}/>
      </Container>
  </React.StrictMode>
  );
}

export function WelcomeTitle(props){
  return <h1 className="welcome-title">{props.text}</h1>;
}

ReactDOM.render(<ShahnozaApplication />, document.getElementById("root"));
serviceWorker.unregister();
