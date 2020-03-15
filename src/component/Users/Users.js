import React, { useState } from 'react';
import data from '../../data';
import './Users.css';
import UserDetails from '../UserDetails/UserDetails';
import UserCart from '../UserCart/UserCart';
const Users = () => {
   const userData = data.slice(0,15);
   const [userNames,setUser] = useState(userData);
   //
   const [uCart,setUserCart] = useState([]);
   //
   const handleUserCart = (cart) =>{
       const newCart = [...uCart,cart];
       //
       setUserCart(newCart);
   } 
   //
   
//    console.log(userData);
    return (
        <div className="user-container">
            <div className="user-details">
                {
                   userNames.map(userName=>
                    <UserDetails userName = {userName}
                    handleUserCart={handleUserCart}
                    ></UserDetails>
                    )
                }
            </div>
        <div className="cart-container">
            <UserCart uCart = {uCart}
            ></UserCart>
        </div>
        </div>
    );
};

export default Users;