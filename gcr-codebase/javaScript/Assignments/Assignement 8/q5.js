
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null || this.distance < 0) {
            throw new Error("Invalid distance!");
        }

        let farePerKm = 15;
        return this.distance * farePerKm;
    }
}

let driver = new Driver("Rahul", 4.8, "Swift");

console.log("Driver:", driver.name);
console.log("Rating:", driver.rating);
console.log("Vehicle:", driver.vehicle);

try {
    let trip = new Trip("Mathura", "Agra", 60);
    console.log("Fare: Rs.", trip.calculateFare());

    let invalidTrip = new Trip("Delhi", "Noida", -10);
    console.log("Fare:", invalidTrip.calculateFare());

} catch (error) {
    console.log("Error:", error.message);
}
