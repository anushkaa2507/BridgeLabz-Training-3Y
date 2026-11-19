"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    applyCoupon(coupon) {
        const pattern = /^(SAVE|DISC)(10|20)$/;

        if (!pattern.test(coupon)) {
            console.log("Invalid Coupon Code");
            return;
        }

        let discount = Number(coupon.match(/\d+/)[0]);

        let total = this.getTotal();

        let discountAmount = total * discount / 100;

        let finalTotal = total - discountAmount;

        console.log("Coupon:", coupon);
        console.log("Discount:", discount + "%");
        console.log("Original Total:", total);
        console.log("Discount Amount:", discountAmount);
        console.log("Final Total:", finalTotal);
    }
}

const cart = new Cart();

cart.addItem("Laptop", 45000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1500, 1);

console.log("Cart Total:", cart.getTotal());

cart.applyCoupon("SAVE20");
