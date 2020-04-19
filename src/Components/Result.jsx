import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
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
    <Card className="card">
        <CardHeader
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
            }
            title={name}
            subheader="September 14, 2016"
        />
        <CardMedia
            className='media'
            src={img}
            height={100}
            title="Paella dish"
        />
        <CardContent>
        </CardContent>
    </Card>
    );
}

export default Result;