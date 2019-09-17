import React from 'react'
import ErrorMessage from './../../component/common/Error';
import Cartbutton from './../cart/Cartbutton';

export default class BookList extends React.Component {

    // static getDerivedStateFromProps(nextProps, prevState) {    
    //   if (prevState.book._id !== nextProps.book._id) {
    //     return {
    //       book: nextProps.book
    //     };
    //   }

    //   // Return null to indicate no change to state.
    //   return null;
    // }

    render() {
        
        let short = (this.props.book.shortDescription) ? this.props.book.shortDescription.substring(0, 50) : '';
        let disabled = (this.props.book.error) ? true : false;
        return (
            <div>
                <div className="card">
                    <div className="card-header"><h5 className="card-title">{this.props.book.seq}: {this.props.book.title}</h5> </div>
                    <img src={this.props.book.thumbnailUrl} className="card-img-top bookthumbs" alt={this.props.book.title} />
                    <div className="card-body">
                        <h5 className="card-title">ISBN: {this.props.book.isbn}</h5>
                        <h5 className="card-title">Pages: {this.props.book.pageCount}</h5>
                        <p className="card-text">{short}...</p>
                        <p className="card-text text-left">Authors: {this.props.book.authors}</p>
                        <p className="card-text text-left">Categories: {this.props.book.categories}</p>
                    </div>
                    <div className="card-footer">
                    <ErrorMessage errorMessage = {this.props.book.error} />
                        <span className='pr-1'>Quanity: {this.props.book.quantity}</span>
                        <span className='pr-1'>Price: {this.props.book.price}</span>
                        <span><Cartbutton  disabled={disabled} bookid={this.props.book._id} errorMessage = {this.props.book.error}/></span>
                    </div>
                </div>
            </div>
        )
    }
};
