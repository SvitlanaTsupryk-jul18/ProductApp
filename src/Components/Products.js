import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './../redux/cart';

const Products = ({ products = [], addToCart }) => (
    <div className="products">
        {
            products.map(product => (
                <div key={product.id} className="product">
                    <h3>{product.title} </h3>
                    <p className="product__text">{product.description}</p>
                    <p className="product__price">{product.price} $</p>
                    <button type="button" className="btn" onClick={() => addToCart(product)}>BUY</button>
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


const mapDispatch = { addToCart };

export default connect(mapState, mapDispatch)(Products);