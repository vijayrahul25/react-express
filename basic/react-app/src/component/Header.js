import React from 'react';
import { Link } from 'react-router-dom';
import CartPopup from './shop/CartPopup';



export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="navbar-header">
                    <span className="navbar-brand" >
                        <i className="fa fa-film  text-white my-auto"></i>
                        &nbsp;{this.props.title}</span>
                </div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><Link className="nav-link" to="/">home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/booklist">Books</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">contact</Link></li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <CartPopup cartItems={this.props.cartItems} cartTotal={this.props.cartTotal} removeFromCart={this.props.removeFromCart} />
                    </li>
                </ul>
            </nav >
        )
    }
};
