import React from 'react';
import { connect } from 'react-redux';
import { ADD_TO_CART } from './../store';

const Products = ({ products = [], addToCart }) => (
    <div className="products">
        {
            products.map(product => (
                <div key={product.id}>
                    <h3>{product.title} </h3>
                    <p>{product.price}$</p>
                    <p>{product.description}</p>
                    <button type="button" onClick={() => addToCart(product)}>ADD</button>
                </div>
            ))
        }
    </div>
);

const mapState = (state) => {
    return {
        products: state.products,
    };
};


const mapDispatch = (dispatch) => ({
    addToCart: (product) => dispatch({ type: ADD_TO_CART, product: product }),
});

export default connect(mapState, mapDispatch)(Products);