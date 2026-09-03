/* =========================================
   EDULEARN ADMIN DASHBOARD JAVASCRIPT
   admin.js
========================================= */

const adminMenuBtn =
    document.getElementById("adminMenuBtn");

const adminSidebar =
    document.getElementById("adminSidebar");


/* =========================================
   MOBILE SIDEBAR
========================================= */

if (adminMenuBtn && adminSidebar) {

    adminMenuBtn.addEventListener("click", function () {

        adminSidebar.classList.toggle("show");

    });

}


/* =========================================
   CLOSE SIDEBAR WHEN LINK IS CLICKED
========================================= */

const adminNavLinks =
    document.querySelectorAll(".admin-nav a");

adminNavLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 768) {

            adminSidebar.classList.remove("show");

        }

    });

});
