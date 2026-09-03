const menuBtn =
    document.getElementById("menuBtn");

const navbar =
    document.querySelector(".navbar");


if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("show");

    });

}
