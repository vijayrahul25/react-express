
import { Component } from 'react';
import AuthService from './../../service/AuthService';

export default class Logout extends Component {
  componentWillMount() {    
    const Auth = new AuthService();
    Auth.logout();
    this.props.setUserOnLogout();
    this.props.history.push('/login');    
  }

  render() {
    return null
  }    
}