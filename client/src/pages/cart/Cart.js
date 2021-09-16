import React from 'react';
import {
    Container, Typography, Button, Grid
} from '@material-ui/core';
import { EmptyCart, FilledCart } from 'src/components';
import useStyles from './cartStyles';

const Cart = ({ cart }) => {
    const classes = useStyles();
    const isEmpty = !cart.total_items;

    // TODO: Improve the loading UI.
    if (!cart.line_items) return <Typography className={classes.title} variant='h3'>Loading...</Typography>

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h4' gutterBottom>Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart /> : <FilledCart cart={cart} />}
        </Container>
    );
}

export default Cart;
