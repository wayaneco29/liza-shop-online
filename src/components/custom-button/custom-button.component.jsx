import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isCart, isCheckout, ...props }) => (
    <div
        className={`${isCart ? 'item-button' : ''} ${isCheckout ? 'dropdown-button' : ''} customized-button`} {...props}>
        {children}
    </div>
)

export default CustomButton;