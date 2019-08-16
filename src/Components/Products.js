import React from 'react';
import { connect } from 'react-redux';
import { ADD_TO_BASKET } from './../store'

const Products = ({ products = [], addToBasket }) => (
    <div className="products">
        {
            products.map(product => (
                <div key={product.id}>
                    <h3>{product.title} </h3>
                    <p>{product.price}$</p>
                    <p>{product.description}</p>
                    <button type="button" onClick={() => addToBasket(product)}>ADD</button>
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
    addToBasket: (product) => dispatch({ type: ADD_TO_BASKET, product: product }),
});

export default connect(mapState, mapDispatch)(Products);