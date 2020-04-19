/*
 * Tristan Hilbert
 * 4/18/2020
 * Results list React Component
 * 
 */

import React from "react";
import Grid from "@material-ui/core/Grid";
import Result from './Result';

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
        var sortByPrice = (a, b) => {
            var aprice = a.price
            var bprice = b.price
            aprice = parseFloat(aprice.substr(1, aprice.length - 1))
            bprice = parseFloat(bprice.substr(1, bprice.length - 1))
            return aprice - bprice
        }
        if(this.state.results.length === 0){
            return null;
        }else{
            const resultsItems = this.state.results.sort(sortByPrice).map((result, index) => 
                <Result {... result} />
            );
            return (
                <Grid container spacing={1} width="100%" flexDirection="row" flexWrap="wrap">
                    {resultsItems}
                </Grid>
            )
        }
    }



    

}

export default ResultsList;