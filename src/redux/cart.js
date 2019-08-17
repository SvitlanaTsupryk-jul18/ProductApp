export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const reducer = (state = [], action) => {
    switch (action.type) {

        case ADD_TO_CART:
            let items = [...state];
            const addingItem = items.find(item => item.product.id === action.product.id);

            if (addingItem) {
                items = [...state].map(item => {
                    if (item === addingItem) {
                        return { ...item, count: item.count + 1 }
                    } else {
                        return item;
                    }
                });
            } else {
                items.push({ id: action.product.id, product: action.product, count: 1 });
            }
            return items;

        case REMOVE_FROM_CART:
            const deletingItem = [...state].find(item => item.product.id === action.product.id);
            let copy;

            if (deletingItem.count > 1) {
                copy = [...state].map(item => {
                    if (item === deletingItem) {
                        return { ...item, count: item.count - 1 }
                    } else return item;

                });
            } else {
                copy = [...state].filter(item => (item !== deletingItem));
            }
            return copy;
        default:
            return state;
    }

};

export default reducer;