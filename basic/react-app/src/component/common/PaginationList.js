import React from 'react'

export default class PaginationList extends React.Component {

  handlClick = (e) => {
    let page = parseInt(e.target.dataset.page);
    console.log(page)
    // dont do anything    
  }

  handlNextClick = (e) => {    
    let page = parseInt(e.target.dataset.page);
    page = (page < parseInt(this.props.lastPage)) ? page + 1 : page;
    this.props.getpage(page);
  }
  handlPrevClick = (e) => {
    let page = parseInt(e.target.dataset.page);
    page = (page > 1) ? page - 1 : page;
    this.props.getpage(page);
  }

  handlFirstClick = (e) => {
    this.props.getpage(1);
  }
  handlLastClick = (e) => {
    this.props.getpage(parseInt(this.props.lastPage));
  }

  render() {        
    let lastPage = parseInt(this.props.lastPage);

    let prev = (this.props.currentpage > 1) ?  <li class="page-item"><span className='page-link' data-page={this.props.currentpage} onClick={this.handlPrevClick}>Prev</span></li> : null;
    let next = (this.props.currentpage < lastPage) ?  <li class="page-item"><span className='page-link' data-page={this.props.currentpage} onClick={this.handlNextClick}>Next</span></li> : null;

    let first = (this.props.currentpage > 1) ?  <li class="page-item"><span className='page-link' data-page={this.props.currentpage} onClick={this.handlFirstClick}>First</span></li> : null;
    let last = (this.props.currentpage < lastPage) ?  <li class="page-item"><span className='page-link' data-page={this.props.currentpage} onClick={this.handlLastClick}>Last</span></li> : null;
    return (      
      <ul className='pagination mt-3  justify-content-end'>
        {first}
        {next}
        <li class="page-item">
          <span className='page-link' data-page={this.props.currentpage} onClick={this.handlClick}>
            {this.props.currentpage}
          </span>
        </li>
        {prev}
        {last}
      </ul>      
    )
  }

};
