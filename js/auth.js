/* =========================================
   AUTHENTICATION JAVASCRIPT
========================================= */


/* ===============================
   SHOW / HIDE PASSWORD
================================ */

const togglePassword =
    document.getElementById("togglePassword");

const password =
    document.getElementById("password");


if (togglePassword && password) {

    togglePassword.addEventListener("click", function () {

        if (password.type === "password") {

            password.type = "text";

            togglePassword.textContent = "Hide";

        } else {

            password.type = "password";

            togglePassword.textContent = "Show";

        }

    });

}



/* ===============================
   LOGIN FORM
================================ */

const loginForm =
    document.getElementById("loginForm");

const loginMessage =
    document.getElementById("loginMessage");


if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const userId =
            document.getElementById("userId").value.trim();

        const passwordValue =
            document.getElementById("password").value.trim();


        if (!userId || !passwordValue) {

            loginMessage.textContent =
                "Please enter your User ID and password.";

            return;

        }


        /*
         * TEMPORARY FRONTEND LOGIN
         *
         * This is NOT real authentication.
         *
         * Later, the backend will:
         *
         * 1. Receive the User ID and password.
         * 2. Check the database.
         * 3. Identify the user's role.
         * 4. Create an authenticated session.
         * 5. Redirect the user to the correct dashboard.
         */


        loginMessage.textContent =
            "Login system is ready for backend integration.";

    });

}
