import { CART_ITEM_ACTION_KEYWORD } from './cart-items.keywords';

export const addItem = item => ({
    type: CART_ITEM_ACTION_KEYWORD.ADD_ITEM,
    payload: item
})

export const toggleComponent = () => ({
    type: CART_ITEM_ACTION_KEYWORD.TOGGLE
})