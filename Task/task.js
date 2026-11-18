//task:
//create a object which has these points:
//-a customer name , moviename ,ticketprice and quantity 
//-a nested customer object with email and city
//- a seats array containing at least 3 seat numbers
// a method calculateTotalAmount()

//execute these:

//1. print the movieName using dot notation
//2. read the customers city using nested property access
//3- change the ticket price and add a bookingstatus property
//4- print all object keys using object.keys()
//5- destructure moviename and quantity
//6- calculate and print the total booking amount


const booking = {
    customerName: "Anushka",
    movieName: "Avengers",
    ticketPrice: 200,
    quantity: 3,
    customer: {
        email: "anushkaagr10@gmail.com",
        city: "Mathura"
    },
    seats: ["A1", "A2", "A3"],
    calculateTotalAmount: function () {
        return this.ticketPrice * this.quantity;
    }
};
console.log(booking.movieName);
console.log(booking.customer.city);
booking.ticketPrice = 250;
booking.bookingStatus = "Confirmed";
console.log(Object.keys(booking));
const { movieName, quantity } = booking;
console.log(movieName);
console.log(quantity);
console.log("Total Amount:", booking.calculateTotalAmount());
