import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectToggle = createSelector(
    [selectCart],
    cart => cart.toggle
)

export const selectCartCollections = createSelector(
    [selectCart],
    cart => cart.cartItem
)

export const selectCartCollectionsTotal = createSelector(
    [selectCartCollections],
    cartItem => cartItem ? cartItem.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0) : null
)

export const selectCartCollectionTotalPrice = createSelector(
    [selectCartCollections],
    cartItem => cartItem.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0)
)