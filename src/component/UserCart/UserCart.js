import React from 'react';
import './UserCart.css';
const UserCart = (props) => {
    const cart = props.uCart;
    let total = 0;
    for(let i = 0;i<cart.length;i++){
        const grandTotal = cart[i];
        total =  total +grandTotal.salary ;
    }
    return (
        <div className="cart-design">
            <h3>Total Added: {cart.length} </h3>
            <h3>Total Salary Count: <br/> 
            $ {total}
            </h3>
        </div>
    );
};

export default UserCart;