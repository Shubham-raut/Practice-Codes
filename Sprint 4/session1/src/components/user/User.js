import React from 'react';

let User = (props) => {
    let age = props.age || 'NA';

    if (props.children) {
        return (
            <div>Name: {props.children} | Age: {age}</div>
        )
    }
    else {
        return (<div>Invalid Entry</div>)
    }

}

export default User;