import React from 'react'
import { Button } from 'reactstrap';

export default class Cartbutton extends React.Component {

  handlClick = (e) => {
    if (this.props.errorMessage) {
      return;
    }
    this.props.addToCart(e.target.dataset.bookid)
  }

  render() {
    return (
      <Button className="shadow-none" disabled={this.props.disabled} size="sm" outline color="success" data-bookid={this.props.bookid} onClick={this.handlClick}>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart
        </Button>
    );
  }

};
