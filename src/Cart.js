import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    constructor() {

        super();

        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Mobile',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 400,
                    title: 'Shoes',
                    qty: 5,
                    img: '',
                    id: 2
                },
                {
                    price: 777,
                    title: 'Dress',
                    qty: 9,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    render() {
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (<CartItem product = {product} key = {product.id} />)
                })}
            </div>
        );
    }
}

export default Cart;