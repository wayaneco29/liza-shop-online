import React from 'react';

import './cart-dropdown-item.styles.scss';

const CartDropdownItem = ({ imageUrl, name, price, quantity }) => (
    <div className="cart-dropdown-item">
        <img src={imageUrl} alt={name} className="dropdown-image" />
        <div className="content-text">
            <div className="price">
                <span>${price}</span>
                <span>&#10005;</span>
                <span>{quantity}</span>
            </div>
        </div>
    </div>
)

export default CartDropdownItem;