import React from 'react';

const CartItem = (props) => {

    const {price, title, qty} = props.product;

    return (
        <div className="cart-item">
        <div className="left-block">
            <img className="cart-image" src={props.product.img}></img>
        </div>
        <div className="right-block">
            <div>{title}</div>
            <div>{price}</div>
            <div>{qty}</div>
        </div>
        <div className="cart-item-actions">
            <div>
                <img className="action-icons" 
                src="https://www.flaticon.com/premium-icon/icons/svg/3303/3303893.svg" 
                alt="plus"
                onClick = {() => props.onIncreaseQuantity(props.product)}></img>
                <img className="action-icons" 
                src="https://www.flaticon.com/premium-icon/icons/svg/2985/2985073.svg" 
                alt="minus"
                onClick = {() => props.onDecreasingQuantity(props.product)}></img>
                <img className="action-icons" 
                src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1617407128~hmac=e0aad1d8552ee358d810248f4c5f0188" 
                alt="delete"
                onClick = {() => props.onDeletingProduct(props.product.id)}></img>
            </div>
        </div>
    </div>
    )
}

export default CartItem;