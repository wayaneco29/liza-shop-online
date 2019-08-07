import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ imageUrl, name, price, quantity }) => (
    <div className="checkout-item">
        <div className="checkout-image-container">
            <img src={imageUrl} alt={name} className="checkout-image" />
        </div>
        <div className="checkout-name">{name}</div>
        <div className="checkout-quantity">{quantity}</div>
        <div className="checkout-price">{price}</div>
        <div className="checkout-remove">&#10005;</div>
    </div>
)

export default CheckoutItem;