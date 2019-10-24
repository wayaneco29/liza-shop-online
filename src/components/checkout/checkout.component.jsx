import React from 'react';
import { connect } from 'react-redux';

import { MdDeleteForever } from "react-icons/md";

import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../stripe/stripe.component';
import { selectCartCollections, selectCartCollectionTotalPrice } from '../../redux/cart-items/cart-items.selector';
import CheckoutItem from '../checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = ({ cartItems, totalPrice }) => (
    <div className="checkout">
        <div className="checkout-inner">
        <div className="title-block">
            <div className="product"> Product </div>
            <div className="name"> Name </div>
            <div className="quantity" > Quantity</div>
            <div className="price" >Price</div>
            <div className="remove"><MdDeleteForever size={30} /></div>
        </div>
        {
            cartItems.length ? cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} item={cartItem}/>
            )) :
                <h2 className="no-items">NO ITEMS</h2>
        }
        <div className="checkout-total">
            <p className="total">TOTAL: </p>
            <p>${totalPrice}</p>
        </div>
        <p className="warning-text">
            ***This is only a test to proceed to the payment please use the following: <br /><br />
            <strong>Email: </strong> Any email e.i sample@test.com <br />
            <strong>Card number:</strong> 4242-4242-4242-4242 <br />
            <strong>MM/YY:</strong> 01/20 <br />
            <strong>CVC:</strong> 123
        </p>
        <div className="stripe">
            <StripeCheckoutButton total={totalPrice} />
        </div>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartCollections,
    totalPrice: selectCartCollectionTotalPrice
})

export default connect(mapStateToProps)(Checkout);