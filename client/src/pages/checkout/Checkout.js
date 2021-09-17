import { mergeClasses } from '@material-ui/styles';
import React from 'react';
import useStyles from './checkoutStyles';
import { CheckoutForm } from 'src/components';

const Checkout = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.toolbar} />
            <CheckoutForm />
        </>
    );
}

export default Checkout;
