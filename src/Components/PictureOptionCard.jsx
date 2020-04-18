/*
 * Tristan Hilbert
 * 4/18/2020
 * Picture Option Card ReactJS
 * 
 */

 import React from "react";
 import "./PictureOptionCard.css";

 import Card from "@material-ui/core/Card";
 import Button from "@material-ui/core/Button";

 class PictureOptionCard extends React.Component{
     render(){
         return (
            <Card className="app-card">
                <h1>Take a Picture!</h1>
                <Button variant="contained">New Photo!</Button>
            </Card>
         );
     }
 }

export default PictureOptionCard;