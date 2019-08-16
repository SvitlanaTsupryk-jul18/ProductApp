import { createStore } from 'redux';
export const SET_PRODUCTS = "SET_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const reducer = (state, action) => {
    switch (action.type) {

        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products,
            }

        case ADD_TO_CART:
            let items = [...state.cartItems];
            const addingItem = items.find(item => item.product.id === action.product.id);

            if (addingItem) {
                items = [...state.cartItems].map(item => {
                    if (item === addingItem) {
                        return { ...item, count: item.count + 1 }
                    } else {
                        return item;
                    }
                });
            } else {
                items.push({ id: action.product.id, product: action.product, count: 1 });
            }

            return {
                ...state,
                cartItems: items,
            };

        case REMOVE_FROM_CART:
            const deletingItem = [...state.cartItems].find(item => item.product.id === action.product.id);
            let copy;

            if (deletingItem.count > 1) {
                copy = [...state.cartItems].map(item => {
                    if (item === deletingItem) {
                        return { ...item, count: item.count - 1 }
                    } else return item;

                });
            } else {
                copy = [...state.cartItems].filter(item => (item !== deletingItem));
            }

            return {
                ...state,
                cartItems: copy,
            };
        default:
            return state;
    }

}
const initialState = {
    cartItems: [],
    products: []
}
const store = createStore(reducer, initialState);

export default store;

store.subscribe(() => {
    console.log("store -", store.getState());
})