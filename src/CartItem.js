import React from 'react';

class CartItem extends React.Component{

    constructor(){
        super();

        this.state = {
            price: 999,
            title: 'Puma 113',
            qty: 1,
            img: ''
        }
    }

    increaseQuantity = () => {
        this.state.qty = this.state.qty + 1;
        console.log(this.state.qty);
    }

    decreaseQuantity = () => {
        this.state.qty = this.state.qty - 1;
        console.log(this.state.qty);
    }
    render() {

        const {price, title, qty} = this.state;

        return (
            <div className="cart-item">
            <div className="left-block">
                <img className="cart-image" src=""></img>
            </div>
            <div className="right-block">
                <div>{price}</div>
                <div>{title}</div>
                <div>{qty}</div>
            </div>
            <div className="cart-item-actions">
                <div>
                    <img className="action-icons" 
                    src="https://www.flaticon.com/premium-icon/icons/svg/3303/3303893.svg" 
                    alt="plus"
                    onClick = {this.increaseQuantity}></img>
                    <img className="action-icons" 
                    src="https://www.flaticon.com/premium-icon/icons/svg/2985/2985073.svg" 
                    alt="minus"
                    onClick = {this.decreaseQuantity}></img>
                    <img className="action-icons" 
                    src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1617407128~hmac=e0aad1d8552ee358d810248f4c5f0188" 
                    alt="delete"></img>
                </div>
            </div>
        </div>
        )
    }
}

export default CartItem;