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
       return (<Books />);

    }
 }