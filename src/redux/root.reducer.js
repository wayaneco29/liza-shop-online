import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import cartItem from './cart-items/cart-items.reducer';

export default combineReducers({
    user: userReducer,
    directory: directoryReducer,
    collections: shopReducer,
    cart: cartItem
})