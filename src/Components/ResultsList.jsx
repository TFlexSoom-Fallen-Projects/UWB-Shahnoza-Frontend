/*
 * Tristan Hilbert
 * 4/18/2020
 * Results list React Component
 * 
 */

import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

class ResultsList extends React.Component{
    constructor(props){
        super(props);

        // TYPE :: listOfResults :: []
        this.state = {
            results: props.results
        }

        this.changeResults = this.changeResults.bind(this);
    }

    changeResults(newResults){
        this.setState({results: newResults});
    }


    render(){
        if(this.state.results.length === 0){
            return null;
        }else{

            const resultsItems = this.state.results.map((result, index) => 
                <Paper key={index} elevation={3}>
                    <a className="result-anchor-container" href={result.url}>
                        <img className="result-pic" width="100%" src={result.imgsrc}></img>
                        <p className="result-name">{result.name}</p>
                        <p className="result-price">{result.price}</p>
                    </a>
                </Paper> 
            );

            return (
                <Grid container spacing={5}>
                    {resultsItems}
                </Grid>
            )
        }
    }



    

}

export default ResultsList;