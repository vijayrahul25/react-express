import React from 'react';
import { Link } from 'react-router-dom';
import CartPopup from './../shop/CartPopup';
import AuthService from './../../service/AuthService';

function UserNavigation(props) {
    return (<ul class="navbar-nav">
         <li className="nav-item"><p className="navbar-text " ><mark>Hi, {props.username}</mark></p></li>
        <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>        
        <li class="nav-item">
            <CartPopup cartItems={props.cartItems} cartTotal={props.cartTotal} removeFromCart={props.removeFromCart} />
        </li>
    </ul>);
}

function GuestNavigation(props) {
    return (<ul class="navbar-nav">
        <li className="nav-item"><p className="navbar-text" ><mark>Hi, {props.username}</mark></p></li>
        <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
        <li class="nav-item">
            <CartPopup cartItems={props.cartItems} cartTotal={props.cartTotal} removeFromCart={props.removeFromCart} />
        </li>
    </ul>);
}

export default class Header extends React.Component {
    render() {
        const Auth = new AuthService();    
        let html =  <GuestNavigation {...this.props} username='Guest' />;
        if(Auth.isLoggedIn()) {
            html =  <UserNavigation {...this.props} username={Auth.getProfile().username}/>;
        }

        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <span className="navbar-header">
                    <span className="navbar-brand" >
                        <i className="fa fa-film  text-white my-auto"></i>
                        &nbsp;{this.props.title}</span>
                </span>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><Link className="nav-link" to="/">home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/booklist">Books</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">contact</Link></li>
                </ul>
                {html}
            </nav >
        )
    }
};
