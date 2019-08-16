import React from 'react';
import { connect } from 'react-redux';

const Basket = ({ basketItems = [] }) => (
    <div>
        <h2>Product Card</h2>
        <ol className="basket">
            {
                basketItems.map((item) => (
                    <li key={item.id}>
                        {item.product.title} - {item.product.price}$ -  {item.count}wt
                    </li>
                ))
            }
        </ol>
    </div>
    // <span>{user.name}</span>
);

const mapState = (state) => {
    return {
        basketItems: state.basketItems,
    };
};


export default connect(mapState)(Basket);