import React from 'react';
import { connect } from 'react-redux';
import { ADD_TO_CART } from '../redux/cart';
import { REMOVE_FROM_CART } from '../redux/cart';

const Cart = ({ cartItems = [], addToCart, removeFromCart }) => (
    <div>
        <h2>Product Cart</h2>
        <ol className="Cart">
            {
                cartItems.map((item) => (
                    <li key={item.id}>
                        {item.product.title} - {item.product.price}$ -
                        <button type="button" onClick={() => addToCart(item)}>+</button>
                        {item.count}wt
                        <button type="button" onClick={() => removeFromCart(item)}>-</button>
                    </li>
                ))
            }
        </ol>
    </div>
    // <span>{user.name}</span>
);

const mapState = (state) => {
    return {
        cartItems: state.cartItems,
    };
};

const mapDispatch = (dispatch) => ({
    addToCart: (product) => dispatch({ type: ADD_TO_CART, product: product }),
    removeFromCart: (product) => dispatch({ type: REMOVE_FROM_CART, product: product }),
});



export default connect(mapState, mapDispatch)(Cart);