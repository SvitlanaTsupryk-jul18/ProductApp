import { createStore, combineReducers } from 'redux';
import productReduser from './redux/products';
import cartReducer from './redux/cart';


const reducer = combineReducers({
    products: productReduser,
    cartItems: cartReducer,
});

const store = createStore(reducer);

export default store;

store.subscribe(() => {
    console.log("store -", store.getState());
})