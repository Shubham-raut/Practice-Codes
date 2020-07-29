class Vehicle{
    constructor(make, model, color){
        this.make=make;
        this.model=model;
        this.color=color;
    }
    getName(){
        return [this.make,this.model,this.color];
    }
}
class AnotherVehicle extends Vehicle{
    showName(){
        console.log(...this.getName());
    }
}

let v=new AnotherVehicle('toyota','corolla','black');
v.showName();
