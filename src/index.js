"use strict";
//Define the vehicle interface
// Implement the Car class
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// Create an instance for Honda Vezel
const myCar = new Car("Honda", "Vezel", 2022);
myCar.start(); // Output: Car engine started
