import React, { useState, useEffect } from 'react';
import useStyles from './checkoutStyles';
import { CheckoutForm } from 'src/components';
import { commerce } from 'src/lib/commerce';

const Checkout = ({ cart, order, handleCaptureCheckout, error }) => {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                setCheckoutToken(token);
            } catch (error) {
                console.log(error);
            }
        }
        generateToken();
    }, [cart]);

    return (
        <>
            <div className={classes.toolbar} />
            {checkoutToken && <CheckoutForm
                checkoutToken={checkoutToken}
                order={order}
                handleCaptureCheckout={handleCaptureCheckout}
                error={error} />}
        </>
    );
}

export default Checkout;
