
let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Phone", category: "Electronics", price: 20000, stock: 15 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1000, stock: 3 },
    { id: 4, name: "Jeans", category: "Clothing", price: 1500, stock: 8 },
    { id: 5, name: "Book", category: "Education", price: 500, stock: 2 }
];

// 1. Low stock products
function getLowStockProducts() {
    return products.filter(product => product.stock < 10);
}

// 2. Sort products by price
function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

// 3. Total inventory value
function calculateTotalInventoryValue() {
    return products.reduce(
        (total, product) => total + (product.price * product.stock), 0
    );
}

// 4. Group products by category
function groupByCategory() {
    return products.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product.name);
        return groups;
    }, {});
}

console.log("Low Stock:", getLowStockProducts());
console.log("Sorted:", sortProductsByPrice());
console.log("Inventory Value:", calculateTotalInventoryValue());
console.log("Grouped:", groupByCategory());
