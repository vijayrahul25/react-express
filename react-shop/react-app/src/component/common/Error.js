import React from 'react';
const Error = (props) => {
    if(props.errorMessage)
    return (
        <div className='alert alert-danger' role='alert'>{props.errorMessage}</div>
    );
    return null;
}

export default Error;