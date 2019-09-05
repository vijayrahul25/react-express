import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <nav className="header navbar navbar-dark bg-dark">
        <div className="container">
            <div className="row m-auto">
                <i className="fa fa-film fa-2x text-white my-auto"></i>
                <div className="h3 ml-3 my-auto text-light" href="/">{props.title}</div>
            </div>


            <div>
            <Link to="/">
                <button>home</button>
            </Link>
            <Link to="/booklist">
                <button>Books</button>
            </Link>
            <Link to="/contact">
                <button>contact</button>
            </Link>
            
            </div>

        </div>
        
    </nav>
);

Header.defaultProps = {
    title: 'Books Title'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;