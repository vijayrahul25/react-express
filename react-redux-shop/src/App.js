import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './component/common/Header';
import Login from './component/authentication/Login';
import Logout from './component/authentication/Logout';
import Signup from './component/authentication/Signup';
import BookPage from './container/book/Books.js';

import 'bootstrap/dist/css/bootstrap.css';

const Home = () => (

  <div className="col-sm">Home
     <div>Welcome to book library sample</div>
    </div>

)


const Contact = () => (
  <div className="col-sm">
    Contact
  </div>
)

export default class App extends React.Component {
  constructor() {
    super();
    
    this.state = {    
      user:{_id:0,username:'Guest'}
    };
  }

  setUserOnLogin = (user) => this.setState({user});

  setUserOnLogout = () => { 
    let user= {_id:0,username:'Guest'};
    this.setState({user});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header title='Book Shop' user={this.state.user} setUserOnLogin={this.setUserOnLogin}/>
          <div className="container h-100">
            <div className="row">
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/signup" component={Signup} />
              <Route path='/login' render={(props) => <Login {...props} setUserOnLogin = {this.setUserOnLogin}/>}/>
              <Route path='/logout' render={(props) => <Logout {...props} setUserOnLogout = {this.setUserOnLogout}/>}/>
              {/* For any React Router v4 optional parameters in a <Route> are denoted with a ? suffix. */}      
              <Route exact path="/booklist/:page?" component={BookPage} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
