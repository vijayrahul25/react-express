import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateCartItems, updateCartTotal } from "./../../redux/actions/cart/cart";

class CartPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  componentWillMount() {
    console.log(this.props)
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  removeCartItem = (itemid) => {
    //let itemid = parseInt(e.target.parent.dataset.itemid);    
    //this.props.removeFromCart(itemid)
    //let cartItems = [...this.props.cartItems];
    let cartItems = [...this.props.cartItems].filter( item => item._id !== itemid )
    this.props.updateCartItems(cartItems);
    /*
    TODO: CART TOTAL UPDATE 
    */
  }

  render() {
    let data = <div className="row"><div className="col-sm"> No item added in cart</div></div>;
    let cartTotal = '';
    let cartFooter = '';
    let cartButtonText = '';
    if (this.props.cartItems.length > 0) {
      data = this.props.cartItems.map((item, index) => {
        return (
          <div className="row pb-1 pt-1 border-bottom" key={index}>

            <div className="col-sm"><img src={item.thumbnailUrl} className="mx-auto cartthumbs rounded-circle img-thumbnail" alt={item.title} /></div>
            <div className="col-sm">{item.title}</div>
            <div className="col-sm">{item.cartQuantity}</div>
            <div className="col-sm">{item.price}</div>
            <div className="col-sm">
              <Button className="shadow-none" outline color="danger" size="sm" onClick={() => this.removeCartItem(item._id)} >
                <i className="fa fa-trash-alt" aria-hidden="true"></i>
              </Button>
            </div>
          </div>
        );
      }
      )

      cartTotal = <p className="float-right"><b>Total : {this.props.cartTotal}</b></p>
      cartFooter = <Button color="primary" onClick={this.toggle}>Checkout</Button>
      cartButtonText = ` (${this.props.cartItems.length})`;
    }
    return (
      <div>
        <Button color="danger" onClick={this.toggle}> <i className="fa fa-shopping-cart fa-xs "></i>{cartButtonText}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className='modal-lg'>
          <ModalHeader className="border border-0" toggle={this.toggle}>Shooping Cart</ModalHeader>
          <ModalBody>
            {/* Cart Total : {this.props.cartTotal} */}
            {data}
            {cartTotal}
          </ModalBody>
          <ModalFooter className="border border-0">
            {cartFooter}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { cartItems, cartTotal } = state.cartReducer;
  return {
    cartItems, cartTotal
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateCartItems, updateCartTotal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPopup);
