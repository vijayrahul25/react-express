import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './component/Header';
import BookPage from './component/book/BookPage';
import bookApi from './service/bookApi';

import 'bootstrap/dist/css/bootstrap.css';

const Home = () => (
  <div>
    <div className="row">Home
     <div>Welcome to book library sample</div>
    </div>

  </div>
)


const Contact = () => (
  <div>
    Contact
  </div>
)

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      books: [],
      bookfetched: false,
      pagination: { totalRecords: 0, startPage: 1, currentPage: 1, pageSize: 10 },
      cartItems: [],
      cartTotal: 0
    };
  }
  getBooks = async (page) => {
    var bookData = await bookApi.getBooks(page, this.state.pagination.pageSize);
    const { pagination } = { ...this.state };
    pagination.currentPage = page;

    this.setState(prevstate => ({ pagination, books: bookData, bookfetched: true }));

  }

  getTotalbooks = async () => {
    var count = await bookApi.getTotalbooks();
    const { pagination } = { ...this.state };
    pagination.totalRecords = count;
    this.setState(prevstate => ({ pagination }));
  }

  addToCart = (bookid) => {
    const { books } = this.state;
    var updatedBooks = books.map((book, index) => {
      if (book._id === bookid) {
        if (book.quantity <= 0) {
          // no more item left send error message
          return {
            ...book,
            'error': 'No more book left !!'
          }
        }

        let cartTotal = parseInt(this.state.cartTotal) + parseInt(book.price);

        let cartItem = this.state.books.find(book => book._id === bookid);

        let itemExist = this.state.cartItems.findIndex(book => bookid === book._id);

        if (itemExist >= 0) {
          let cartItems = this.state.cartItems;
          cartItems[itemExist].cartQuantity += 1;

          this.setState(prevstate => ({ cartTotal, cartItems }));
        } else {
          cartItem.cartQuantity = 1;
          this.setState(prevstate => ({ cartTotal, cartItems: [...prevstate.cartItems, cartItem] }));
        }


        return {
          ...book,  // copy the existing item
          quantity: parseInt(book.quantity) - 1  // replace the email addr
        }
      }
      return book;
    });

    this.setState(prevstate => ({ books: updatedBooks }));
  }

  removeFromCart = (itemid) => {
    let cartItems = this.state.cartItems.filter(item => item._id !== itemid);
    this.setState(prevstate => ({ cartItems }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header title='Book Shop' cartItems={this.state.cartItems} cartTotal={this.state.cartTotal}  removeFromCart={this.removeFromCart}/>
          <div className="container">
            <div className="row">
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
              {/* For any React Router v4 optional parameters in a <Route> are denoted with a ? suffix. */}

              <Route path='/booklist/:page?' render={(props) => <BookPage
                {...props}
                globalState={this.state}
                getBooks={this.getBooks}
                getTotalbooks={this.getTotalbooks}
                addToCart={this.addToCart}
              />}
              />

            </div>
          </div>
        </div>
      </Router>
    );
  }
}
