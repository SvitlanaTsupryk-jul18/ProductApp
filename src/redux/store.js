import { createStore, combineReducers } from 'redux';
import productReduser from './products';
import cartReducer, { getCartItems, getTotalPrice } from './cart';


const reducer = combineReducers({
    products: productReduser,
    cartItems: cartReducer,
});

const store = createStore(reducer);

export default store;


export const getCartItemsCount = (state) => {
    return getCartItems(state.cartItems);
};

export const getCartTotalPrice = (state) => {
    return getTotalPrice(state.cartItems);
};

store.subscribe(() => {
    console.log("store -", store.getState());
})