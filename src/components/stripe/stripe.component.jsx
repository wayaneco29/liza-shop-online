import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ total }) => {
    const convertedPrice = total * 100;
    const stripeKey = 'pk_test_DedhFi1KRb91z1YXQ4Okaq2Q00lRNusH6E';

    const token = (token) => {
        console.log(token);
        alert("Payment Successfull");
    }

    return (
        <StripeCheckout
            name="Li-Shop Online Selling"
            email="li-shop.98labs.io"
            token={token}
            amount={convertedPrice}
            panelLabel={`Total payment`}
            stripeKey={stripeKey}
        />
    )
}

export default StripeCheckoutButton;