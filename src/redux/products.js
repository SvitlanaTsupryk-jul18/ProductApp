const SET_PRODUCTS = "SET_PRODUCTS";

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        products: products,
    };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return action.products;

        default:
            return state;
    }
};

export default reducer;

