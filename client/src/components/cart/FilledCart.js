import { Grid, Typography, Button } from '@material-ui/core';
import React from 'react';
import useStyles from './filledCartStyles';
import { CartItem } from 'src/components';

const FilledCart = ({ cart }) => {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4'>
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button
                        className={classes.emptyButton}
                        size='large'
                        type='button'
                        variant='contained'
                        color='secondary'
                        disableElevation={true}
                    >
                        Empty Cart
                    </Button>
                    <Button
                        className={classes.checkoutButton}
                        size='large'
                        type='button'
                        variant='contained'
                        color='primary'
                        disableElevation={true}
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    );
}

export default FilledCart;
