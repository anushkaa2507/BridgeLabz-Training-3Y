function nextStep(step) {

    if (step === 1) {

        const name = document.getElementById("name").value.trim();

        if (name === "") {
            alert("Please enter your name");
            return;
        }

        showStep("step2");
    }

    else if (step === 2) {

        const email = document.getElementById("email").value.trim();

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Enter a valid email");
            return;
        }

        showStep("step3");
    }

    else if (step === 3) {

        const password = document.getElementById("password").value;

        if (password.length < 6) {
            alert("Password must contain at least 6 characters");
            return;
        }

        document.getElementById("details").innerHTML =
            "Name: " + document.getElementById("name").value +
            "<br>Email: " + document.getElementById("email").value;

        showStep("summary");
    }
}

// Show selected step
function showStep(id) {

    document.querySelectorAll("body > div").forEach(div => {
        div.classList.add("hidden");
    });

    document.getElementById(id).classList.remove("hidden");
}

// Back button
function backStep(step) {

    if (step === 2) {
        showStep("step1");
    }

    if (step === 3) {
        showStep("step2");
    }
}