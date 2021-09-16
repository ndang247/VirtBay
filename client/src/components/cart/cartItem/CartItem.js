import React from 'react';
import useStyles from './cartItemStyles';
import {
    Typography, Button, Card, CardActions,
    CardContent, CardMedia
} from '@material-ui/core';

const CartItem = ({ item }) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h5'>{item.name}</Typography>
                <Typography variant='h5'>{item.price.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button disableElevation={true} type='button' size='small'>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button disableElevation={true} type='button' size='small'>+</Button>
                </div>
                <Button
                    disableElevation={true}
                    variant='contained'
                    type='button'
                    color='secondary'
                >
                    Remove
                </Button>
            </CardActions>
        </Card>
    );
}

export default CartItem;
