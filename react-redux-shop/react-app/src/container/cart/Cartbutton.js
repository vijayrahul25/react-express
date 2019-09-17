import React from 'react'
import { Button } from 'reactstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateCartItems, updateCartTotal } from "./../../redux/actions/cart/cart";
import { update_books_state } from "./../../redux/actions/book/books";


class Cartbutton extends React.Component {

  handlClick = (e) => {
    if (this.props.errorMessage) {
      return;
    }
    //this.props.addToCart(e.target.dataset.bookid)
    let bookid = e.target.dataset.bookid;
    let updatedBooks = this.props.books.map((book, index) => {
      if (book._id === bookid) {
        if (book.quantity <= 0) {         
          //no more item left send error message
          return {
            ...book,
            'error': 'No more book left !!'
          }
        }
        let cartItems = [...this.props.cartItems];
        let cartItem = book;
        let itemExist = this.props.cartItems.findIndex(book => bookid === book._id);

        if (itemExist >= 0) {
          let cartQuantity = parseInt(cartItems[itemExist].cartQuantity) + 1
          cartItems[itemExist].cartQuantity = cartQuantity;          
        } else {
          cartItem.cartQuantity = 1;
          cartItems.push(cartItem);
        }


        let cartTotal = parseInt(this.props.cartTotal) + parseInt(book.price);

        this.props.updateCartItems(cartItems);
        this.props.updateCartTotal(cartTotal);
        
        return {
          ...book,  // copy the existing item
          quantity: parseInt(book.quantity) - 1  // replace the email addr
        }
      }
      return book;
    });
//updatedBooks

this.props.update_books_state(updatedBooks);

  }

  render() {
    return (
      <Button className="shadow-none" disabled={this.props.disabled} size="sm" outline color="success" data-bookid={this.props.bookid} onClick={this.handlClick}>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart
        </Button>
    );
  }
};
const mapStateToProps = state => {
  const { books } = state.booksReducer;
  const { cartItems, cartTotal } = state.cartReducer;
  return {
    books, cartItems, cartTotal
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateCartItems, updateCartTotal, update_books_state }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cartbutton);
