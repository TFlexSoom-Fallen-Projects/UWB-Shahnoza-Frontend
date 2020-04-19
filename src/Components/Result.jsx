import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Result(props) {
    var [name, setName] = useState(props.name)
    const [url, setUrl] = useState(props.url)
    const [price, setPrice] = useState(props.price)
    const [img, setImg] = useState(props.imgsrc)
    
    if (name.length > 55) {
        name = name.substring(0, 55) + "..."
    }

    return (
    <Grid item xs={3} style={styles.card}>
        <Card className="card" >
            <CardMedia
                title={name}
            >
                <img style={styles.media} src={img} align="center"></img>
            </CardMedia>
            <CardContent>
                <Link href={url}>
                <Typography component="h" href={url}>{name}</Typography>
                </Link>
                <Typography component="p" color="textSecondary">
                    {price}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
    );
}

const styles = {
    card: {
        width: "50rem",
        height: "30rem",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        textAlign:"center"
    },
    media: {
        width: "10rem", 
        height: "15rem",
        padding:"20px"
    },
    header: {
    },
    content: {
        "max-width": 200,
        "max-height": 50
    }
}

export default Result;