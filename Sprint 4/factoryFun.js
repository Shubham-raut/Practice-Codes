// factory fun is that fun which returns object
let makeCar = function (brand, model, color) {
    return {
        'brand': brand,
        'model': model,
        'color': color
    }
}

// let corolla = makeCar('Toyota', 'Corolla', 'white');
// let eight100 = makeCar('Maruti', '800', 'red');

// console.log(corolla.brand);
// console.log(eight100.brand);



// constructor fun - first letter is capital- use this keyword - new keyword for creating obj
let Car = function (brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
}

// let corolla = new Car('Toyota', 'Corolla', 'white');
// let eight100 = new Car('Maruti', '800', 'red');

// console.log(corolla.brand);
// console.log(eight100.brand);



// class
class MyCar {
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    getDetails() {
        console.log(`Brand: ${this.brand} Model: ${this.model} Color: ${this.color}`)
    }
}

let corolla = new MyCar('Toyota', 'Corolla', 'white');
let eight100 = new MyCar('Maruti', '800', 'red');

console.log(corolla);
console.log(eight100);