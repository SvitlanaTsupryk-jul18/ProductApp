import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from './../redux/cart';

const Cart = ({ cartItems = [], addToCart, removeFromCart }) => (
    <div>
        <h2>Shopping Cart</h2>
        <ol className="cart">
            {cartItems.map((item) => (
                <li key={item.id} className="cart__item">
                    <span>{item.product.title}</span>
                    <span>{item.product.price} $</span>
                    <span>
                        <button type="button" className="btn btn--cart" onClick={() => addToCart(item)}>+</button>
                        {item.count}
                        <button type="button" className="btn btn--cart" onClick={() => removeFromCart(item)}>-</button>
                    </span>
                </li>
            ))}
        </ol>
        {cartItems.length
            ? (<button type="button" className="btn btn--buy" onClick={() => alert("Congrats!")}>buy now</button>)
            : (<p>There is nothing here yet</p>)}
    </div>
    // <span>{user.name}</span>
);

const mapState = (state) => {
    return {
        cartItems: state.cartItems,
    };
};

const mapDispatch = { addToCart, removeFromCart };

export default connect(mapState, mapDispatch)(Cart);