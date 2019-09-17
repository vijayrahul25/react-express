import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
/* import redux actions*/
import {  setTotalRecords, setCurrentPage } from "./../../redux/actions/pagination";

class PaginationList extends React.Component {

    handlClick = (e) => {
        let page = parseInt(e.target.dataset.page);
        console.log(page)
        // dont do anything    
    }

    handlNextClick = (e) => {        
        let page = parseInt(e.target.dataset.page);
        page = (page < parseInt(this.props.pagination.lastPage)) ? page + 1 : page;
        this.loadPage(page);
    }
    handlPrevClick = (e) => {
        let page = parseInt(e.target.dataset.page);
        
        page = (page > 1) ? page - 1 : page;
        this.loadPage(page);
    }

    handlFirstClick = (e) => {
        this.loadPage(1);
    }
    handlLastClick = (e) => {        
        this.loadPage(parseInt(this.props.pagination.lastPage));
    }

    async loadPage(page) {
    await this.props.setCurrentPage(parseInt(page));
    this.props.loadNextPageRecords(this.props.pagination.currentPage, this.props.pagination.pageSize);
    }

    render() {
        let lastPage = this.props.pagination.lastPage;

        let prev = (this.props.pagination.currentPage > 1) ? <li className="page-item clickable"><span className='page-link' data-page={this.props.pagination.currentPage} onClick={this.handlPrevClick}>Prev</span></li> : null;
        let next = (this.props.pagination.currentPage < lastPage) ? <li className="page-item clickable"><span className='page-link' data-page={this.props.pagination.currentPage} onClick={this.handlNextClick}>Next</span></li> : null;

        let first = (this.props.pagination.currentPage > 1) ? <li className="page-item clickable"><span className='page-link' data-page={this.props.pagination.currentPage} onClick={this.handlFirstClick}>First</span></li> : null;
        let last = (this.props.pagination.currentPage < lastPage) ? <li className="page-item clickable"><span className='page-link' data-page={this.props.pagination.currentPage} onClick={this.handlLastClick}>Last</span></li> : null;
        return (
            <ul className='pagination mt-3  justify-content-end'>
                {first}
                {next}
                <li className="page-item">
                    <span className='page-link' data-page={this.props.pagination.currentPage} onClick={this.handlClick}>
                        {this.props.pagination.currentPage}
                    </span>
                </li>
                {prev}
                {last}
            </ul>
        )
    }

};
const mapStateToProps = state => {
    const { pagination } = state.paginationReducer;

    return {
        pagination
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({  setTotalRecords, setCurrentPage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationList);
