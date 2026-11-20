const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const maxLength = 100;

message.addEventListener("input", function () {

    const remaining = maxLength - message.value.length;

    counter.textContent = remaining + " characters remaining";

    counter.className = "";

    if (remaining <= 20 && remaining > 0) {
        counter.classList.add("warning");
    }

    if (remaining === 0) {
        counter.classList.add("danger");
    }
});

// Prevent typing after 100 characters
message.addEventListener("keydown", function (event) {

    if (message.value.length >= maxLength &&
        event.key.length === 1 &&
        !event.ctrlKey && !event.metaKey) {

        event.preventDefault();
    }
});

// Reset everything
resetBtn.addEventListener("click", function () {
    message.value = "";
    counter.textContent = "100 characters remaining";
    counter.className = "";
});