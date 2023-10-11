class Vehicle {
    constructor(make, model, year) {
        this.a = make;
        this.b = model;
        this.c = year;
    }
    honk() {
        console.log('BEEP!!');
    }
    toString() {
        console.log(`The vehicle is a ${this.a} ${this.b} from the year of ${this.c} `);
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        const numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        const numWheels = 2;
    }
        revEngine() {
            console.log('VROOM!!!');
        }
    }

    class Garage {
        constructor(capacity) {
            this.vehicles = [Motorcycle, Car];
            this.capacity = 2;
        }
        
        add(newVehicle) {
            if(!(newVehicle instanceof Vehicle)) {
                return "Only vehicles vare allowed in here!!";
            }
            if(this.vehicles.length >= this.capacity) {
                return "Sorry, we're full."
            }
            this.vehicles.push(newVehicle);
            return "Vehicle added!!";
        }
        
    }