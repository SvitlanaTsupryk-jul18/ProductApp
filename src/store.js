import { createStore } from 'redux';
export const SET_PRODUCTS = "SET_PRODUCTS";
export const ADD_TO_BASKET = "ADD_TO_BASKET";

const reducer = (state, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products,
            }
        case ADD_TO_BASKET:
            const items = [...state.basketItems];

            if (items.find(item => item.product.id === action.product.id)) {
                items.map(item => {
                    if (item.product.id === action.product.id) {
                        item.count++;
                    }
                    return item;
                });
            } else {
                items.push({ id: Date.now(), product: action.product, count: 1 });
            }

            return {
                ...state,
                basketItems: items,
            };
        default:
            return state;
    }

}
const initialState = {
    basketItems: [],
    products: []
}
const store = createStore(reducer, initialState);

export default store;

store.subscribe(() => {
    console.log("store -", store.getState());
})