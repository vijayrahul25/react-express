import React from 'react';
import Books from './Books';

export default class Book extends React.Component {
    constructor() {
        super();

        this.state = {
            title: 'React Books Cards'
        };
    }

    render() {
        let page = (parseInt(this.props.match.params.page)) ? parseInt(this.props.match.params.page) : 1;
        return (<Books page={page} />);

    }
}