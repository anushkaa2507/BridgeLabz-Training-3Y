
"use strict";

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(this.title + " is already issued.");
        } else {
            this.isIssued = true;
            console.log(this.title + " issued successfully.");
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(this.title + " returned successfully.");
        } else {
            console.log(this.title + " was not issued.");
        }
    }
}

const books = [
    new Book("JavaScript", "John", "101"),
    new Book("Python", "David", "102"),
    new Book("Java", "James", "103", true),
    new Book("C++", "Robert", "104")
];

console.log("Available Books:");

books.filter(book => !book.isIssued).forEach(book => {
    console.log(book.title, "-", book.ISBN);
});

function searchBook(isbn) {
    return books.find(book => book.ISBN === isbn);
}

let selectedBook = searchBook("102");

if (selectedBook) {
    selectedBook.issueBook();
} else {
    console.log("Book not found.");
}

console.log("\nUpdated Available Books:");

books.filter(book => !book.isIssued).forEach(book => {
    console.log(book.title);
});
