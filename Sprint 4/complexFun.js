// complex function is that fun which returns another fun or accepts parameter as function

let powerNum = (num, power) => {
    return num ** power;
}

console.log(powerNum(3, 2));
console.log(powerNum(3, 3));

let powerFunc = (power) => {
    return (num) => {
        return num ** power;
    }
}

let squareFunc = powerFunc(2);
let cubeFunc = powerFunc(3);

console.log(squareFunc(4));
console.log(cubeFunc(4));