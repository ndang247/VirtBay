import React, { useState, useEffect } from 'react';
import useStyles from './checkoutStyles';
import { CheckoutForm } from 'src/components';
import { commerce } from 'src/lib/commerce';
import { CssBaseline } from '@material-ui/core';
// import { useHistory } from 'react-router-dom';

const Checkout = ({ cart, order, handleCaptureCheckout, error }) => {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const classes = useStyles();
    // const history = useHistory();

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                setCheckoutToken(token);
            } catch (error) {
                console.log(error);
                // history.push('/');
            }
        }
        generateToken();
    }, [cart]);

    return (
        <>
            <CssBaseline />
            <div className={classes.toolbar} />
            {checkoutToken &&
                <CheckoutForm
                    checkoutToken={checkoutToken}
                    order={order}
                    handleCaptureCheckout={handleCaptureCheckout}
                    error={error}
                />}
        </>
    );
}

export default Checkout;
