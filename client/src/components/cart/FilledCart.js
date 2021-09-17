import { Grid, Typography, Button } from '@material-ui/core';
import React from 'react';
import useStyles from './filledCartStyles';
import { CartItem } from 'src/components';
import { Link } from 'react-router-dom';

const FilledCart = ({ cart, handleEmptyCart, handleUpdateQty, handleRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem
                            item={item}
                            handleUpdateQty={handleUpdateQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />
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
                        onClick={handleEmptyCart}
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
                        component={Link}
                        to='/checkout'
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    );
}

export default FilledCart;
