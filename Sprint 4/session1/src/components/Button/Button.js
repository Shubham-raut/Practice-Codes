import React from 'react';
import './Button.css';


const Button = () => {

    const clickHandlor = (event) => {
        let current = document.querySelectorAll("button.active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        event.target.className += " active";
    }

    return (
        <>
            <h1>Active Button</h1>
            <p>Highlight the active/current (pressed) button.</p>

            <div id="myDIV">
                <button onClick={clickHandlor} className="btn1">1</button>
                <button onClick={clickHandlor} className="btn1">2</button>
                <button onClick={clickHandlor} className="btn1">3</button>
                <button onClick={clickHandlor} className="btn1">4</button>
            </div>
        </>
    );
}

export default Button;

