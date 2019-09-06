import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './component/Header';
import Book from './component/book/Book';

const Home = () => (
  <div>
    Home
  </div>
)


const Contact = () => (
  <div>
    Contact
  </div>
)


function App() {
  return (
    <Router>
    <div className="App">      
        <Header title='Book Library'/>
        <div className="container">
        <div className="row">
        <Route exact path="/" component={Home} />                
                <Route exact path="/contact" component={Contact} />                
                <Route exact path="/booklist" component={Book} />
                <Route path="/booklist/:page" component={Book} />
        </div>
        </div>
    </div>

    </Router>
  );
}

export default App;
