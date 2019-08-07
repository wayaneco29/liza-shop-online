import React from 'react';

import Directory from '../../components/directory/directory.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import './homepage.styles.scss';

const HomePage = () => (
    <React.Fragment>
        <Directory />
        <CartDropdown />
    </React.Fragment>
)

export default HomePage;