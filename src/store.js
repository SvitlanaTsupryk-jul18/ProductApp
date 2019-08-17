import { createStore } from 'redux';
import productReduser from './redux/products';
import cartReducer from './redux/cart';


const reducer = (state = {}, action) => {
    return {
        products: productReduser(state.products, action),
        cartItems: cartReducer(state.cartItems, action),
    }
};

const store = createStore(reducer);

export default store;

store.subscribe(() => {
    console.log("store -", store.getState());
})