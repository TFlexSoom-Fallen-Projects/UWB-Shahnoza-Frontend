import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core/';
import "./AppFooter.css";
/*
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
*/

function AppFooter(props) {
    /*const theme = createMuiTheme();
    theme.typography.h3 = {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
        },
    }*/

    return (
        <div className="app-footer">
            {/*<Grid container spacing={0} width={1} flexDirection="row" flexWrap="wrap">
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={6}>
                </Grid>
            </Grid>*/}
                    <p className="app-nav-footer-title"><b>What is #snza?</b></p>
                    <p className="app-nav-footer-desc">Shahnoza, or #snza for short, is a ML- and cloud-based app that answers the following question: 
                    Where can I buy this thing? Simply take a picture of the thing, and we'll tell you where to buy it!</p>
                    <p className="app-nav-footer-title"><b>Why?</b></p>
                    <p className="app-nav-footer-desc">What does Shahnoza mean, you might ask? 
                    We're not sure. We're just programmers who don't know how to choose names. We recommend <a href="https://www.behindthename.com/random/">
                        this random name generator</a> if you happened to be a programmer in need!</p>
                    <p className="app-nav-footer-title"><b>Who are we?</b></p>
                    <p className="app-nav-footer-desc">{"We are UWBHacks team Shahnoza! Comprised of genius coders "}
                    <a href="https://github.com/Derposoft">Viswanath Chadalapaka</a>{", "}
                    <a href="https://github.com/jaygrinols"> Jay Grinols</a>{", and "}
                    <a href="https://github.com/TFlexSoom">Tristan Hilbert</a>. Feel free to give us a star :^)</p>
        </div>
    )
}

export default AppFooter;