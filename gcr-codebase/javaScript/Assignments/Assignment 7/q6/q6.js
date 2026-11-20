const search = document.getElementById("search");
const rows = document.querySelectorAll("#studentTable tr");
const noResult = document.getElementById("noResult");

search.addEventListener("input", function () {

    const value = search.value.toLowerCase();

    let found = 0;

    rows.forEach(function (row) {

        const text = row.textContent.toLowerCase();

        if (text.includes(value)) {
            row.style.display = "";
            found++;
        } else {
            row.style.display = "none";
        }

    });

    if (found === 0) {
        noResult.textContent = "No results found";
    } else {
        noResult.textContent = "";
    }

});