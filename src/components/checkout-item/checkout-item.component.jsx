import React from 'react';
import { connect } from 'react-redux';

import { firestore } from '../../firebase/firebase.utils';

import './checkout-item.styles.scss';

const CheckoutItem = ({item, user}) => {
    const { imageUrl, name, price, quantity } = item;

    const increaseQuantity = async (userId, name) => {
        try{
            const ref = await firestore.doc(`users/${userId}/cartItems/${name.replace(/ +/g,"")}`)
            const newQuantity = quantity + 1;
            const origPrice = price/quantity;

            ref.set({quantity:newQuantity,price: origPrice*newQuantity}, {merge: true})

        } catch (err) {
            throw new Error(err.message)
        }
    }

    const decreaseQuantity = async (userId, name) => {
        try {
            const ref = await firestore.doc(`users/${userId}/cartItems/${name.replace(/ +/g,"")}`);
            if(quantity === 1) {
                ref.delete();
                return;
            }
            const newQuantity = quantity - 1;
            const origPrice = price/quantity;
            ref.set({quantity:newQuantity,price: origPrice*newQuantity}, {merge: true})

        } catch(err) {
            throw new Error(err.message)
        }
    }

    const deleteData = async(userId, name) => {
        try {
            const ref = await firestore.doc(`users/${userId}/cartItems/${name.replace(/ +/g,"")}`);
            await ref.delete();
            return;
        } catch(err) {
            throw new Error(err.message)
        }
    }
    return (
    <div className="checkout-item">
        <div className="checkout-image-container">
            <img src={imageUrl} alt={name} className="checkout-image" />
        </div>
        <div className="checkout-name">{name}</div>
        <div className="checkout-quantity"><span onClick={() => {
            decreaseQuantity(user.id, name)
        }}>&#11164;</span>{quantity}<span onClick={() => {
            increaseQuantity(user.id, name);
        }}>&#11166;</span></div>
        <div className="checkout-price">{price}</div>
        <div className="checkout-remove" onClick={() => {
            deleteData(user.id, name)
        }}>&#10005;</div>
    </div>
)}

const mapStateToProps = state => ({
    user: state.user.currentUser
})

export default connect(mapStateToProps)(CheckoutItem);