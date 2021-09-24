import React, { useEffect, useState } from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Review } from 'src/components';
import _ from 'lodash';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ shippingData, checkoutToken, backStep, handleCaptureCheckout, nextStep, timeOut }) => {
    const [total, setTotal] = useState(0);

    const calculateTotal = () => {
        const shipping = _.find(checkoutToken.live.shipping.available_options, { id: shippingData.shippingOption });
        setTotal(shipping.price.raw + checkoutToken.live.subtotal.raw);
    }

    useEffect(() => calculateTotal(), []);

    const handleSubmit = async (e, elements, stripe) => {
        e.preventDefault();
        if (!elements || !stripe) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

        if (error) console.log(error);
        else {
            console.log(shippingData);
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: {
                    firstname: shippingData.firstName,
                    lastname: shippingData.lastName,
                    email: shippingData.email
                },
                shipping: {
                    name: 'Primary',
                    street: shippingData.address1,
                    town_city: shippingData.city,
                    postal_zip_code: shippingData.zipOrPostal,
                    county_state: shippingData.shippingSubdivision,
                    country: shippingData.shippingCountry
                },
                fulfillment: { shipping_method: shippingData.shippingOption },
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id
                    }
                },
                billing: {
                    name: `${shippingData.firstName} ${shippingData.lastName}`,
                    street: shippingData.address1,
                    town_city: shippingData.city,
                    postal_zip_code: shippingData.zipOrPostal,
                    county_state: shippingData.shippingSubdivision,
                    country: shippingData.shippingCountry
                }
            }
            handleCaptureCheckout(checkoutToken.id, orderData);
            timeOut();
            nextStep();
        }
    }

    return (
        <>
            <Review checkoutToken={checkoutToken} shippingData={shippingData} total={total} />
            <Divider />
            <Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>Payment Method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br /><br />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button variant='outlined' onClick={backStep} disableElevation={true}>Back</Button>
                                <Button type='submit' variant='contained' disabled={!stripe} color='primary' disableElevation={true}>
                                    Pay ${Number(total).toFixed(2)}
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    );
}

export default PaymentForm;
