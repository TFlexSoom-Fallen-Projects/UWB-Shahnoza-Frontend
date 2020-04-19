/*
 * Tristan Hilbert
 * 4/18/2020
 * Results list React Component
 * 
 */

import React from "react";
import Grid from "@material-ui/core/Grid";
import Result from './Result';
import { Typography, Fade, Container } from "@material-ui/core";

class ResultsList extends React.Component{
    constructor(props){
        super(props);

        // TYPE :: listOfResults :: []
        this.state = {
            results: props.results,
            error: ""
        }

        this.changeResults = this.changeResults.bind(this);
    }

    changeResults(newResults){
        if (newResults.length === 0) {
            this.setState({error: "Sorry. No Objects found! We know not being able to spend money is sad :(... so try searching for something else!"})
        }
        console.log("ARRIVED" + newResults)
        this.setState({results: newResults})
        //this.forceUpdate()
        /*var resultsItems = this.state.results.sort(sortByPrice).map((result, index) => {
            return (<Result {...result} />)
        })*/
        //this.setState({resItems: })
    }

    render(){
        var resultsItems = this.state.results.sort(sortByPrice).map((result, index) => {
            return (<Result {... result} />)
        });
        //console.log("new resitems " + resultsItems, resultsItems[0], resultsItems.length)
        var sortByPrice = (a, b) => {
            var aprice = a.price
            var bprice = b.price
            aprice = parseFloat(aprice.substr(1, aprice.length - 1))
            bprice = parseFloat(bprice.substr(1, bprice.length - 1))
            return aprice - bprice
        }
        if(this.state.results.length === 0){
            return (<Container><p style={{ fontSize: '4vw' }}>{this.state.error}</p></Container>)
        }else{
            return (
                <div>
                    <Grid container spacing={1} width="100%">
                        {resultsItems}
                    </Grid>
                </div>
            )
        }
    }



    

}

export default ResultsList;