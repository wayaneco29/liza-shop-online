import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart-items/cart-items.actions';

import { addCartItems } from '../../firebase/firebase.utils';

import CustomButton from '../custom-button/custom-button.component';

import './item.styles.scss';

const Item = ({ items, addItem, userId }) => {
    const { imageUrl, name, price } = items;
    return (
        <div className="item">
            <img src={`${imageUrl}`} alt={`${name}`} className="item-image" />
            <div className="description-container">
                <span className="item-title">{name}</span>
                <span className="item-price">{price}</span>
            </div>
            <CustomButton onClick={() => {
                addCartItems(userId.id, items)
            }} isCart>Add to cart</CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    userId: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Item);