import React, { Component } from 'react';

const MyInput = (props) => {
    return (<input
        type="text"
        ref={props.inputRef} />)
}

export default MyInput;