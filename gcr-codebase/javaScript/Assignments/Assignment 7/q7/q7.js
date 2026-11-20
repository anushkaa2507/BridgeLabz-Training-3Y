const box = document.getElementById("box");
const coordinates = document.getElementById("coordinates");

// Track mouse movement
box.addEventListener("mousemove", function (event) {

    const x = event.clientX;
    const y = event.clientY;

    coordinates.textContent =
        "clientX: " + x + " | clientY: " + y;

});

// Drop red dot on double click
box.addEventListener("dblclick", function (event) {

    const rect = box.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const dot = document.createElement("div");

    dot.className = "dot";

    dot.style.left = x + "px";
    dot.style.top = y + "px";

    box.appendChild(dot);

});