'use strict';

let incCounter = () => {
    let counter = 0;

    let inner = () => {
        counter++;
        console.log(counter);
    }
    return inner;
}

let x= incCounter();
x();
x();
x();
let y=incCounter();
y();
x();
y();
x();
y();
x();

// using closure we can use variable outside the scope