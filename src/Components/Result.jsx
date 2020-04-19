import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Result(props) {
    const [name, setName] = useState(props.name)
    const [url, setUrl] = useState(props.url)
    const [price, setPrice] = useState(props.price)
    const [img, setImg] = useState(props.imgsrc)

    return (
    <Grid item xs={4} style={styles.card}>
        <Card className="card">
            <CardHeader
                /*action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                style={styles.header}
                title={name}*/
                subheader={price}
            />
            <CardMedia
                title={name}
            >
                <img style={styles.media} src={img}></img>
            </CardMedia>
            <CardContent style={styles.content}>
                <Typography>{name}</Typography>
            </CardContent>
        </Card>
    </Grid>
    );
}

const styles = {
    card: {
        width: "25rem",
        height: "30rem",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        paddingLeft: "4rem",
        paddingRight: "4rem",
    },
    media: {
        height: "20rem",
        width: "20rem"
    },
    header: {
    },
    content: {
        "max-width": 200,
        "max-height": 50
    }
}

export default Result;