import { CART_ITEM_ACTION_KEYWORD } from './cart-items.keywords';

import { collectItemRedandant } from './cart-items.utils';

const INITIAL_STATE = {
    toggle: true,
    cartItem: []
}

const cartItem = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CART_ITEM_ACTION_KEYWORD.TOGGLE:
            return {
                ...state,
                toggle: !state.toggle
            }
        case CART_ITEM_ACTION_KEYWORD.ADD_ITEM:
            return {
                ...state,
                cartItem: action.payload
            }
        default:
            return state;
    }
}

export default cartItem;