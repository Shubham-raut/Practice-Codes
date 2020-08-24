import React from 'react';
import MyInput from './MyInput';

const FuncCustomComp = (props) => {

    let textRef = null;

    const handleClick = () => {
        alert(`yey, input val is ${textRef.value}`)
    }
    return (
        <div style={styles.myInput}>
            <MyInput inputRef={(input) => { textRef = input; }} />
            <input
                type="button"
                value="show input"
                onClick={handleClick}
            />
        </div>
    );
}

const styles = {
    myInput: {
        'margin': '20px'
    }
}

export default FuncCustomComp;