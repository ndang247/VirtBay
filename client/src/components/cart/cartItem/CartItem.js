import React from 'react';
import useStyles from './cartItemStyles';
import {
    Typography, Button, Card, CardActions,
    CardContent, CardMedia
} from '@material-ui/core';

const CartItem = ({ item, handleUpdateQty, handleRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h6'>{item.name}</Typography>
                &nbsp;
                <Typography variant='h6'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button
                        disableElevation={true}
                        type='button'
                        size='small'
                        onClick={() => handleUpdateQty(item.id, item.quantity - 1)}
                    >-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button
                        disableElevation={true}
                        type='button'
                        size='small'
                        onClick={() => handleUpdateQty(item.id, item.quantity + 1)}
                    >+</Button>
                </div>
                <Button
                    disableElevation={true}
                    variant='contained'
                    type='button'
                    color='secondary'
                    onClick={() => handleRemoveFromCart(item.id)}
                >
                    Remove
                </Button>
            </CardActions>
        </Card>
    );
}

export default CartItem;
