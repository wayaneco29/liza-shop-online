import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectToggle, selectCartCollections } from '../../redux/cart-items/cart-items.selector';
import { toggleComponent } from '../../redux/cart-items/cart-items.actions';
import CustomButton from '../custom-button/custom-button.component';
import CartDropdownItem from '../cart-dropdown-item/cart-dropdown-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ toggle, currentItems, dispatch, history }) =>{ 
    return (
    <div className={`${toggle ? 'hide' : 'show'} cart-dropdown`}>
        <div className="item-container">
            {
                currentItems.length ?
                    currentItems.map(item => (
                        <CartDropdownItem key={item.id} {...item} />
                    )) :
                    <h2 className="cart-dropdown-title">NO ITEMS</h2>
            }
        </div>
        <CustomButton isCheckout onClick={() => {
            dispatch(toggleComponent());
            history.push('/checkout');
        }}>
            CHECKOUT
            </CustomButton>
    </div >
)}

const mapStateToProps = createStructuredSelector({
    toggle: selectToggle,
    currentItems: selectCartCollections,
})

export default withRouter(connect(mapStateToProps)(CartDropdown));