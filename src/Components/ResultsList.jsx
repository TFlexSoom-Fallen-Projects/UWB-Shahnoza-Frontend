/*
 * Tristan Hilbert
 * 4/18/2020
 * Results list React Component
 * 
 */

import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Link from '@material-ui/core/Link';
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
        var sortByPrice = (a, b) => {
            var aprice = a.price
            var bprice = b.price
            aprice = parseFloat(aprice.substr(1, aprice.length - 1))
            bprice = parseFloat(bprice.substr(1, bprice.length - 1))
            return aprice - bprice
        }
        this.setState({
            results: newResults
        })
    }

    render(){

    const styles = {
        card: {
            width: "50rem",
            height: "30rem",
            paddingTop: "3rem",
            paddingBottom: "3rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            textAlign: "center"
        },
        media: {
            width: "10rem",
            height: "15rem",
            padding: "20px"
        },
        header: {
        },
        content: {
            "max-width": 200,
            "max-height": 50
        }
    }
        var resultsItems = this.state.results.sort(sortByPrice).map((result, index) => {
            return (
                <Grid item xs={3} style={styles.card}>
                    <Card className="card" >
                        <CardMedia
                            title={result.name}
                        >
                            <img style={styles.media} src={result.imgsrc} align="center"></img>
                        </CardMedia>
                        <CardContent>
                            <Link href={result.url}>
                                <Typography component="h" href={result.url}>{result.name}</Typography>
                            </Link>
                            <Typography component="p" color="textSecondary">
                                {result.price}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>)
        })
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