import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import store from "./../../store";
import { actionLoadBooks, actionLoadBookTotal } from "./../../redux/actions/book/books";
import BookList from './BookList';

class Books extends React.Component {

    async componentDidMount() {
        await this.props.actionLoadBookTotal();
        await this.props.actionLoadBooks();
    }


    render() {
        let data = null;
        //let lastPage = Math.ceil(this.props.globalState.pagination.totalRecords / this.props.globalState.pagination.pageSize);
       
        if (this.props.isFetching) {
            data = 'Loading...';
        } else {
            
            if (this.props.books.length > 0) {
                data = this.props.books.map((book, index) => {
               
                    return <BookList key={index} book={book} addToCart={this.props.addToCart} />
                }
                )

                data = <div className="row">
                    <div className="card-columns text-center" >
                        {data}
                    </div>
                </div>
            } else {
                data = <div className="row"><div className="alert alert-warning">
                    No records found...
                            </div></div>
            }
        }

        return (
            <div>{data}</div>
        );

    }
}

const mapStateToProps = state => {
    const { books, isError, isFetching, totalBooks } = state;
    return {
        books, isError, isFetching, totalBooks
    };
};

const mapDispatchToProps = (dispatch) => {   
    return bindActionCreators({ actionLoadBooks, actionLoadBookTotal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps )(Books);
