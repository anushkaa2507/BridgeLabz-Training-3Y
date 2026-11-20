const input = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

addBtn.addEventListener("click", function () {
    const productName = input.value.trim();

    if (productName === "") {
        alert("Please enter product name");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${productName}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;

    productList.appendChild(li);
    input.value = "";
});

// Event delegation
productList.addEventListener("click", function (event) {

    const li = event.target.closest("li");

    if (!li) return;

    if (event.target.classList.contains("delete")) {
        li.remove();
    }

    if (event.target.classList.contains("edit")) {

        const span = li.querySelector("span");

        const editInput = document.createElement("input");
        editInput.value = span.textContent;

        li.replaceChild(editInput, span);

        editInput.focus();

        function saveEdit() {
            if (!editInput.isConnected) return;

            const newSpan = document.createElement("span");
            newSpan.textContent = editInput.value.trim() || span.textContent;

            li.replaceChild(newSpan, editInput);
        }

        editInput.addEventListener("blur", saveEdit);

        editInput.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                editInput.blur();
            }
        });
    }
});