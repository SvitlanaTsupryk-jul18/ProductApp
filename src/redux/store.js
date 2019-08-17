import { createStore, combineReducers } from 'redux';
import productReduser from './products';
import cartReducer, { getCartItems, getTotalPrice } from './cart';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    products: productReduser,
    cartItems: cartReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;

export const getCartItemsCount = (state) => {
    return getCartItems(state.cartItems);
};

export const getCartTotalPrice = (state) => {
    return getTotalPrice(state.cartItems);
};

