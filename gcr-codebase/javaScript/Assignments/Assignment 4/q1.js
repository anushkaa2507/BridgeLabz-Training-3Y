"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount() {
        this.price = this.price - (this.price * 0.10);
    }

    displayDetails() {
        return `ID: ${this.id}
Name: ${this.name}
Price: Rs.${this.price}
Category: ${this.category}`;
    }
}


const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Mouse", 500, "Accessories"),
    new Product(3, "Mobile", 20000, "Electronics"),
    new Product(4, "Keyboard", 1500, "Accessories")
];


products.forEach(product => product.applyDiscount());


const filteredProducts = products.filter(product => product.price > 1000);


console.log("Products Above Rs.1000:");

filteredProducts.forEach(product => {
    console.log(product.displayDetails());
    console.log("-------------------");
});
