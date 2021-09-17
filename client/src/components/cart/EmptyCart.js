import { Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import useStyles from './emptyCartStyles';

const EmptyCart = () => {
    const classes = useStyles();

    return (
        <Typography variant='subtitle1'>
            You have no items in your shopping cart,&nbsp;
            <Link to='/' className={classes.link}>start adding some</Link>!
        </Typography>
    )
}

export default EmptyCart;
