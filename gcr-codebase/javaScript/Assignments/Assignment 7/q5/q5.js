const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const bigImage = document.getElementById("bigImage");
const modalContent = document.querySelector(".modal-content");
const close = document.getElementById("close");

images.forEach(function (image) {

    image.addEventListener("click", function () {

        modal.style.display = "flex";
        bigImage.src = image.src;

    });

});

modalContent.addEventListener("click", function (event) {
    event.stopPropagation();
});

modal.addEventListener("click", function () {
    modal.style.display = "none";
});

close.addEventListener("click", function () {
    modal.style.display = "none";
});