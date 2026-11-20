const dropdownBtn = document.getElementById("dropdownBtn");
const options = document.getElementById("options");
const dropdown = document.querySelector(".dropdown");

// Show or hide dropdown
dropdownBtn.addEventListener("click", function (event) {

    event.stopPropagation();

    options.classList.toggle("show");

});

// Select option
options.addEventListener("click", function (event) {

    if (event.target.tagName === "P") {

        dropdownBtn.textContent = event.target.textContent;

        options.classList.remove("show");

    }

});

document.addEventListener("click", function (event) {

    if (!dropdown.contains(event.target)) {
        options.classList.remove("show");
    }

}, true);