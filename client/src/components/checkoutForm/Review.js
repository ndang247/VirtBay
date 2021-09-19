import React from 'react'
import {
    Typography, List, ListItem, ListItemText,
    Divider
} from '@material-ui/core';

const Review = ({ checkoutToken, shippingData, total }) => {
    return (
        <>
            <Typography variant='h6' gutterBottom>Order Summary</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{ padding: '10px 0' }} key={product.name}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                        <Typography variant='body1'>{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{ padding: '10px 0' }}>
                    <ListItemText primary='Shipping' />
                    <Typography variant='subtitle1' style={{ fontWeight: 700 }}>
                        {shippingData.options.map((option) => (
                            <React.Fragment key={option.id}>{option.label}</React.Fragment>
                        ))}
                    </Typography>
                </ListItem>
                <ListItem style={{ padding: '10px 0' }}>
                    <ListItemText primary='Subtotal' />
                    <Typography variant='subtitle1' style={{ fontWeight: 700 }}>
                        {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem style={{ padding: '10px 0' }}>
                    <ListItemText primary='Total' />
                    <Typography variant='subtitle1' style={{ fontWeight: 700 }}>
                        ${Number(total).toFixed(2)}
                    </Typography>
                </ListItem>
            </List>
        </>
    );
}

export default Review;
