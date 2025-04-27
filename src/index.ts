//Define the vehicle interface

interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;

}


// Implement the Car class

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
      }

}

// Create an instance for Honda Vezel
const myCar = new Car("Honda", "Vezel", 2022);
myCar.start(); // Output: Car engine started

