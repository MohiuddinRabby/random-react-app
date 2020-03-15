import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './UserDetails.css';
const UserDetails = (props) => {
    console.log(props)
    const {name, img, salary, email} = props.userName;
    return (
        <div className="user-info">
            <h4>Name: {name}</h4>
            <img src={img} alt=""/>
            <h4>Mail: {email}</h4>
            <h4>Salary: ${salary}</h4>
        <button onClick={()=>props.handleUserCart(props.userName)} className="click-here-btn">
        <FontAwesomeIcon icon={faShoppingCart}/>
            Click Here</button>
        </div>
    );
};

export default UserDetails;